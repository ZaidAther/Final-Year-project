import pandas as pd
import numpy as np
from sklearn.cluster import KMeans
import random
from sklearn.preprocessing import StandardScaler
from sklearn.cluster import AgglomerativeClustering
from collections import defaultdict



kmeans=None
scaler=None

def load_data():
    df_nutrition = pd.read_csv('nutrition.csv')
    df_exercises = pd.read_csv('GymExercisee.csv')

    # Check and handle missing values
    df_nutrition = df_nutrition.dropna(subset=['calories', 'protein', 'carbohydrate', 'total_fat', 'fat', 'name', 'Images', 'serving_size',"ingredients"])

    # Convert relevant columns to numeric, handling errors
    numeric_columns = ['calories', 'protein', 'carbohydrate', 'total_fat', 'fat']
    for column in numeric_columns:
        df_nutrition[column] = pd.to_numeric(df_nutrition[column], errors='coerce')
    
    df_nutrition = df_nutrition.dropna(subset=numeric_columns)

    scaler = StandardScaler()
    nutrition_scaled = scaler.fit_transform(df_nutrition[numeric_columns])

    kmeans = KMeans(n_clusters=5, random_state=42)
    df_nutrition['cluster'] = kmeans.fit_predict(nutrition_scaled)

    return df_nutrition, df_exercises, kmeans, scaler

def convert_to_grams(serving_size):
    size = serving_size.lower().strip()
    if 'ml' in size:
        return float(size.replace('ml', '').strip())
    elif 'g' in size:
        return float(size.replace('g', '').strip())
    elif 'piece' in size or 'slice' in size or 'skewer' in size:
        return 100  # Default value for pieces, slices, skewers
    else:
        try:
            return float(size)  # Attempt to parse as a number
        except ValueError:
            return 100  # Default fallback value

def adjust_nutrition_for_serving(nutrition_df):
    nutrition_df['serving_size_grams'] = nutrition_df['serving_size'].apply(convert_to_grams)
    for nutrient in ['calories', 'protein', 'carbohydrate', 'total_fat', 'fat']:
        nutrition_df[nutrient] = nutrition_df[nutrient] * (nutrition_df['serving_size_grams'] / 100)
    return nutrition_df

# Load and adjust the data
df_nutrition, df_exercises, kmeans, scaler = load_data()
df_nutrition = adjust_nutrition_for_serving(df_nutrition)



def recommend_meal_plan(cluster_id, days=1):
    meal_plan = defaultdict(lambda: defaultdict(dict))
    
    try:
        for day in range(1, days + 1):
            used_meal_ids = set()  # Track used meals for the current day

            for meal_time in ['breakfast', 'lunch', 'dinner']:
                # Filter the dataframe by cluster
                filtered_meals = df_nutrition[df_nutrition['cluster'] == cluster_id]
                
                if filtered_meals.empty:
                    raise ValueError(f"No meals available for cluster_id {cluster_id}")
                
                # Ensure we don't repeat meals within the same day
                available_meals = filtered_meals[~filtered_meals.index.isin(used_meal_ids)]
                
                if available_meals.empty:
                    raise ValueError(f"Not enough unique meals available for cluster_id {cluster_id} to generate a plan for {days} days")

                meal = available_meals.sample(n=1)
                meal_id = meal.index[0]
                used_meal_ids.add(meal_id)
                
                meal_plan[f"Day {day}"][meal_time] = {
                    'name': meal.iloc[0]['name'],
                    'calories': int(meal.iloc[0]['calories']),
                    'protein': float(meal.iloc[0]['protein']),
                    'carbohydrate': float(meal.iloc[0]['carbohydrate']),
                    'fat': float(meal.iloc[0]['total_fat']),
                    'ingredients': meal.iloc[0]['ingredients'],
                    'image': meal.iloc[0]['Images']  # Assuming 'Images' is the column containing image URLs
                }
                
    except Exception as e:
        print(f"Error in recommend_meal_plan: {str(e)}")
        # Optionally, return a message or a default meal plan here
        # For example:
        # meal_plan['error'] = "Unable to generate meal plan"
    
    return meal_plan







