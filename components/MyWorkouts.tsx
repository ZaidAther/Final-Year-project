import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { LinearProgress } from "@rneui/themed";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

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
}

export type MyWorkoutsType = {
  /** Action props */
  navigation: any;
  workoutPlan: any;
  onWorkout1Press?: () => void;
};

const MyWorkouts = ({ navigation, workoutPlan }: MyWorkoutsType) => {
  const handleWorkoutPress = (day: string) => {
    navigation.navigate("MyWorkout", { day, workoutPlan });
  };

  return (
    <>
      {Object.entries(workoutPlan).map(([day, exercises]) => (
        <Pressable
          style={styles.workout1}
          onPress={() => handleWorkoutPress(day)}
          key={day}
        >
          {Object.entries(exercises).map(([muscleGroup]) => (
            <View style={styles.topText} key={muscleGroup}>
              <Text style={styles.workout11}>{day}</Text>
              <Text style={[styles.beginner, styles.beginnerTypo]}>
                {muscleGroup}
              </Text>
            </View>
          ))}
          <View style={styles.topText}>
            <Text style={styles.beginnerTypo}>Progress 100%</Text>
            <View style={styles.progressBar}>
              <LinearProgress
                style={styles.progress1}
                animation={true}
                value={1}
                variant="determinate"
                color="#2f548d"
                trackColor="rgba(217, 217, 217, 0.5)"
              />
            </View>
          </View>
        </Pressable>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  beginnerTypo: {
    color: Color.colorSlategray_100,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    lineHeight: 20,
    alignSelf: "stretch",
  },
  workout11: {
    paddingTop: 10,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    lineHeight: 20,
    alignSelf: "stretch",
  },
  beginner: {
    marginTop: 5,
  },
  topText: {
    justifyContent: "center",
    alignSelf: "stretch",
  },
  progress1: {
    width: 120,
    overflow: "hidden",
    justifyContent: "center",
    borderRadius: Border.br_mini,
  },
  progressBar: {
    marginTop: 10,
    justifyContent: "center",
  },
  workout1: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 1,
    backgroundColor: Color.colorWhite,
    height: 159,
    justifyContent: "space-between",
    padding: Padding.p_xl,
    borderRadius: Border.br_mini,
    alignSelf: "stretch",
    marginVertical: 10,
  },
});

export default MyWorkouts;
