import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
} from "react-native";
import { ResizeMode, Video } from "expo-av";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types";

type ExerciseInfoScreenRouteProp = RouteProp<
  RootStackParamList,
  "ExerciseInfo"
>;
type ExerciseInfoScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "ExerciseInfo"
>;

interface ExerciseInfoProps {
  route: ExerciseInfoScreenRouteProp;
}

const ExerciseInfo: React.FC<ExerciseInfoProps> = ({ route }) => {
  const navigation = useNavigation<ExerciseInfoScreenNavigationProp>();
  const { exerciseDetails, muscleGroup, day } = route.params;
  const [contentHeight, setContentHeight] = useState(0);

  const durationMultipliers = {
    Chest: 1.1,
    Legs: 1.2,
    Biceps: 1,
    Triceps: 1,
    Back: 1.1,
    Abdominal: 1.2,
    Shoulders: 1.1,
  };

  type MuscleGroup = keyof typeof durationMultipliers;

  const getExerciseDuration = (muscleGroup: MuscleGroup) => {
    const baseDuration = 30; // Default duration
    const muscleMultiplier = durationMultipliers[muscleGroup] || 1;
    return Math.round(baseDuration * muscleMultiplier) + " min";
  };

  return (
    <View style={styles.exerciseinfo}>
      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollScrollViewContent}
      >
        <View style={styles.heroSection}>
          <Video
            source={{ uri: exerciseDetails.Exercise_Video }}
            style={styles.imageIcon}
            resizeMode={ResizeMode.COVER}
            useNativeControls
            shouldPlay
            isLooping
          />
          <View style={[styles.mainInfo, styles.contentSpaceBlock]}>
            <View style={styles.ttileAndDesc}>
              <Text style={[styles.strongLegsAnd, styles.title3FlexBox]}>
                {exerciseDetails.Exercise_Name}
              </Text>
              <Text style={[styles.tellusPellentesque]}>
                {exerciseDetails.Description}
              </Text>
            </View>
            <View style={styles.cards}>
              <View style={styles.cardDetails}>
                <Text style={[styles.text, styles.titleTypo]}>⏱️</Text>
                <Text style={[styles.min, styles.minTypo]}>
                  {getExerciseDuration(muscleGroup)}
                </Text>
              </View>
              <View style={styles.cardShadowBox}>
                <Text style={[styles.text, styles.titleTypo]}>📆</Text>
                <Text style={[styles.min, styles.minTypo]}>{day}</Text>
              </View>
              <View style={styles.cardShadowBox}>
                <Text style={[styles.text, styles.titleTypo]}>⚡</Text>
                <Text style={[styles.min, styles.minTypo]}>
                  {exerciseDetails.Rating}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.content, styles.contentSpaceBlock]}>
          <View style={styles.details}>
            <View style={[styles.equipment, styles.equipmentFlexBox]}>
              <Text style={[styles.title, styles.titleTypo]}>Equipment</Text>
              <Text style={[styles.title1, styles.titleTypo]}>
                {exerciseDetails.Equipment}
              </Text>
            </View>
            <View style={[styles.focusArea, styles.equipmentFlexBox]}>
              <Text style={[styles.title, styles.titleTypo]}>Focus Area</Text>
              <Text style={[styles.title3, styles.titleTypo]}>
                {muscleGroup.slice(0,-2)}
              </Text>
            </View>
          </View>
          {/* <View style={styles.exercises}>
            <View style={[styles.equipment, styles.equipmentFlexBox]}>
              <Text style={[styles.warmUp, styles.warmUpTypo]}>Workout</Text>
              <View style={styles.info}>
                <Text style={[styles.exercises1, styles.skipClr]}>
                  3 Exercises
                </Text>
                <Image
                  style={styles.ovalIcon}
                  contentFit="cover"
                  source={require("../assets/oval.png")}
                />
                <Text style={[styles.minutes, styles.skipClr]}>2 Minutes</Text>
              </View>
            </View>
            <View style={styles.exercise}>
              <Pressable
                style={styles.exerciseShadowBox}
                onPress={() => navigation.navigate("ExerciseDetails")}
              >
                <View>
                  <View style={styles.beautifulSlimBrunetteDoing} />
                </View>
                <View style={styles.text3}>
                  <Text style={[styles.armCircles, styles.warmUpTypo]}>
                    Arm circles
                  </Text>
                  <Text style={[styles.text4, styles.skipClr]}>0:30</Text>
                </View>
                <Image
                  style={styles.featherinfoIcon}
                  contentFit="cover"
                  source={require("../assets/featherinfo1.png")}
                />
              </Pressable>
              <Pressable
                style={[styles.exercise11, styles.exerciseShadowBox]}
                onPress={() => navigation.navigate("ExerciseDetails")}
              >
                <View>
                  <View style={styles.beautifulSlimBrunetteDoing} />
                </View>
                <View style={styles.text3}>
                  <Text style={[styles.armCircles, styles.warmUpTypo]}>
                    Arm circles
                  </Text>
                  <Text style={[styles.text4, styles.skipClr]}>0:30</Text>
                </View>
                <Image
                  style={styles.featherinfoIcon}
                  contentFit="cover"
                  source={require("../assets/featherinfo1.png")}
                />
              </Pressable>
              <Pressable
                style={[styles.exercise12, styles.exerciseShadowBox]}
                onPress={() => navigation.navigate("ExerciseDetails")}
              >
                <View>
                  <View style={styles.beautifulSlimBrunetteDoing} />
                </View>
                <View style={styles.text3}>
                  <Text style={[styles.armCircles, styles.warmUpTypo]}>
                    Arm circles
                  </Text>
                  <Text style={[styles.text4, styles.skipClr]}>0:30</Text>
                </View>
                <Image
                  style={styles.featherinfoIcon}
                  contentFit="cover"
                  source={require("../assets/featherinfo1.png")}
                />
              </Pressable>
            </View>
          </View> */}
        </View>
      </ScrollView>
        <View style={[styles.navigation, styles.equipmentFlexBox]}>
          <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
            <View style={styles.group} >
              <Image
                style={styles.icon}
                resizeMode={ResizeMode.CONTAIN}
                source={require("../assets/icon1.png")}
              />
              <Text></Text>
            </View>
          </Pressable>
          {/* <Text style={[styles.step2Of, styles.skipTypo]}>Step 2 of 5</Text>
          <Text style={[styles.skip, styles.skipTypo]}>Skip</Text> */}
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollScrollViewContent: {
    flexDirection: "column",
    paddingBottom: 20,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  contentSpaceBlock: {
    paddingHorizontal: Padding.p_3xs,
    alignSelf: "stretch",
  },
  title3FlexBox: {
    display: "flex",
    alignItems: "center",
  },
  skipClr: {
    color: Color.colorDarkslategray,
    textAlign: "left",
  },
  titleTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    // width: "100%",
  },
  minTypo: {
    textAlign: "center",
    color: Color.colorGray_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 24,
    alignSelf: "stretch",
  },
  equipmentFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  warmUpTypo: {
    fontSize: FontSize.size_base,
    lineHeight: 20,
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  exerciseShadowBox: {
    paddingBottom: Padding.p_8xs,
    paddingRight: Padding.p_3xs,
    paddingTop: Padding.p_8xs,
    paddingLeft: Padding.p_8xs,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    flexDirection: "row",
    borderRadius: Border.br_mini,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.rgb255255255,
  },
  skipTypo: {
    display: "none",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  imageIcon: {
    // zIndex: 2,
    maxWidth: "100%",
    height: 300,
    alignSelf: "stretch",
    overflow: "hidden",
    width: "100%",
  },
  strongLegsAnd: {
    fontSize: FontSize.size_xl,
    justifyContent: "center",
    height: 32,
    textAlign: "center",
    color: Color.colorGray_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 24,
    alignSelf: "stretch",
  },
  tellusPellentesque: {
    lineHeight: 18,
    marginTop: 8,
    height: 64,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    display: "flex",
    alignItems: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.colorDarkslategray,
    alignSelf: "stretch",
  },
  ttileAndDesc: {
    borderRadius: Border.br_5xl,
    alignSelf: "stretch",
    backgroundColor: Color.rgb255255255,
  },
  text: {
    fontSize: FontSize.size_mid,
    lineHeight: 20,
    textAlign: "center",
  },
  min: {
    fontSize: FontSize.size_xs,
    height: 19,
  },
  cardDetails: {
    paddingVertical: Padding.p_xl,
    paddingHorizontal: Padding.p_12xs,
    borderWidth: 1,
    borderColor: Color.colorAliceblue_200,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.rgb255255255,
  },
  cardShadowBox: {
    marginLeft: 16,
    paddingVertical: Padding.p_xl,
    paddingHorizontal: Padding.p_12xs,
    borderWidth: 1,
    borderColor: Color.colorAliceblue_200,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.rgb255255255,
  },
  cards: {
    marginTop: 13,
    flexDirection: "row",
    alignSelf: "stretch",
    backgroundColor: Color.rgb255255255,
  },
  mainInfo: {
    shadowColor: "rgba(0, 0, 0, 0.15)",
    paddingVertical: Padding.p_5xl,
    marginTop: -15,
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    elevation: 1,
    shadowRadius: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    paddingHorizontal: Padding.p_3xs,
    backgroundColor: Color.rgb255255255,
  },
  heroSection: {
    paddingHorizontal: 10,
    height: 489,
    alignSelf: "stretch",
    alignItems: "center",
  },
  title: {
    lineHeight: 22,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    flex: 1,
  },
  title1: {
    textAlign: "right",
    lineHeight: 22,
    fontSize: FontSize.size_sm,
  },
  equipment: {
    alignSelf: "stretch",
  },
  title3: {
    // width: 37,
    lineHeight: 22,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    display: "flex",
    alignItems: "center",
  },
  focusArea: {
    marginTop: 15,
    alignSelf: "stretch",
  },
  details: {
    marginTop:50,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_sm,
    borderRadius: Border.br_5xs,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOpacity: 1,
    elevation: 1,
    shadowRadius: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    alignSelf: "stretch",
    backgroundColor: Color.rgb255255255,
  },
  warmUp: {
    width: 111,
    height: 24,
  },
  exercises1: {
    width: 77,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.colorDarkslategray,
    lineHeight: 24,
  },
  ovalIcon: {
    width: 4,
    height: 4,
    marginLeft: 9,
  },
  minutes: {
    width: 69,
    marginLeft: 9,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.colorDarkslategray,
    lineHeight: 24,
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
  },
  beautifulSlimBrunetteDoing: {
    backgroundColor: Color.colorGainsboro_200,
    width: 96,
    height: 64,
  },
  armCircles: {
    alignSelf: "stretch",
  },
  text4: {
    marginTop: 4,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.colorDarkslategray,
    lineHeight: 24,
    alignSelf: "stretch",
  },
  text3: {
    marginLeft: 10,
    flex: 1,
  },
  featherinfoIcon: {
    width: 24,
    marginLeft: 10,
    height: 24,
  },
  exercise11: {
    marginTop: 10,
  },
  exercise12: {
    marginTop: 10,
  },
  exercise: {
    marginTop: 18,
    alignSelf: "stretch",
  },
  exercises: {
    marginTop: 10,
    borderRadius: Border.br_mini,
    alignSelf: "stretch",
    alignItems: "center",
  },
  content: {
    paddingVertical: 0,
    marginTop: 10,
    alignItems: "center",
  },
  scroll: {
    zIndex: 0,
    alignSelf: "stretch",
    flex: 1,
  },
  icon: {
    height: "100%",
    width: "100%",

  },
  group: {
    width: 16,
    height: 14,
    backgroundColor: "white",
  },
  backButton: {
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: Padding.p_8xs,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // flex: 1,
    backgroundColor: "white",
    width: 35,
    height: 35,
    borderRadius: Border.br_5xs,
    shadowColor: Color.colorBlack,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  step2Of: {
    color: Color.colorIndigo,
    lineHeight: 20,
    textAlign: "center",
    flex: 1,
  },
  skip: {
    lineHeight: 22,
    textAlign: "left",
    color: Color.colorDarkslategray,
  },
  navigation: {
    
    position: "absolute",
    top: 0,
    left: 0,
    // width: 70,
    // height: 170,
    padding: Padding.p_3xs,
    zIndex: 1,
    overflow: "hidden",
    paddingTop: 80,
  },
  exerciseinfo: {
    // height: 758,
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhitesmoke_100,
    paddingTop: 80,
  },
});

export default ExerciseInfo;