def recommend_workout_plan(muscle_groups, weight, height, age, gender, fitness_goal, workout_intensity, activity_level):
    exercise_data = df_exercises[['muscle_gp', 'equipment_details', 'Description', 'Exercise_Name', 'Exercise_Video', 'Rating']]
    exercise_data = pd.concat([exercise_data, exercise_data['muscle_gp'].str.get_dummies(sep=', ')], axis=1)
    exercise_data.drop(columns=['muscle_gp'], inplace=True)

    numeric_columns = exercise_data.select_dtypes(include=['float64', 'int64']).columns
    scaler = StandardScaler()
    exercise_scaled = scaler.fit_transform(exercise_data[numeric_columns])

    hierarchical_clustering = AgglomerativeClustering(n_clusters=5)
    exercise_clusters = hierarchical_clustering.fit_predict(exercise_scaled)
    df_exercises['cluster'] = exercise_clusters

    weeks, days_per_week = determine_weeks_and_days(fitness_goal, workout_intensity, activity_level)
    total_days = weeks * days_per_week
    cycle_length = len(muscle_groups)

    
    weeks, days_per_week = determine_weeks_and_days(fitness_goal, workout_intensity, activity_level)
    
    # Initialize workout plan dictionary
    workout_plan = defaultdict(dict)
    random.seed(42)  # Set seed for reproducibility

    # Define day names for a week
    day_names = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

    # Loop through each day of the week
    for day_idx in range(7):  # 7 days in a week
        day_name = day_names[day_idx]

        # Get the corresponding muscle group for the day
        muscle_group = muscle_groups[day_idx % len(muscle_groups)]

        # Retrieve exercises for the muscle group
        exercises = df_exercises[df_exercises['muscle_gp'].str.contains(muscle_group, case=False, na=False)]

        print(f"Day: {day_name}, Muscle Group: {muscle_group}, Available Exercises: {len(exercises)}")

        # If there are available exercises for the muscle group
        if not exercises.empty:
            sorted_exercises = exercises.sort_values(by='Rating', ascending=False)
            top_exercises = sorted_exercises.head(10)  # Top 10 exercises

            available_exercises = [exercise for exercise in top_exercises.itertuples() if exercise.Exercise_Name not in workout_plan[day_name]]

            if available_exercises:
                # Select up to 3 random exercises
                selected_exercises = random.sample(available_exercises, min(len(available_exercises), 3))
                for idx, selected_exercise in enumerate(selected_exercises):
                    muscle_group_key = muscle_group.capitalize()
                    exercise_number = idx + 1
                    exercise_key = f"{muscle_group_key}_{exercise_number}"
                    workout_plan[day_name][exercise_key] = {
                        'Exercise_Name': selected_exercise.Exercise_Name,
                        'Description': selected_exercise.Description,
                        'Equipment': selected_exercise.equipment_details,
                        'Exercise_Video': selected_exercise.Exercise_Video,
                        'Rating': selected_exercise.Rating
                    }
            else:
                # If no available exercises, mark as such
                workout_plan[day_name][muscle_group.capitalize()] = {
                    'Exercise_Name': 'No available exercise',
                    'Description': 'N/A',
                    'Equipment': 'N/A',
                    'Exercise_Video': 'N/A',
                    'Rating': 'N/A'
                }
        else:
            # If no exercises for the muscle group, mark as such
            workout_plan[day_name][muscle_group.capitalize()] = {
                'Exercise_Name': 'No available exercise',
                'Description': 'N/A',
                'Equipment': 'N/A',
                'Exercise_Video': 'N/A',
                'Rating': 'N/A'
            }

    return workout_plan







