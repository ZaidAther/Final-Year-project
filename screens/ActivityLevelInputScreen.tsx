import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Pressable, Text } from "react-native";
import { useNavigation, RouteProp } from "@react-navigation/native";
import ChooseLevel from "../components/ChooseLevel";
import Navigations from "../components/Navigation";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";
import { RootStackParamList } from "../types";
import { StackNavigationProp } from "@react-navigation/stack";

interface RouteParams {
  weight: number;
  height: number;
  age: number;
  gender: string;
  fitness_goal: string;
  muscle_groups: string[];
  workout_intensity: string;
}

type ActivityLevelInputScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "ActivityLevelInput">;
  route: RouteProp<RootStackParamList, "ActivityLevelInput">;
};

const ActivityLevelInputScreen: React.FC<ActivityLevelInputScreenProps> = ({
  navigation,
  route,
}) => {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const { weight, height, age, gender, fitness_goal, muscle_groups, workout_intensity } = route.params;

  const generateClusterId = (): number => {
    return Math.floor(Math.random() * 5); // Generate a random number from 0 to 4
  };

  const handleContinue = () => {
    if (selectedLevel) {
      const clusterId = generateClusterId(); // Generate a random cluster ID
      navigation.navigate("HomeActive", {
        weight,
        height,
        age,
        gender,
        fitness_goal,
        muscle_groups,
        workout_intensity,
        activity_level: selectedLevel,
        clusterId,
      });

      const userData = {
        weight,
        height,
        age,
        gender,
        fitness_goal,
        muscle_groups,
        workout_intensity,
        activity_level: selectedLevel,
      };
    //   console.log(userData);
      sendUserDataToBackend(userData);
    } else {
      console.log("Please select an activity level");
    }
  };

  const sendUserDataToBackend = async (userData: any) => {
    try {
      const response = await fetch('http://172.20.10.3:5000/save_user_data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        console.log('User data sent successfully!');
      } else {
        const errorData = await response.json();
        console.error('Failed to send user data:', errorData);
      }
    } catch (error) {
      console.error('Error sending user data:', error);
    }
  };

  return (
    <View style={styles.trainingLevel}>
      <ScrollView
        style={[styles.scrollContent, styles.buttonFlexBox]}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContentScrollViewContent}
      >
        <Navigations
          step2Of5="Step 8 of 8"
          showStep2Of
          showSkip
          navigationPosition="unset"
          navigationAlignSelf="stretch"
          step2OfColor="#2f548d"
          step2OfMarginLeft="unset"
          skipMarginLeft="unset"
          onBackButtonPress={() => navigation.goBack()}
        />
        <Text style={[styles.chooseGender, styles.levelsSpaceBlock]}>
          Choose Activity level
        </Text>
        <View style={[styles.levels, styles.levelsFlexBox]}>
          <ChooseLevel
            title="SEDENTARY"
            txt="I train 1-2 times a week"
            propBorderColor={selectedLevel === "Sedentary" ? "#2f548d" : "#e5e9ef"}
            onPress={() => setSelectedLevel("Sedentary")}
            isSelected={selectedLevel === "Sedentary"}
          />
          <ChooseLevel
            title="LIGHTLY ACTIVE"
            txt="I want to start training"
            propBorderColor={selectedLevel === "lightly_active" ? "#2f548d" : "#e5e9ef"}
            onPress={() => setSelectedLevel("lightly_active")}
            isSelected={selectedLevel === "lightly_active"}
          />
          <ChooseLevel
            title="MODERATELY ACTIVE"
            txt="I train 2-3 times a week"
            propBorderColor={selectedLevel === "moderately_active" ? "#2f548d" : "#e5e9ef"}
            onPress={() => setSelectedLevel("moderately_active")}
            isSelected={selectedLevel === "moderately_active"}
          />
          <ChooseLevel
            title="VERY ACTIVE"
            txt="I train more than 4 times a week"
            propBorderColor={selectedLevel === "very_active" ? "#2f548d" : "#e5e9ef"}
            onPress={() => setSelectedLevel("very_active")}
            isSelected={selectedLevel === "very_active"}
          />
        </View>
      </ScrollView>
      <View style={[styles.continue, styles.levelsFlexBox]}>
        <Pressable
          style={[styles.button, styles.levelsFlexBox]}
          onPress={handleContinue}
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
  scrollContentScrollViewContent: {
    flexDirection: "column",
    paddingBottom: 80,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  buttonFlexBox: {
    alignSelf: "stretch",
    overflow: "hidden",
  },
  levelsSpaceBlock: {
    marginTop: 60,
    alignSelf: "stretch",
  },
  levelsFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  chooseGenderTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
  },

  chooseGender: {
    fontSize: FontSize.size_xl,
    color: Color.colorGray_200,
    textAlign: 'center',
  },
  levels: {
    marginTop: 60,
    alignSelf: "stretch",
  },
  scrollContent: {
    zIndex: 1,
    marginTop: 33,
    flex: 1,
    alignSelf: "stretch",
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
    overflow: "hidden",
    flexDirection: "row",
  },
  continue: {
    width: "92.05%",
    right: "3.97%",
    bottom: 0,
    left: "3.97%",
    paddingBottom: Padding.p_6xl,
    zIndex: 2,
    position: "absolute",
  },
  trainingLevel: {
    backgroundColor: Color.colorWhite,
    width: "100%",
    height: 692,
    paddingHorizontal: Padding.p_3xs,
    paddingTop: Padding.p_31xl,
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
});

export default ActivityLevelInputScreen;
