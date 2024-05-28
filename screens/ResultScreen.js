import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, ActivityIndicator, StatusBar, SafeAreaView, Image } from 'react-native';
import { Color, FontSize, Padding } from '../GlobalStyles';
import { ProgressBar } from 'react-native-paper';

const MealDetails = React.memo(({ mealTime, details }) => (
    <View style={styles.mealContainer}>
        <Text style={styles.mealTime}>{mealTime.toUpperCase()}</Text>
        <View style={styles.mealInfo}>
            <Text>Name: {details.name}</Text>
            <Image source={{ uri: details.image }} style={styles.mealImage} />
            <Text>Calories: {details.calories}</Text>
            <View style={styles.progressBarContainer}>
                <Text>Carbs: {details.carbohydrate}g</Text>
                <ProgressBar progress={details.carbohydrate / 100} color={Color.primary} style={styles.progressBar} />
            </View>
            <View style={styles.progressBarContainer}>
                <Text>Fat: {details.fat}g</Text>
                <ProgressBar progress={details.fat / 100} color={Color.primary} style={styles.progressBar} />
            </View>
            <View style={styles.progressBarContainer}>
                <Text>Protein: {details.protein}g</Text>
                <ProgressBar progress={details.protein / 100} color={Color.primary} style={styles.progressBar} />
            </View>
        </View>
    </View>
));

const DayMeals = React.memo(({ day, meals }) => (
    <View style={styles.dayContainer}>
        <Text style={styles.dayTitle}>{day}</Text>
        {Object.entries(meals).map(([mealTime, mealDetails]) => (
            <MealDetails key={mealTime} mealTime={mealTime} details={mealDetails} />
        ))}
    </View>
));

const ResultScreen = ({ navigation, route }) => {
    const [mealPlan, setMealPlan] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [visibleWeeks, setVisibleWeeks] = useState(1); // Number of weeks to show initially
    const { clusterId } = route.params;

    useEffect(() => {
        setLoading(true);
        fetch(`http://192.168.18.36:5000/recommend_meal_plan`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ cluster_id: clusterId }),
        })
        .then((response) => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(setMealPlan)
        .catch((error) => {
            setError(`Failed to fetch data: ${error.message}`);
            console.error('Error:', error);
        })
        .finally(() => setLoading(false));
    }, [clusterId]);

    const handleShowMore = () => {
        setVisibleWeeks(prevVisibleWeeks => prevVisibleWeeks + 1);
    };

    if (loading) return <ActivityIndicator size="large" color={Color.primary} />;
    if (error) return <Text style={styles.errorText}>{error}</Text>;

    const weeksToShow = Object.entries(mealPlan).slice(0, visibleWeeks * 7);

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar backgroundColor={Color.primary} />
            <ScrollView contentContainerStyle={styles.scrollViewContent} style={styles.container}>
                {weeksToShow.map(([day, meals]) => (
                    <DayMeals key={day} day={day} meals={meals} />
                ))}
                {visibleWeeks * 7 < Object.keys(mealPlan).length && (
                    <Button title="Show More" onPress={handleShowMore} />
                )}
                <Button
                    title="View Workout Plan"
                    onPress={() => navigation.navigate('WorkoutPlan', { ...route.params })}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: Color.colorWhite,
    },
    container: {
        flex: 1,
        padding: Padding.p_md,
        backgroundColor: Color.colorWhite,
    },
    scrollViewContent: {
        flexGrow: 1,
        paddingBottom: Padding.p_md,
    },
    dayContainer: {
        marginBottom: Padding.p_md,
        borderWidth: 1,
        borderColor: Color.colorLightgray,
        borderRadius: 10,
        padding: Padding.p_md,
        backgroundColor: Color.colorWhite,
    },
    dayTitle: {
        fontSize: FontSize.lg,
        fontWeight: 'bold',
        marginBottom: Padding.p_sm,
    },
    mealContainer: {
        marginTop: Padding.p_sm,
    },
    mealTime: {
        fontWeight: 'bold',
        marginBottom: Padding.p_sm,
    },
    mealInfo: {
        padding: Padding.p_sm,
        backgroundColor: Color.colorWhitesmoke_100,
        borderRadius: 10,
    },
    progressBarContainer: {
        marginTop: Padding.p_sm,
    },
    progressBar: {
        height: 10,
    },
    errorText: {
        color: 'red',
        fontSize: FontSize.md,
        textAlign: 'center',
        marginTop: 20,
    },
    mealImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginTop: Padding.p_sm,
    },
});

export default ResultScreen;
