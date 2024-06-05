from flask import Flask, request, jsonify, session, url_for, render_template
from flask_mail import Mail, Message
from itsdangerous import URLSafeTimedSerializer, SignatureExpired
import mysql.connector
import re
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
import secrets
from machine_learning import predict_cluster, recommend_meal_plan, recommend_workout_plan # type: ignore

app = Flask(__name__)
CORS(app)

app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = 'asadameen12123@.com'
app.config['MAIL_PASSWORD'] = 'gxns txzf zbyw plbs'
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
app.secret_key = secrets.token_urlsafe(16)

password_regex = re.compile(r'^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$')

mail = Mail(app)
serializer = URLSafeTimedSerializer(app.secret_key)

def get_db_connection():
    conn = mysql.connector.connect(
        host='localhost',
        user='root',
        password='Pakistan1*',
        database='Fitness_db'
    )
    return conn

def init_db():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS user_data (
            id INT AUTO_INCREMENT PRIMARY KEY,
            user_id INT,
            weight FLOAT,
            height FLOAT,
            age INT,
            gender VARCHAR(10),
            fitness_goal VARCHAR(20),
            muscle_groups TEXT,
            workout_intensity VARCHAR(20),
            activity_level VARCHAR(20),
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY(user_id) REFERENCES users(id)
        )
    ''')


    cursor.execute('''
        CREATE TABLE IF NOT EXISTS meal_plans (
            id INT AUTO_INCREMENT PRIMARY KEY,
            user_id INT,
            meal_plan TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY(user_id) REFERENCES users(id)
        )
    ''')
    conn.commit()
    conn.close()



@app.route('/signup', methods=['POST'])
def signup():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    if not re.match(r"[^@]+@[^@]+\.[^@]+", email):
        return jsonify({'message': 'Invalid email format'}), 400

    if not password_regex.match(password):
        return jsonify({'message': 'Password should contain at least 8 characters with one uppercase letter, one lowercase letter, and one digit'}), 400

    hashed_password = generate_password_hash(password)
    conn = get_db_connection()
    cursor = conn.cursor()
    try:
        cursor.execute("INSERT INTO users (email, password) VALUES (%s, %s)", (email, hashed_password))
        conn.commit()
        user_id = cursor.lastrowid
        
        # Predict cluster ID for the new user
        cursor.execute("SELECT * FROM user_data WHERE user_id=%s", (user_id,))
        user_data = cursor.fetchone()
        
        if user_data:
            cluster_id = predict_cluster(user_data[2:10])
            cursor.execute("UPDATE users SET cluster_id=%s WHERE id=%s", (cluster_id, user_id))
            conn.commit()
        
        return jsonify({'user_id': user_id, 'message': 'User created successfully'})
    except mysql.connector.IntegrityError:
        return jsonify({'message': 'User already exists'}), 400
    finally:
        conn.close()



@app.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT id, password FROM users WHERE email=%s", (email,))
    user = cursor.fetchone()

    if user and check_password_hash(user[1], password):
        # Check if user data exists
        cursor.execute("SELECT id FROM user_data WHERE user_id=%s", (user[0],))
        user_data = cursor.fetchone()
        has_user_data = bool(user_data)

        session['user_id'] = user[0]
        return jsonify({'user_id': user[0], 'message': 'Login successful', 'has_user_data': has_user_data}), 200
    else:
        return jsonify({'message': 'Invalid email or password'}), 401
 


@app.route('/logout', methods=['GET'])
def logout():
    session.pop('user_id', None)
    return jsonify({'message': 'Logged out successfully'}), 200

@app.route('/password_reset_request', methods=['POST'])
def password_reset_request():
    email = request.json['email']
    token = serializer.dumps(email, salt='email-reset')
    link = url_for('reset_password', token=token, _external=True)

    msg = Message('Reset Your Password', sender='asadameen12123@gmail.com', recipients=[email])
    msg.body = f'Follow this link to reset your password: {link}'
    mail.send(msg)

    return jsonify({'message': 'Password reset email sent'})

@app.route('/reset_password/<token>', methods=['GET', 'POST'])
def reset_password(token):
    try:
        email = serializer.loads(token, salt='email-reset', max_age=3600)
    except SignatureExpired:
        return jsonify({'message': 'The password reset link is expired'}), 400

    if request.method == 'GET':
        return render_template('reset_password.html', token=token)

    if request.method == 'POST':
        new_password = request.json['password']
        if not password_regex.match(new_password):
            return jsonify({'message': 'Password should contain at least 8 characters with one uppercase letter, one lowercase letter, and one digit'}), 400

        hashed_password = generate_password_hash(new_password)
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("UPDATE users SET password=%s WHERE email=%s", (hashed_password, email))
        conn.commit()
        conn.close()
        return jsonify({'message': 'Password updated successfully'})

def validate_and_format_data(input_data):
    fields = ['weight', 'height', 'age', 'gender', 'fitness_goal', 'muscle_groups', 'workout_intensity', 'activity_level']
    data_types = {
        'weight': float,
        'height': float,
        'age': int,
        'gender': str,
        'fitness_goal': str,
        'muscle_groups': str,
        'workout_intensity': str,
        'activity_level': str
    }
    validated_data = {}
    for field in fields:
        value = input_data.get(field, None)
        if value is None:
            continue
        try:
            validated_value = data_types[field](value)
            if field == 'muscle_groups' and isinstance(validated_value, str):
                validated_value = validated_value.split(', ')
            validated_data[field] = validated_value
        except ValueError as e:
            raise ValueError(f"Error converting {field}: {str(e)}")
    return validated_data


@app.route('/save_user_data', methods=['POST'])
def save_user_data():
    if 'user_id' not in session:
        return jsonify({'error': 'User not logged in'}), 403
    user_data = request.json
    user_id = session['user_id']
    
    # Ensure muscle_groups is a comma-separated string
    if 'muscle_groups' in user_data and isinstance(user_data['muscle_groups'], list):
        user_data['muscle_groups'] = ', '.join(user_data['muscle_groups'])
    
    # Prepare data for insertion/update
    fields = ', '.join(user_data.keys())
    placeholders = ', '.join(['%s'] * len(user_data))
    values = list(user_data.values())
    
    conn = get_db_connection()
    cursor = conn.cursor()
    try:
        # Check if user data already exists
        cursor.execute("SELECT id FROM user_data WHERE user_id=%s", (user_id,))
        existing_data = cursor.fetchone()
        if existing_data:
            # If data exists, update it
            update_query = f"UPDATE user_data SET {', '.join([f'{field}=%s' for field in user_data.keys()])} WHERE user_id=%s"
            cursor.execute(update_query, values + [user_id])
        else:
            # If no data exists, insert new data
            insert_query = f"INSERT INTO user_data (user_id, {fields}) VALUES (%s, {placeholders})"
            cursor.execute(insert_query, [user_id] + values)
        conn.commit()
        cursor.close()  # Close cursor after commit
        return jsonify({'message': 'User data saved successfully'})
    except mysql.connector.Error as e:
        conn.rollback()
        return jsonify({'error': f'Failed to save user data: {str(e)}'}), 500
    finally:
        conn.close()


from datetime import datetime, timedelta

import json

@app.route('/recommend_meal_plan', methods=['POST'])
def get_recommend_meal_plan():
    if 'user_id' not in session:
        return jsonify({'error': 'User not logged in'}), 403
    user_id = session['user_id']
    conn = get_db_connection()
    cursor = conn.cursor()

    # Check if there is a valid meal plan already
    cursor.execute("SELECT meal_plan, created_at FROM meal_plans WHERE user_id=%s ORDER BY created_at DESC LIMIT 1", (user_id,))
    result = cursor.fetchone()

    if result:
        meal_plan_json, created_at = result
        if datetime.now() - created_at < timedelta(hours=24):
            meal_plan = json.loads(meal_plan_json)
            return jsonify(meal_plan)  # Return the stored meal plan

    # If not valid or does not exist, generate a new meal plan
    cursor.execute("SELECT * FROM user_data WHERE user_id=%s", (user_id,))
    user_data = cursor.fetchone()

    if not user_data:
        return jsonify({'error': 'User data not found'}), 404

    cluster_id = predict_cluster(user_data[2:10])
    new_meal_plan = recommend_meal_plan(cluster_id, days=1)

    # Store the new meal plan in the database
    cursor.execute("INSERT INTO meal_plans (user_id, meal_plan) VALUES (%s, %s)", (user_id, json.dumps(new_meal_plan)))
    conn.commit()
    conn.close()

    return jsonify(new_meal_plan)



@app.route('/recommend_workout_plan', methods=['POST'])
def get_recommend_workout_plan():
    if 'user_id' not in session:
        return jsonify({'error': 'User not logged in'}), 403
    user_id = session['user_id']
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM user_data WHERE user_id=%s", (user_id,))
    user_data = cursor.fetchone()
    conn.close()

    if not user_data:
        return jsonify({'error': 'User data not found'}), 404

    # Extract muscle_groups, and other relevant user data
    muscle_groups = user_data[7].split(', ')
    workout_plan = recommend_workout_plan(muscle_groups, user_data[2], user_data[3], user_data[4], user_data[5], user_data[6], user_data[8], user_data[9])
    
    return jsonify(workout_plan)

if __name__ == '__main__':
    init_db()
    app.run(debug=True, host='0.0.0.0', port=5000)
