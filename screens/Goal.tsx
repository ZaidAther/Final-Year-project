import * as React from "react";
import { StyleSheet, View, ScrollView, Pressable, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, RouteProp } from "@react-navigation/native";
import Navigations from "../components/Navigation";
import Goals from "../components/Goals";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";
import { RootStackParamList } from "../types";

type GoalScreenRouteProp = RouteProp<RootStackParamList, 'Goal'>;

type Props = {
  route: GoalScreenRouteProp;
};

const Goal: React.FC<Props> = ({ route }) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [fitnessGoal, setFitnessGoal] = React.useState('');

  const handleNext = () => {
    if (!fitnessGoal) {
      // You can show an alert or a toast message here
      alert("Please select a fitness goal");
      return;
    }

    navigation.navigate('MuscleGroupsInput', { ...route.params, fitness_goal: fitnessGoal });
  };

  return (
    <View style={[styles.goal9, styles.goal9FlexBox]}>

      <ScrollView
        style={[styles.scrollContent, styles.goal9FlexBox]}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContentScrollViewContent}
      >
        <Navigations
          step2Of5="Step 2 of 8"
          showStep2Of
          showSkip
          navigationPosition="unset"
          navigationAlignSelf="stretch"
          step2OfColor="#2f548d"
          step2OfMarginLeft="unset"
          skipMarginLeft="unset"
          onBackButtonPress={() => navigation.goBack()}
        />
        <Text style={[styles.chooseGender, styles.chooseGenderTypo]}>
          Choose goal
        </Text>
        <View style={[styles.genders, styles.buttonFlexBox]}>
        <Goals
            title="Lose weight"
            txt="Light workout intensity"
            propBorderColor={fitnessGoal === "lose_weight" ? "#035e7b" : "#fff"}
            onPress={() => setFitnessGoal("lose_weight")}
            isSelected={fitnessGoal === "lose_weight"}
            dumbbell={require("../assets/lose.png")}
          />
          <Goals
          
            title="Gain muscle"
            txt="Moderate workout intensity"
            propBorderColor={fitnessGoal === "gain_muscle" ? "#035e7b" : "#fff"}
            onPress={() => setFitnessGoal("gain_muscle")}
            isSelected={fitnessGoal === "gain_muscle"}
            dumbbell={require("../assets/gain.png")}
          />
          <Goals
            title="Maintain"
            txt="Intense workout intensity"
            propBorderColor={fitnessGoal === "maintain" ? "#035e7b" : "#fff"}
            onPress={() => setFitnessGoal("maintain")}
            dumbbell={require("../assets/maintain.png")}
            isSelected={fitnessGoal === "maintain"}
          />
          {/* <Goals dumbbell={require("../assets/dumbbell1.png")} />
          <Goals
            dumbbell={require("../assets/dumbbell2.png")}
            propBorderColor="#e5e9ef"
          />
          <Goals
            dumbbell={require("../assets/dumbbell2.png")}
            propBorderColor="#e5e9ef"
          />
          <Goals
            dumbbell={require("../assets/dumbbell2.png")}
            propBorderColor="#e5e9ef"
          />
          <Goals
            dumbbell={require("../assets/dumbbell2.png")}
            propBorderColor="#e5e9ef"
          />
          <Goals
            dumbbell={require("../assets/dumbbell2.png")}
            propBorderColor="#e5e9ef"
          /> */}
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
  scrollContentScrollViewContent: {
    flexDirection: "column",
    paddingBottom: 80,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  goal9FlexBox: {
    flex: 1,
    overflow: "hidden",
  },
  chooseGenderTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    fontWeight: "400",
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  statusBar: {
    top: 0,
    right: 0,
    width: 390,
    height: 50,
    justifyContent: "flex-end",
    zIndex: 0,
    flexDirection: "row",
    position: "absolute",
    alignItems: "center",
  },
  chooseGender: {
    fontSize: FontSize.size_mid,
    lineHeight: 32,
    color: Color.colorGray_200,
    marginTop: 60,
  },
  genders: {
    marginTop: 60,
    alignSelf: "stretch",
  },
  scrollContent: {
    zIndex: 1,
    marginTop: 33,
    alignSelf: "stretch",
    overflow: "hidden",
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
  continue: {
    width: "100%",
    bottom: 0,
    paddingBottom: Padding.p_6xl,
    zIndex: 2,
    position: "absolute",
  },
  goal9: {
    backgroundColor: Color.colorWhite,
    width: "100%",
    height: 692,
    paddingHorizontal: Padding.p_3xs,
    paddingTop: Padding.p_31xl,
    alignItems: "center",
    overflow: "hidden",
  },
});

export default Goal;