def determine_weeks_and_days(fitness_goal, workout_intensity, activity_level):
    weeks = 4  # Define weeks based on fitness goals
    days_per_week = 3 if fitness_goal.lower() == 'maintain' else 5  # More frequent workouts for muscle gain or weight loss

    # Adjust based on workout intensity
    if workout_intensity.lower() == 'intense':
        days_per_week = min(days_per_week + 6, 7)
    elif workout_intensity.lower() == 'moderate':
        days_per_week = min(days_per_week + 5, 7)
    elif workout_intensity.lower() == 'light':
        days_per_week = max(days_per_week - 1 , 2)

    return weeks, days_per_week




def calculate_calories(weight, height, age, gender, activity_level):
    if gender.lower() == 'male':
        bmr = 10 * weight + 6.25 * height - 5 * age + 5
    else:
        bmr = 10 * weight + 6.25 * height - 5 * age - 161
    
    activity_factor = {
        'Sedentary': 1.2,
        'lightly_active': 1.375,
        'moderately_active': 1.55,
        'very__active': 1.725
    }.get(activity_level.lower(), 1.2)  # Default to sedentary if undefined

    return bmr * activity_factor

def calculate_protein(weight, fitness_goal):
    if fitness_goal.lower() == 'gain_muscle':
        return weight * 2.0  # Higher protein for muscle gain
    elif fitness_goal.lower() == 'lose_weight':
        return weight * 1.5  # Adequate protein to preserve muscle mass while losing fat
    else:
        return weight * 1.2  # Maintenance or general health

def calculate_carbohydrates(weight, fitness_goal):
    if fitness_goal.lower() == 'gain_muscle':
        return weight * 3.0  # Higher carbs for energy to support workouts
    elif fitness_goal.lower() == 'lose_weight':
        return weight * 1.0  # Lower carbs for caloric deficit
    else:
        return weight * 2.0  # Maintenance or general health

def calculate_fat(calories):
    return (calories * 0.25) / 9  # 25% of calories from fat

def calculate_dietary_fat(calories):
    """
    Calculate the total grams of fat a person should consume based on their total caloric intake.
    Assuming 30% of calories should come from fat, with a focus on unsaturated fats.

    :param calories: Total daily caloric intake.
    :return: A dictionary with the total fat and types of fats in grams.
    """
    total_fat_calories = calories * 0.30  # 30% of total calories from fat
    total_fat_grams = total_fat_calories / 9  # Each gram of fat has 9 calories

    # You can also specify how much should be saturated and unsaturated if needed
    saturated_fat_grams = total_fat_grams * 0.10  # Only 10% of fats from saturated sources
    unsaturated_fat_grams = total_fat_grams * 0.90  # The rest from unsaturated sources

    return {
        'total_fat_grams': total_fat_grams,
        'saturated_fat_grams': saturated_fat_grams,
        'unsaturated_fat_grams': unsaturated_fat_grams
    }

def predict_cluster(user_data):
    # Extracting user details assuming the order: [weight, height, age, gender, fitness_goal, muscle_groups, workout_intensity, activity_level]
    weight = user_data[0]
    height = user_data[1]
    age = user_data[2]
    gender = user_data[3]
    fitness_goal = user_data[4]
    muscle_groups = user_data[5]
    workout_intensity = user_data[6]
    activity_level = user_data[7]

    # Calculating necessary values
    calories = calculate_calories(weight, height, age, gender, activity_level)
    protein = calculate_protein(weight, fitness_goal)
    carbohydrates = calculate_carbohydrates(weight, fitness_goal)
    total_fat = calculate_fat(calories)  # Assuming total fat calculation needs only calories
    dietary_fats = calculate_dietary_fat(calories)  # Example if needed to be passed somewhere

    # Assuming you have a mechanism to map these calculations to your cluster predictions:
    # Prepare features array based on your model training
    features = np.array([calories, protein, carbohydrates, total_fat, dietary_fats['total_fat_grams']]).reshape(1, -1)

    # Using previously loaded scaler and kmeans model
    features_scaled = scaler.transform(features)
    cluster_id = kmeans.predict(features_scaled)
    return cluster_id[0]
