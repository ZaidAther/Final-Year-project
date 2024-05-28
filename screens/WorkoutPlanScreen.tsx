import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, Image, ActivityIndicator, Pressable } from 'react-native';
import { Video } from 'expo-av';
import StatusBars from "../components/StatusBars";
import Category from "../components/Category";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";
import Navigations from '../components/Navigation'; // Import Navigations component

interface WorkoutPlanProps {
  navigation: any;
  route: any;
}

const WorkoutPlanScreen: React.FC<WorkoutPlanProps> = ({ navigation, route }) => {
  const [workoutPlan, setWorkoutPlan] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchExercises = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://192.168.1.113:5000/recommend_workout_plan', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            weight: route.params.weight,
            height: route.params.height,
            age: route.params.age,
            gender: route.params.gender,
            fitness_goal: route.params.fitness_goal,
            muscle_groups: route.params.muscle_groups,
            workout_intensity: route.params.workout_intensity,
            activity_level: route.params.activity_level,
          }),
        });
        const jsonData = await response.json();
        if (response.ok) {
          setWorkoutPlan(jsonData);
        } else {
          throw new Error('Failed to fetch exercises');
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchExercises();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000FF" />;
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>
          {typeof error === 'string' ? error : 'An error occurred while fetching the workout plan.'}
        </Text>
      </View>
    );
  }

  const handleExercisePress = (exerciseDetails: any, muscleGroup: string, day: string) => {
    navigation.navigate('ExerciseIF', { exerciseDetails, muscleGroup, day });
  };

  return (
    <View style={[styles.homeActive, styles.workoutsFlexBox]}>

      <ScrollView
        style={[styles.scroll, styles.scrollSpaceBlock]}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollScrollViewContent}
      >
        <View style={[styles.heaader, styles.heaaderFlexBox]}>
          <Text style={[styles.hiDeborah, styles.hiDeborahTypo]}>
            Hi, Hammad
          </Text>
          <Image
            style={styles.notificationIcon}
            contentFit="cover"
            source={require("../assets/notification.png")}
          />
        </View>
        <TextInput
          style={[styles.search, styles.text2Typo1]}
          placeholder="Search something"
          placeholderTextColor="#404b52"
        />
        <View style={[styles.categoriesSection1, styles.scrollSpaceBlock]}>
          <View style={[styles.heaader, styles.heaaderFlexBox]}>
            <Text style={[styles.category, styles.text2Typo1]}>Category</Text>
            <Text style={[styles.viewAll, styles.viewTypo]}>View All</Text>
          </View>
          <View style={[styles.categories, styles.heaaderFlexBox]}>
            <Category
              prop="🏃"
              cardio="Chest"
              categoryPosition="unset"
              categoryMarginLeft="unset"
              
            />
            <Category
              prop="🧘"
              cardio="Legs"
              categoryPosition="unset"
              categoryMarginLeft={16}
            />
            <Category
              prop="🤸"
              cardio="Back"
              categoryPosition="unset"
              categoryMarginLeft={16}
            />
            <Category
              prop="🏋️"
              cardio="Biceps"
              categoryPosition="unset"
              categoryMarginLeft={16}
            />
          </View>
        </View>
        <Banner />
        <View style={styles.workouts}>
          <View style={styles.popular1}>
            <Text style={[styles.popularWorkouts, styles.text2Typo1]}>
              Popular Workouts
            </Text>
          </View>
          {Object.entries(workoutPlan).map(([day, exercises]) => (
            <View key={day} style={styles.dayContainer}>
              <Text style={styles.dayTitle}>{day}</Text>
              {Object.entries(exercises).map(([muscleGroup, exerciseDetails]) => (
                <View key={muscleGroup} style={styles.exerciseContainer}>
                  <Pressable onPress={() => handleExercisePress(exerciseDetails, muscleGroup, day)}>
                    <Video
                      source={{ uri: exerciseDetails.Exercise_Video }}
                      style={styles.video}
                      useNativeControls
                      resizeMode="contain"
                      isLooping
                    />
                  </Pressable>
                  <Text style={styles.exerciseName}>{exerciseDetails.Exercise_Name}</Text>
                  <Text style={styles.exerciseDuration}>{muscleGroup}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
      <Footer
        homeActive={require("../assets/homeactive.png")}
        training={require("../assets/training.png")}
        activity={require("../assets/activity.png")}
        onHomePress={() => navigation.navigate("WorkoutPlan")}
        onTrainingPress={() => navigation.navigate("Workout", { ...route.params })}
        onActivityPress={() => navigation.navigate("Active", { ...route.params })}
        onProfilePress={() => navigation.navigate("Profile", { ...route.params })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  homeActive: {
    flex: 1,
    backgroundColor: '#fff',
  },
  workoutsFlexBox: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  statusBar: {
    marginBottom: 20,
    overflow: 'hidden',
  },
  scroll: {
    flex: 1,
    paddingHorizontal: 20,
  },
  scrollSpaceBlock: {
    paddingVertical: 20,
  },
  scrollScrollViewContent: {
    paddingBottom: 20,
  },
  heaader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  heaaderFlexBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  workout11: {
    width: 120,
    marginRight: 20,
    overflow: 'hidden',
    borderRadius: Border.br_xl,
  },
  workout12: {
    width: 120,
    marginRight: 20,
    overflow: 'hidden',
    borderRadius: Border.br_xl,
  },
  workout13: {
    width: 120,
    marginRight: 20,
    overflow: 'hidden',
    borderRadius: Border.br_xl,
  },
  workout14: {
    width: 120,
    marginRight: 20,
    overflow: 'hidden',
    borderRadius: Border.br_xl,
  },
  workout15: {
    width: 120,
    marginRight: 20,
    overflow: 'hidden',
    borderRadius: Border.br_xl,
  },
  workout16: {
    width: 120,
    marginRight: 20,
    overflow: 'hidden',
    borderRadius: Border.br_xl,
  },
  hiDeborah: {
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_xl,
    color: Color.colorGray_200,
    fontWeight: '500',
  },
  hiDeborahTypo: {
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_xl,
    color: Color.colorGray_200,
    fontWeight: '500',
  },
  notificationIcon: {
    width: 16,
    height: 19,
  },
  search: {
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_6xl,
    height: 45,
    paddingHorizontal: Padding.p_6xl,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppins,
    fontWeight: '500',
    marginTop: 10,
  },
  text2Typo1: {
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_sm,
    color: Color.colorGray_200,
    fontWeight: '500',
  },
  categoriesSection1: {
    marginBottom: 20,
  },
  category: {
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_xl,
    color: Color.colorGray_200,
    fontWeight: '500',
    marginBottom: 10,
  },
  viewAll: {
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_sm,
    color: Color.colorDarkgray_100,
    fontWeight: '500',
  },
  viewTypo: {
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_sm,
    color: Color.colorDarkgray_100,
    fontWeight: '500',
  },
  categories: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  workouts: {
    marginBottom: 20,
  },
  popular1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  popularWorkouts: {
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_xl,
    color: Color.colorGray_200,
    fontWeight: '500',
  },
  workouts80: {
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_xs,
    color: Color.colorDarkslategray,
    lineHeight: 18,
    marginLeft: 10,
  },
  workouts80Layout: {
    marginLeft: 10,
  },
  workouts1: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  workoutsScrollViewContent: {
    paddingRight: 20,
  },
  workoutShadowBox: {
    width: 120,
    marginRight: 20,
    overflow: 'hidden',
    borderRadius: Border.br_xl,
  },
  bitmap: {
    flex: 1,
    position: 'relative',
  },
  bitmap1: {
    flex: 1,
  },
  bitmap2: {
    flex: 1,
    backgroundColor: Color.colorGainsboro_200,
  },
  mask: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  content: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
  },
  danceFitness: {
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
    fontWeight: '500',
    marginBottom: 5,
  },
  beginner: {
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_sm,
    color: Color.colorWhite,
    fontWeight: '500',
    marginBottom: 2,
  },
  min: {
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_xs,
    color: Color.colorWhite,
    fontWeight: '500',
  },
  dayContainer: {
    marginBottom: 20,
  },
  dayTitle: {
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_xl,
    color: Color.colorGray_200,
    fontWeight: '500',
    marginBottom: 10,
  },
  exerciseContainer: {
    marginBottom: 20,
  },
  video: {
    width: 96,
    height: 64,
    backgroundColor: Color.colorGainsboro_200,
    marginRight: 10,
  },
  exerciseName: {
    fontFamily: FontFamily.poppins,
    fontSize: 20,
    color: Color.colorGray_200,
    fontWeight: '500',
    marginBottom: 2,
  },
  exerciseDuration: {
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_sm,
    color: Color.colorDarkgray_100,
    fontWeight: '500',
  },
});

export default WorkoutPlanScreen;