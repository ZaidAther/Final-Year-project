import * as React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import StatusBars from "../components/StatusBars";
import Dates from "../components/Dates";
import Activity from "../components/Heart-rate";
import Footer from "../components/Footer";
import { Padding, Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const ActivityActive = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.activityActive}>
      <View style={[styles.statusBar, styles.statusBarFlexBox]}>
        <StatusBars
          barsStatusBarsiPhoneLight={require("../assets/barsstatus-barsiphonelight.png")}
          barsStatusBarsiPhoneLightHeight={50}
          barsStatusBarsiPhoneLightOverflow="hidden"
          barsStatusBarsiPhoneLightFlex={1}
          barsStatusBarsiPhoneLightWidth="unset"
        />
      </View>
      <ScrollView
        style={styles.status}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.statusScrollViewContent}
      >
        <View style={[styles.activitySection, styles.statusBarFlexBox]}>
          <Text style={[styles.activity, styles.hoursFlexBox]}>Activity</Text>
          <View style={styles.progress}>
            <Image
              style={styles.combinedShapeIcon}
              contentFit="cover"
              source={require("../assets/combinedshape.png")}
            />
          </View>
        </View>
        <ScrollView
          style={[styles.days, styles.daysSpaceBlock]}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.daysScrollViewContent}
        >
          <Dates
            date="12"
            property1activeBackgroundColor="#2f548d"
            dateColor="#fff"
            novColor="#fff"
          />
          <Dates
            date="13"
            property1activeBackgroundColor="#fff"
            dateColor="#0a0615"
            novColor="#9299a3"
          />
          <Dates
            date="14"
            property1activeBackgroundColor="#fff"
            dateColor="#0a0615"
            novColor="#9299a3"
          />
          <Dates
            date="15"
            property1activeBackgroundColor="#fff"
            dateColor="#0a0615"
            novColor="#9299a3"
          />
          <Dates
            date="16"
            property1activeBackgroundColor="#fff"
            dateColor="#0a0615"
            novColor="#9299a3"
          />
          <Dates
            date="16"
            property1activeBackgroundColor="#fff"
            dateColor="#0a0615"
            novColor="#9299a3"
          />
          <Dates
            date="16"
            property1activeBackgroundColor="#fff"
            dateColor="#0a0615"
            novColor="#9299a3"
          />
          <Dates
            date="16"
            property1activeBackgroundColor="#fff"
            dateColor="#0a0615"
            novColor="#9299a3"
          />
        </ScrollView>
        <View style={[styles.row1, styles.daysSpaceBlock]}>
          <View style={[styles.steps, styles.stepsShadowBox]}>
            <View style={[styles.stepsParent, styles.statusBarFlexBox]}>
              <Text style={[styles.steps1, styles.steps1Typo]}>Steps</Text>
              <View style={styles.icon}>
                <Text style={styles.textTypo1}>👟</Text>
              </View>
            </View>
            <View style={[styles.grah, styles.grahLayout]}>
              <Image
                style={[styles.path11Icon, styles.path11IconPosition]}
                contentFit="cover"
                source={require("../assets/path-11.png")}
              />
              <Image
                style={[styles.path12Icon, styles.path12IconPosition]}
                contentFit="cover"
                source={require("../assets/path-12.png")}
              />
              <View style={[styles.stepText, styles.textPosition]}>
                <Text style={[styles.text1, styles.textTypo]}>1234</Text>
                <Text style={[styles.steps2, styles.hoursTypo]}>Steps</Text>
              </View>
            </View>
          </View>
          <Activity />
        </View>
        <View style={[styles.row1, styles.daysSpaceBlock]}>
          <View style={[styles.trainingTime, styles.stepsShadowBox]}>
            <View style={[styles.stepsParent, styles.statusBarFlexBox]}>
              <Text style={[styles.training, styles.steps1Typo]}>Training</Text>
              <View style={[styles.icon1, styles.iconFlexBox]}>
                <Text style={[styles.text2, styles.textTypo2]}>💪</Text>
              </View>
            </View>
            <View style={[styles.grah, styles.grahLayout]}>
              <Image
                style={[styles.path11Icon, styles.path11IconPosition]}
                contentFit="cover"
                source={require("../assets/path-11.png")}
              />
              <Image
                style={[styles.path12Icon, styles.path12IconPosition]}
                contentFit="cover"
                source={require("../assets/path-12.png")}
              />
              <View style={[styles.stepText1, styles.textPosition]}>
                <Text style={[styles.text1, styles.textTypo]}>120</Text>
                <Text style={[styles.steps2, styles.hoursTypo]}>Minutes</Text>
              </View>
            </View>
          </View>
          <View style={[styles.calories, styles.stepsShadowBox]}>
            <View style={[styles.stepsParent, styles.statusBarFlexBox]}>
              <Text style={styles.steps1Typo}>Calories</Text>
              <View style={styles.bgLayout}>
                <View style={[styles.bg, styles.bgLayout]} />
                <Text style={[styles.text4, styles.textTypo1]}>🔥</Text>
              </View>
            </View>
            <View style={[styles.grah2, styles.grah2Layout]}>
              <Image
                style={[styles.path11Icon2, styles.grah2Layout]}
                contentFit="cover"
                source={require("../assets/path-111.png")}
              />
              <Image
                style={[styles.path12Icon2, styles.path12IconPosition]}
                contentFit="cover"
                source={require("../assets/path-121.png")}
              />
              <View style={[styles.caloriesText, styles.textPosition]}>
                <Text style={[styles.text1, styles.textTypo]}>990</Text>
                <Text style={[styles.steps2, styles.hoursTypo]}>KCal</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.row1, styles.daysSpaceBlock]}>
          <View style={[styles.sleep, styles.stepsShadowBox]}>
            <View style={[styles.stepsParent, styles.statusBarFlexBox]}>
              <Text style={[styles.sleep1, styles.steps1Typo]}>Sleep</Text>
              <View style={[styles.icon3, styles.iconFlexBox]}>
                <Text style={[styles.text6, styles.textTypo2]}>💤</Text>
              </View>
            </View>
            <View style={[styles.sleepGraph, styles.statusBarFlexBox]}>
              <View style={[styles.rectangle, styles.rectangleLayout]} />
              <View style={[styles.rectangle1, styles.rectangleLayout]} />
              <View style={[styles.rectangle2, styles.rectangleLayout]} />
              <View style={[styles.rectangle1, styles.rectangleLayout]} />
              <View style={[styles.rectangle4, styles.rectangleLayout]} />
              <View style={[styles.rectangle1, styles.rectangleLayout]} />
            </View>
            <View style={styles.sleepText}>
              <Text style={[styles.text7, styles.textTypo]}>7.50</Text>
              <Text style={[styles.hours, styles.hoursTypo]}>hours</Text>
            </View>
          </View>
          <View style={[styles.distance, styles.stepsShadowBox]}>
            <View style={[styles.stepsParent, styles.statusBarFlexBox]}>
              <Text style={[styles.distance1, styles.steps1Typo]}>
                Distance
              </Text>
              <View style={styles.bgLayout}>
                <View style={[styles.bg1, styles.bgLayout]} />
                <Text style={[styles.text8, styles.textPosition]}>🚗</Text>
              </View>
            </View>
            <View style={[styles.grah, styles.grahLayout]}>
              <Image
                style={[styles.path11Icon, styles.path11IconPosition]}
                contentFit="cover"
                source={require("../assets/path-112.png")}
              />
              <Image
                style={[styles.path12Icon, styles.path12IconPosition]}
                contentFit="cover"
                source={require("../assets/path-122.png")}
              />
              <View style={[styles.stepText1, styles.textPosition]}>
                <Text style={[styles.text1, styles.textTypo]}>120</Text>
                <Text style={[styles.steps2, styles.hoursTypo]}>Minutes</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <Footer
        homeActive={require("../assets/home.png")}
        training={require("../assets/training1.png")}
        activity={require("../assets/activity4.png")}
        propColor="#9299a3"
        propColor1="#9299a3"
        propColor2="#2f548d"
        onHomePress={() => navigation.navigate("HomeActive")}
        onTrainingPress={() => navigation.navigate("Workouts")}
        onActivityPress={() => navigation.navigate("ActivityActive")}
        onProfilePress={() => navigation.navigate("ProfileActive")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  daysScrollViewContent: {
    flexDirection: "row",
    paddingLeft: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  statusScrollViewContent: {
    flexDirection: "column",
    paddingBottom: 80,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  statusBarFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  hoursFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  daysSpaceBlock: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  stepsShadowBox: {
    padding: Padding.p_3xs,
    height: 170,
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    elevation: 5,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: "rgba(234, 240, 246, 0.6)",

    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
  steps1Typo: {
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
  },
  grahLayout: {
    height: 86,
    width: 86,
  },
  path11IconPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  path12IconPosition: {
    left: 2,
    height: 86,
    top: 0,
    position: "absolute",
  },
  textPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  textTypo: {
    lineHeight: 24,
    color: Color.colorGray_200,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
  },
  hoursTypo: {
    color: Color.colorDarkgray_100,
    fontSize: FontSize.size_xs,
    lineHeight: 24,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
  },
  iconFlexBox: {
    paddingVertical: Padding.p_7xs,
    justifyContent: "center",
    borderRadius: Border.br_5xs,
    alignItems: "center",
  },
  textTypo2: {
    color: Color.colorGray_100,
    fontSize: FontSize.size_base,
    textAlign: "center",
    lineHeight: 20,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
  },
  bgLayout: {
    height: 32,
    width: 32,
  },
  textTypo1: {
    width: 20,
    textAlign: "center",
    color: Color.colorGray_100,
    fontSize: FontSize.size_base,
    lineHeight: 20,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
  },
  grah2Layout: {
    width: 96,
    height: 86,
  },
  rectangleLayout: {
    width: 10,
    backgroundColor: Color.colorTurquoise,
    borderRadius: 5,
  },
  statusBar: {
    right: 0,
    width: 390,
    height: 50,
    zIndex: 0,
    top: 0,
    justifyContent: "space-between",
    position: "absolute",
  },
  activity: {
    lineHeight: 40,
    width: 101,
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    display: "flex",
  },
  combinedShapeIcon: {
    width: 21,
    height: 21,
  },
  progress: {
    padding: 9,
    justifyContent: "center",
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    elevation: 5,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: "rgba(234, 240, 246, 0.6)",

    borderRadius: Border.br_5xs,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  activitySection: {
    paddingVertical: 0,
    alignSelf: "stretch",
    paddingHorizontal: Padding.p_3xs,
  },
  days: {
    width: "100%",
  },
  steps1: {
    width: 45,
    height: 24,
  },
  icon: {
    padding: Padding.p_7xs,
    backgroundColor: Color.colorAliceblue_100,
    justifyContent: "center",
    borderRadius: Border.br_5xs,
  },
  stepsParent: {
    alignSelf: "stretch",
  },
  path11Icon: {
    height: 86,
    width: 86,
  },
  path12Icon: {
    width: 84,
  },
  text1: {
    textAlign: "center",
  },
  steps2: {
    textAlign: "center",
  },
  stepText: {
    marginLeft: -22,
    marginTop: -23.5,
    top: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  grah: {
    marginTop: 20,
  },
  steps: {
    borderRadius: Border.br_mini,
    height: 170,
  },
  row1: {
    flexDirection: "row",
  },
  training: {
    width: 58,
    display: "flex",
    alignItems: "center",
  },
  text2: {
    textAlign: "center",
  },
  icon1: {
    backgroundColor: "#fbf8ee",
    paddingHorizontal: Padding.p_5xs,
  },
  stepText1: {
    marginTop: -24,
    marginLeft: -24.5,
    justifyContent: "center",
    alignItems: "center",
  },
  trainingTime: {
    borderRadius: Border.br_mini,
    height: 170,
  },
  bg: {
    backgroundColor: "#ffefdd",
    left: 0,
    top: 0,
    position: "absolute",
    borderRadius: Border.br_5xs,
  },
  text4: {
    top: 6,
    left: 6,
    position: "absolute",
    width: 20,
  },
  path11Icon2: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  path12Icon2: {
    width: 93,
  },
  caloriesText: {
    marginLeft: -19.5,
    marginTop: -23.5,
    top: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  grah2: {
    marginTop: 20,
  },
  calories: {
    marginLeft: 15,
    borderRadius: Border.br_mini,
    height: 170,
  },
  sleep1: {
    width: 39,
  },
  text6: {
    width: 22,
    textAlign: "center",
  },
  icon3: {
    paddingHorizontal: Padding.p_8xs,
    backgroundColor: Color.colorAliceblue_100,
    overflow: "hidden",
  },
  rectangle: {
    height: 44,
  },
  rectangle1: {
    height: 29,
  },
  rectangle2: {
    height: 48,
  },
  rectangle4: {
    height: 21,
  },
  sleepGraph: {
    marginTop: 20,
    alignSelf: "stretch",
  },
  text7: {
    textAlign: "left",
  },
  hours: {
    width: 35,
    marginLeft: 5,
    display: "flex",
    alignItems: "center",
    textAlign: "left",
  },
  sleepText: {
    marginTop: 20,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  sleep: {
    borderRadius: Border.br_5xs,
  },
  distance1: {
    width: 62,
    display: "flex",
    alignItems: "center",
  },
  bg1: {
    marginTop: -16,
    marginLeft: -16,
    backgroundColor: Color.colorMistyrose,
    left: "50%",
    top: "50%",
    position: "absolute",
    borderRadius: Border.br_5xs,
  },
  text8: {
    marginTop: -10,
    marginLeft: -8,
    textAlign: "center",
    color: Color.colorGray_100,
    fontSize: FontSize.size_base,
    lineHeight: 20,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
  },
  distance: {
    marginLeft: 16,
    borderRadius: Border.br_5xs,
  },
  status: {
    zIndex: 1,
    marginTop: 15,
    alignSelf: "stretch",
    flex: 1,
  },
  activityActive: {
    backgroundColor: Color.colorWhitesmoke,
    height: 576,
    paddingTop: Padding.p_31xl,
    paddingHorizontal: Padding.p_3xs,
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default ActivityActive;
