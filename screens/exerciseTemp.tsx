import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View, Pressable, Image } from "react-native";
import { ResizeMode, Video } from "expo-av";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types";

type ExerciseInfoScreenRouteProp = RouteProp<RootStackParamList, "ExerciseInfo">;
type ExerciseInfoScreenNavigationProp = StackNavigationProp<RootStackParamList, "ExerciseInfo">;

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
    <View style={styles.container}>
      <ScrollView
        style={{ height: contentHeight }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollScrollViewContent}
      >
        <View style={styles.heroSection}>
          <Video
            source={{ uri: exerciseDetails.Exercise_Video }}
            style={styles.imageIcon}
            resizeMode={ResizeMode.CONTAIN}
            useNativeControls
            shouldPlay
            isLooping
          />
          <View style={[styles.mainInfo, styles.contentSpaceBlock]}>
            <View style={styles.ttileAndDesc}>
              <Text style={[styles.exerciseName, styles.title3FlexBox]}>
                {exerciseDetails.Exercise_Name}
              </Text>
              <Text style={[styles.exerciseDescription, styles.skipClr]}>
                {exerciseDetails.Description}
              </Text>
            </View>
            <View style={styles.cards}>
              <View style={styles.cardDetails}>
                <Text style={[styles.text, styles.titleTypo]}>⏱️</Text>
                <Text style={[styles.min, styles.minTypo]}>{getExerciseDuration(muscleGroup)}</Text>
              </View>
              <View style={styles.cardShadowBox}>
                <Text style={[styles.text, styles.titleTypo]}>📆</Text>
                <Text style={[styles.min, styles.minTypo]}>{day}</Text>
              </View>
              <View style={styles.cardShadowBox}>
                <Text style={[styles.text, styles.titleTypo]}>⚡</Text>
                <Text style={[styles.min, styles.minTypo]}>{exerciseDetails.Rating}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.content, styles.contentSpaceBlock]}>
          <View style={styles.details}>
            <View style={[styles.equipment, styles.equipmentFlexBox]}>
              <Text style={[styles.title, styles.titleTypo]}>Equipment</Text>
              <Text style={[styles.title1, styles.titleTypo]}>{exerciseDetails.Equipment}</Text>
            </View>
            <View style={[styles.focusArea, styles.equipmentFlexBox]}>
              <Text style={[styles.title, styles.titleTypo]}>Focus Area</Text>
              <Text style={[styles.title3, styles.titleTypo]}>{muscleGroup}</Text>
            </View>
          </View>
          <View style={styles.exercises}>
            {/* Your exercise components */}
          </View>
        </View>
      </ScrollView>
      <View style={[styles.navigation, styles.equipmentFlexBox]}>
        <View style={styles.backButton}>
          <Pressable style={styles.group} onPress={() => navigation.goBack()}>
            <Image
              style={styles.icon}
              resizeMode={ResizeMode.CONTAIN}
              source={require("../assets/group.png")}
            />
          </Pressable>
        </View>
        <Text style={[styles.step2Of, styles.skipTypo]}>Step 2 of 5</Text>
        <Text style={[styles.skip, styles.skipTypo]}>Skip</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollScrollViewContent: {
    flexDirection: "column",
    paddingBottom: 40,
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
  exerciseName: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: 'bold',
    color: Color.colorGray_100,
    textAlign: 'center',
    marginBottom: 10,
  },
  exerciseDescription: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorGray_100,
    textAlign: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: Color.colorAliceblue_200,
    borderRadius: Border.br_5xl_9,
    shadowColor: Color.colorGray_400,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 20,
  },
  // heroSection: {
  //   height: 489,
  //   alignSelf: "stretch",
  //   alignItems: "center",
  // },
  titleTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
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
    maxWidth: "100%",
    marginTop: 40,
    height: 300,
    alignSelf: "stretch",
  },
  mainInfo: {
    paddingTop: Padding.p_26xl,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.rgb255255255,
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    alignSelf: "stretch",
    shadowRadius: 5,
    elevation: 5,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -5,
    },
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    paddingBottom: 40,
    paddingHorizontal: 20,
    marginTop: -30,
    overflow: "hidden",
  },
  ttileAndDesc: {
    marginBottom: 20,
  },
  cards: {
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-around",
    paddingHorizontal: 20,
  },
  cardDetails: {
    backgroundColor: Color.colorAliceblue_100,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: Border.br_mini,
    shadowColor: Color.colorGray_400,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    alignItems: "center",
  },
  cardShadowBox: {
    backgroundColor: Color.colorAliceblue_100,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: Border.br_mini,
    shadowColor: Color.colorGray_400,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    alignItems: "center",
  },
  text: {
    fontSize: FontSize.size_xl,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorGray_100,
    textAlign: "center",
    marginBottom: 5,
  },
  min: {
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorGray_100,
    textAlign: "center",
  },
  content: {
    paddingTop: Padding.p_26xl,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.rgb255255255,
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    alignSelf: "stretch",
    shadowRadius: 5,
    elevation: 5,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -5,
    },
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    paddingBottom: 40,
    paddingHorizontal: 20,
    marginTop: -30,
    overflow: "hidden",
  },
  details: {
    marginBottom: 30,
  },
  equipment: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorGray_100,
    textAlign: "center",
    marginBottom: 5,
  },
  title1: {
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorGray_100,
    textAlign: "center",
  },
  focusArea: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title3: {
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorGray_100,
    textAlign: "center",
  },
  exercises: {
    alignSelf: "stretch",
  },
  navigation: {
    backgroundColor: Color.rgb255255255,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopColor: Color.colorGray_200,
    borderTopWidth: 1,
    shadowColor: Color.colorGray_400,
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  backButton: {
    padding: 10,
  },
  group: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 24,
    height: 24,
  },
  step2Of: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.colorGray_200,
  },
  skip: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.colorGray_200,
  },
});

export default ExerciseInfo;
