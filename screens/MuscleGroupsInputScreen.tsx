import React, { useState } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import StatusBars from "../components/StatusBars";
import Navigations from "../components/Navigation";
import { Color, FontSize, Border, Padding, FontFamily } from "../GlobalStyles";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { color } from "@rneui/base";
import { FlatList } from "react-native-gesture-handler";
import { RootStackParamList } from "../types";


// Define your RootStackParamList type
// type RootStackParamList = {
//   MuscleGroupsInput: undefined;
//   WorkoutIntensityInput: { muscle_groups: string[]; weight: number };
//   // Define other screens in your stack here
// };

type MuscleGroupsInputScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "MuscleGroupsInput">;
  route: RouteProp<RootStackParamList, "MuscleGroupsInput">;
};

const MuscleGroupsInputScreen: React.FC<MuscleGroupsInputScreenProps> = ({
  navigation,
  route,
}) => {
  const [muscleGroups, setMuscleGroups] = useState<string[]>([]);
  const [weight, setWeight] = useState<string>("");

  const handleNext = () => {
    // Specify the type for the parameters passed to navigation.navigate
    navigation.navigate("WorkoutIntensityInput", {
      muscle_groups: muscleGroups,
      ...route.params,
    });
  };

  const handleMuscleGroupSelection = (muscleGroup: string) => {
    setMuscleGroups((prevMuscleGroups) => {
      if (prevMuscleGroups.includes(muscleGroup)) {
        return prevMuscleGroups.filter((group) => group !== muscleGroup);
      } else {
        return [...prevMuscleGroups, muscleGroup];
      }
    });
  };

  const isMuscleGroupSelected = (muscleGroup: string) => {
    return muscleGroups.includes(muscleGroup);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Navigations
          step2Of5="Step 3 of 8"
          showStep2Of
          showSkip
          navigationPosition="unset"
          navigationAlignSelf="stretch"
          step2OfColor="#2f548d"
          step2OfMarginLeft="unset"
          skipMarginLeft="unset"
          onBackButtonPress={() => navigation.goBack()}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>CHOOSE MUSCLE GROUPS</Text>
        </View>
        <View style={styles.muscleGroupContainer}>
          {[
            "Chest",
            "Back",
            "Shoulders",
            "Biceps",
            "Triceps",
            "Legs",
            "Abdominals",
          ].map((muscleGroup, index) => (
            <TouchableHighlight
              key={index}
              onPress={() => handleMuscleGroupSelection(muscleGroup)}
              style={[
                styles.muscleButton,
                isMuscleGroupSelected(muscleGroup) && styles.selectedButton,
              ]}
              underlayColor="#DDDDDD"
            >
              <Text
                style={[
                  styles.muscleButtonText,
                  isMuscleGroupSelected(muscleGroup) &&
                    styles.selectedButtonText,
                ]}
              >
                {muscleGroup.toUpperCase()}
              </Text>
            </TouchableHighlight>
          ))}
        </View>
      </ScrollView>
      <View style={[styles.continue, styles.buttonFlexBox]}>
        <Pressable
          style={[styles.button, styles.buttonFlexBox]}
          onPress={handleNext}
        >
          <Text style={[styles.startTraining, styles.chooseGenderTypo]}>
            Continue
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhitesmoke_100,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: Padding.p_31xl,
    paddingHorizontal: Padding.p_3xs,
  },
  content: {
    flexDirection: "column",
    paddingBottom: 80,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    paddingTop: 33,
  },
  continue: {
    width: "100%",
    paddingBottom: Padding.p_6xl,
    zIndex: 2,
    marginTop: 20,
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  startTraining: {
    fontSize: FontSize.size_mid,
    lineHeight: 20,
    color: Color.colorWhite,
  },
  button: {
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 1,
    borderRadius: Border.br_6xl,
    backgroundColor: Color.primary,
    paddingHorizontal: Padding.p_14xl,
    paddingVertical: Padding.p_xs,
    alignSelf: "stretch",
    flexDirection: "row",
    overflow: "hidden",
  },
  chooseGenderTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
  },
  titleContainer: {
    marginTop: 60,
    marginBottom: 50,
    
  },
  title: {
    fontSize: FontSize.size_xl,
    color: Color.colorSlategray_100,
    textAlign: "center",
    lineHeight: 32,
  },
  muscleGroupContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: 20,
  },
  muscleButton: {
    padding: 10,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorWhite,
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowColor: "#000",
    shadowOffset: { height: 3, width: 0 },
    marginBottom: 10,
    width: "45%",
    alignItems: "center",
  },
  muscleButtonText: {
    fontSize: FontSize.size_sm,
    color: Color.colorSlategray_100,
    textAlign: "center",
  },
  selectedButton: {
    backgroundColor: Color.primary,
  },
  selectedButtonText: {
    color: Color.colorWhite,
  },
});

export default MuscleGroupsInputScreen;
