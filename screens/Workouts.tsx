import * as React from "react";
import { ScrollView, Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase, RouteProp } from "@react-navigation/native";
import MyWorkouts from "../components/MyWorkouts";
import Footer from "../components/Footer";
import StatusBars from "../components/StatusBars";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";
import { RootStackParamList } from "../types";

interface Exercise {
  Exercise_Name: string;
  Exercise_Video: string;
}

interface WorkoutPlan {
  [day: string]: {
    [muscleGroup: string]: Exercise;
  };
}

type ExerciseInfoScreenRouteProp = RouteProp<
  RootStackParamList,
  "ExerciseInfo"
>;
type ExerciseInfoScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "ExerciseInfo"
>;
interface HomeActiveProps {
  navigation: any;
  route: {
    params: {
      weight: number;
      height: number;
      age: number;
      gender: string;
      fitness_goal: string;
      muscle_groups: string[];
      workout_intensity: string;
      activity_level: string;
      clusterId: number;
      workoutPlan: any;
    };
  };
  new_route: ExerciseInfoScreenRouteProp;
}
const Workouts: React.FC<HomeActiveProps> = ({ navigation, route, new_route }) => {
  // const { workoutPlan } = new_route.params;
  // console.log(route.params.workoutPlan);
  return (
    <View style={styles.workouts}>
      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollScrollViewContent}
      >
        <View style={[styles.trainingsText, styles.statusBarFlexBox]}>
          <Text style={[styles.trainings, styles.text1Typo]}>Workouts</Text>
        </View>
        <ScrollView
          style={styles.workouts1}
          indicatorStyle="default"
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.workoutsScrollViewContent}
        >
          <MyWorkouts
            onWorkout1Press={() => navigation.navigate("MyWorkout", {...route.params})}
            workoutPlan = {route.params.workoutPlan}
          />
          <MyWorkouts
            onWorkout1Press={() => navigation.navigate("MyWorkout")}
            workoutPlan = {route.params.workoutPlan}
          />
          <MyWorkouts
            onWorkout1Press={() => navigation.navigate("MyWorkout")}
            workoutPlan = {route.params.workoutPlan}
          />
          <MyWorkouts
            onWorkout1Press={() => navigation.navigate("MyWorkout")}
            workoutPlan = {route.params.workoutPlan}
          />
          <Pressable
            style={[styles.addWorkout, styles.topTextFlexBox]}
            onPress={() => navigation.navigate("Onboarding1")}
          >
            <View style={[styles.topText, styles.topTextFlexBox]}>
              <Text style={styles.createANewContainer}>
                <Text style={styles.createANewWorkoutRoutine}>
                  <Text style={styles.createANew}>
                    Create a new workout routine
                  </Text>
                  <Text style={styles.text}>{` `}</Text>
                </Text>
                <Text style={[styles.text1, styles.text1Typo]}>+</Text>
              </Text>
            </View>
          </Pressable>
        </ScrollView>
      </ScrollView>
      <Footer
        homeActive={require("../assets/home.png")}
        training={require("../assets/trainingactive1.png")}
        activity={require("../assets/activity.png")}
        propBottom={1}
        propColor="#9299a3"
        propColor1="#2f548d"
        propColor2="#9299a3"
        onHomePress={() => navigation.navigate("HomeActive",{ ...route.params })}
        onTrainingPress={() => navigation.navigate("Workouts")}
        onActivityPress={() => navigation.navigate("ActivityActive")}
        onProfilePress={() => navigation.navigate("ProfileActive")}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  workoutsScrollViewContent: {
    flexDirection: "column",
    paddingBottom: 80,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  scrollScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  statusBarFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  text1Typo: {
    fontWeight: "500",
    fontFamily: FontFamily.poppins,
  },
  topTextFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  trainings: {
    fontSize: FontSize.size_xl,
    lineHeight: 40,
    color: Color.colorGray_200,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    flex: 1,
  },
  trainingsText: {
    alignSelf: "stretch",
  },
  createANew: {
    fontSize: 13,
  },
  text: {
    fontSize: FontSize.size_xs,
  },
  createANewWorkoutRoutine: {
    fontFamily: FontFamily.poppins,
  },
  text1: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppins,
  },
  createANewContainer: {
    lineHeight: 20,
    color: Color.colorSlategray_100,
    textAlign: "center",
    alignSelf: "stretch",
  },
  topText: {
    flex: 1,
  },
  addWorkout: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 1,
    borderRadius: Border.br_mini,
    height: 45,
    padding: Padding.p_xl,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "stretch",
    backgroundColor: Color.colorWhite,
  },
  workouts1: {
    marginTop: 15,
    alignSelf: "stretch",
    flex: 1,
  },
  scroll: {
    zIndex: 0,
    alignSelf: "stretch",
    flex: 1,
  },
  statusBar: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 410,
    height: 50,
    justifyContent: "space-between",
    zIndex: 2,
  },
  workouts: {
    width: "100%",
    overflow: "hidden",
    paddingHorizontal: Padding.p_3xs,
    paddingTop: Padding.p_31xl,
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default Workouts;
