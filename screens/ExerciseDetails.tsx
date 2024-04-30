import * as React from "react";
import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const ExerciseDetails = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.exercisedetails}>
      <ScrollView
        style={styles.exerciseInfo}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.exerciseInfoScrollViewContent}
      >
        <Image
          style={styles.videoIcon}
          contentFit="cover"
          source={require("../assets/video.png")}
        />
        <View style={[styles.textContent, styles.equipmentSpaceBlock]}>
          <View style={styles.titleAndDescription}>
            <Text style={[styles.name, styles.nameLayout]}>Exercise Name</Text>
            <Text
              style={[styles.description, styles.dumbellsClr]}
            >{`To further challenge yourself, try widening your stance to perform a sumo squat instead. This variation can add variety to your lower body strength training routine

`}</Text>
          </View>
          <View style={styles.equipmentSpaceBlock}>
            <Text style={[styles.equipment1, styles.equipment1Typo]}>
              Equipment
            </Text>
            <ScrollView
              style={styles.equipments}
              horizontal={true}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.equipmentsScrollViewContent}
            >
              <View>
                <View style={styles.dumbbelsIsolated202108261}>
                  <View style={[styles.mask, styles.maskPosition]} />
                </View>
                <Text style={[styles.dumbells, styles.dumbellsClr]}>
                  2 Dumbells
                </Text>
                <View style={styles.img}>
                  <Image
                    style={styles.path10Icon}
                    contentFit="cover"
                    source={require("../assets/path-102.png")}
                  />
                  <Image
                    style={styles.path9Icon}
                    contentFit="cover"
                    source={require("../assets/path-92.png")}
                  />
                </View>
              </View>
              <View style={styles.view1}>
                <View style={styles.dumbbelsIsolated202108261}>
                  <View style={[styles.mask, styles.maskPosition]} />
                </View>
                <Text style={[styles.dumbells, styles.dumbellsClr]}>
                  2 Dumbells
                </Text>
                <View style={styles.img}>
                  <Image
                    style={styles.path10Icon}
                    contentFit="cover"
                    source={require("../assets/path-102.png")}
                  />
                  <Image
                    style={styles.path9Icon}
                    contentFit="cover"
                    source={require("../assets/path-92.png")}
                  />
                </View>
              </View>
              <View style={styles.view1}>
                <View style={styles.dumbbelsIsolated202108261}>
                  <View style={[styles.mask, styles.maskPosition]} />
                </View>
                <Text style={[styles.dumbells, styles.dumbellsClr]}>
                  2 Dumbells
                </Text>
                <View style={styles.img}>
                  <Image
                    style={styles.path10Icon}
                    contentFit="cover"
                    source={require("../assets/path-102.png")}
                  />
                  <Image
                    style={styles.path9Icon}
                    contentFit="cover"
                    source={require("../assets/path-92.png")}
                  />
                </View>
              </View>
              <View style={styles.view1}>
                <View style={styles.dumbbelsIsolated202108261}>
                  <View style={[styles.mask, styles.maskPosition]} />
                </View>
                <Text style={[styles.dumbells, styles.dumbellsClr]}>
                  2 Dumbells
                </Text>
                <View style={styles.img}>
                  <Image
                    style={styles.path10Icon}
                    contentFit="cover"
                    source={require("../assets/path-102.png")}
                  />
                  <Image
                    style={styles.path9Icon}
                    contentFit="cover"
                    source={require("../assets/path-92.png")}
                  />
                </View>
              </View>
            </ScrollView>
          </View>
          <View style={styles.equipmentSpaceBlock}>
            <Text style={[styles.exerciseTechnique, styles.equipment1Typo]}>
              Exercise technique
            </Text>
            <Text
              style={[styles.inhaleWhilePush, styles.equipment1Typo]}
            >{`1. Inhale while pushing your hips back and lowering into a squat position. Keep your core tight, back straight, and knees forward during this movement.
2. Exhale while returning to the starting position. Focus on keeping your weight evenly distributed throughout your heel and midfoot.
`}</Text>
            <Text
              style={[styles.inhaleWhilePush, styles.equipment1Typo]}
            >{`1. Inhale while pushing your hips back and lowering into a squat position. Keep your core tight, back straight, and knees forward during this movement.
2. Exhale while returning to the starting position. Focus on keeping your weight evenly distributed throughout your heel and midfoot.
`}</Text>
            <Text
              style={[styles.inhaleWhilePush, styles.equipment1Typo]}
            >{`1. Inhale while pushing your hips back and lowering into a squat position. Keep your core tight, back straight, and knees forward during this movement.
2. Exhale while returning to the starting position. Focus on keeping your weight evenly distributed throughout your heel and midfoot.
`}</Text>
          </View>
        </View>
      </ScrollView>
      <View style={[styles.navigation, styles.navigationFlexBox]}>
        <View style={[styles.backButton, styles.navigationFlexBox]}>
          <Pressable style={styles.group} onPress={() => navigation.goBack()}>
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/group.png")}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  equipmentsScrollViewContent: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  exerciseInfoScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  equipmentSpaceBlock: {
    marginTop: 25,
    alignSelf: "stretch",
  },
  nameLayout: {
    height: 33,
    color: Color.colorGray_200,
    fontSize: FontSize.size_xl,
  },
  dumbellsClr: {
    color: Color.colorGray_100,
    fontSize: FontSize.size_base,
  },
  equipment1Typo: {
    lineHeight: 24,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    alignSelf: "stretch",
  },
  maskPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  navigationFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  videoIcon: {
    maxWidth: "100%",
    height: 390,
    alignSelf: "stretch",
    overflow: "hidden",
    width: "100%",
  },
  name: {
    display: "flex",
    height: 33,
    color: Color.colorGray_200,
    fontSize: FontSize.size_xl,
    alignItems: "center",
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    lineHeight: 22,
    alignSelf: "stretch",
  },
  description: {
    lineHeight: 23,
    height: 100,
    marginTop: 5,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    alignSelf: "stretch",
  },
  titleAndDescription: {
    alignSelf: "stretch",
  },
  equipment1: {
    height: 33,
    color: Color.colorGray_200,
    fontSize: FontSize.size_xl,
    display: "flex",
    alignItems: "center",
  },
  mask: {
    right: 0,
    bottom: 0,
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    borderColor: Color.colorAliceblue_200,
    borderWidth: 1,
    backgroundColor: Color.rgb255255255,
  },
  dumbbelsIsolated202108261: {
    width: 107,
    height: 83,
    zIndex: 0,
  },
  dumbells: {
    width: 94,
    height: 25,
    marginTop: 6,
    zIndex: 1,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    lineHeight: 22,
  },
  path10Icon: {
    width: 10,
    height: 10,
  },
  path9Icon: {
    width: 53,
    height: 23,
    marginTop: 2,
  },
  img: {
    top: 24,
    left: 26,
    zIndex: 2,
    position: "absolute",
  },
  view1: {
    marginLeft: 10,
  },
  equipments: {
    marginTop: 5,
    width: "100%",
  },
  exerciseTechnique: {
    height: 33,
    color: Color.colorGray_200,
    fontSize: FontSize.size_xl,
    lineHeight: 24,
  },
  inhaleWhilePush: {
    marginTop: 3,
    color: Color.colorGray_100,
    fontSize: FontSize.size_base,
    height: 215,
  },
  textContent: {
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 0,
    height: 215,
    alignItems: "center",
  },
  exerciseInfo: {
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
  },
  backButton: {
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: Padding.p_8xs,
    flex: 1,
  },
  navigation: {
    width: 390,
    justifyContent: "space-between",
    padding: Padding.p_3xs,
    zIndex: 1,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  exercisedetails: {
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.rgb255255255,
  },
});

export default ExerciseDetails;
