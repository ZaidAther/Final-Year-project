import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, ScrollView, Pressable, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import StatusBars from "../components/StatusBars";
import Navigations from "../components/Navigation";
import Dropdown from "../components/Dropdown";
import Footer from "../components/Footer";
import { Color, FontFamily, Border, Padding, FontSize } from "../GlobalStyles";

const MyWorkout = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.myWorkout}>
      <View style={[styles.statusBar, styles.statusBarFlexBox]}>
        <StatusBars
          barsStatusBarsiPhoneLight={require("../assets/barsstatus-barsiphonelight.png")}
          barsStatusBarsiPhoneLightHeight={50}
          barsStatusBarsiPhoneLightOverflow="hidden"
          barsStatusBarsiPhoneLightWidth={390}
        />
      </View>
      <ScrollView
        style={[styles.scroll, styles.weeksSpaceBlock]}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollScrollViewContent}
      >
        <Navigations
          step2Of5="Step 2 of 5"
          showStep2Of={false}
          showSkip={false}
          navigationPosition="unset"
          navigationAlignSelf="stretch"
          step2OfColor="#461b93"
          step2OfMarginLeft={21}
          skipMarginLeft={21}
          onBackButtonPress={() => navigation.goBack()}
        />
        <View style={[styles.trainingsText, styles.weeksSpaceBlock]}>
          <Text style={[styles.trainings, styles.trainingsTypo]}>
            Exercises
          </Text>
          <View style={styles.progress}>
            <Text style={[styles.progress1, styles.percentTypo]}>Progress</Text>
            <View style={[styles.ellipseParent, styles.groupChildLayout]}>
              <Image
                style={[styles.groupChild, styles.groupChildLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-1.png")}
              />
              <Text style={[styles.percent, styles.percentFlexBox]}>10%</Text>
              <Image
                style={[styles.groupChild, styles.groupChildLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-2.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.weeks, styles.weeksSpaceBlock]}>
          <Dropdown label="Week 1" />
          <Dropdown label="Week 2" />
          <Dropdown label="Week 3" />
          <View style={[styles.workouts, styles.rowSpaceBlock]}>
            <View style={styles.row1}>
              <View style={styles.workout1Wrapper}>
                <View style={[styles.workout1, styles.workoutShadowBox]}>
                  <View style={styles.bitmap}>
                    <View style={styles.bitmap1}>
                      <View style={styles.bitmap2} />
                    </View>
                    <View style={[styles.mask, styles.maskLayout]} />
                  </View>
                  <View style={[styles.content, styles.contentFlexBox]}>
                    <Text style={[styles.danceFitness, styles.trainingsTypo]}>
                      Core Control
                    </Text>
                    <Text style={[styles.beginner, styles.minTypo]}>
                      Beginner
                    </Text>
                    <Text style={[styles.min, styles.minTypo]}>32 min</Text>
                  </View>
                </View>
              </View>
              <View style={styles.workout2Wrapper}>
                <View style={[styles.workout2, styles.workoutShadowBox]}>
                  <View style={styles.bitmap}>
                    <View style={styles.bitmap1}>
                      <View style={styles.bitmap2} />
                    </View>
                    <View style={[styles.mask, styles.maskLayout]} />
                  </View>
                  <View style={[styles.content, styles.contentFlexBox]}>
                    <Text style={[styles.danceFitness, styles.trainingsTypo]}>
                      Full Body Fast
                    </Text>
                    <Text style={[styles.beginner, styles.minTypo]}>
                      Beginner
                    </Text>
                    <Text style={[styles.min, styles.minTypo]}>32 min</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.row2, styles.rowSpaceBlock]}>
              <View style={styles.workout1Wrapper}>
                <View style={[styles.workout3, styles.workoutShadowBox]}>
                  <View style={styles.bitmap}>
                    <View style={styles.bitmap1}>
                      <View style={styles.bitmap2} />
                    </View>
                    <View style={[styles.mask2, styles.maskLayout]} />
                  </View>
                  <View style={styles.contentFlexBox}>
                    <Text style={[styles.danceFitness, styles.trainingsTypo]}>
                      Express Tabata
                    </Text>
                    <Text style={[styles.beginner, styles.minTypo]}>
                      Beginner
                    </Text>
                    <Text style={[styles.min, styles.minTypo]}>32 min</Text>
                  </View>
                </View>
              </View>
              <View style={styles.workout4Wrapper}>
                <View style={[styles.workout4, styles.workoutShadowBox]}>
                  <View style={styles.bitmap}>
                    <View style={styles.bitmap1}>
                      <View style={styles.bitmap2} />
                    </View>
                    <View style={[styles.mask2, styles.maskLayout]} />
                  </View>
                  <View style={[styles.content, styles.contentFlexBox]}>
                    <Text style={[styles.danceFitness, styles.trainingsTypo]}>
                      Bodyweight Stretch
                    </Text>
                    <Text style={[styles.beginner, styles.minTypo]}>
                      Beginner
                    </Text>
                    <Text style={[styles.min, styles.minTypo]}>32 min</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.row3, styles.rowSpaceBlock]}>
              <View style={styles.workout1Wrapper}>
                <View style={[styles.workout5, styles.workoutShadowBox]}>
                  <View style={styles.bitmap}>
                    <View style={styles.bitmap1}>
                      <View style={styles.bitmap2} />
                    </View>
                    <View style={[styles.mask2, styles.maskLayout]} />
                  </View>
                  <View style={[styles.content, styles.contentFlexBox]}>
                    <Text
                      style={[styles.danceFitness, styles.trainingsTypo]}
                    >{`Glutes & Abs`}</Text>
                    <Text style={[styles.beginner, styles.minTypo]}>
                      Beginner
                    </Text>
                    <Text style={[styles.min, styles.minTypo]}>32 min</Text>
                  </View>
                </View>
              </View>
              <View style={styles.workout4Wrapper}>
                <View style={[styles.workout6, styles.workoutShadowBox]}>
                  <View style={styles.bitmap}>
                    <View style={styles.bitmap1}>
                      <View style={styles.bitmap2} />
                    </View>
                    <View style={[styles.mask2, styles.maskLayout]} />
                  </View>
                  <View style={[styles.content, styles.contentFlexBox]}>
                    <Text style={[styles.danceFitness, styles.trainingsTypo]}>
                      Interval Pilates
                    </Text>
                    <Text style={[styles.beginner, styles.minTypo]}>
                      Beginner
                    </Text>
                    <Text style={[styles.min, styles.minTypo]}>32 min</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <Footer
        homeActive={require("../assets/home.png")}
        training={require("../assets/trainingactive.png")}
        activity={require("../assets/activity2.png")}
        propBottom={1}
        propColor="#9299a3"
        propColor1="#2f548d"
        propColor2="#9299a3"
        onHomePress={() => navigation.navigate("HomeActive")}
        onTrainingPress={() => navigation.navigate("Workouts")}
        onActivityPress={() => navigation.navigate("ActivityActive")}
        onProfilePress={() => navigation.navigate("ProfileActive")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  scrollScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  statusBarFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  weeksSpaceBlock: {
    marginTop: 15,
    alignSelf: "stretch",
  },
  trainingsTypo: {
    color: Color.colorGray_200,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    textAlign: "left",
  },
  percentTypo: {
    color: Color.colorSlategray,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
  },
  groupChildLayout: {
    height: 30,
    width: 30,
  },
  percentFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  rowSpaceBlock: {
    marginTop: 10,
    alignSelf: "stretch",
  },
  workoutShadowBox: {
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    alignSelf: "stretch",
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  maskLayout: {
    backgroundColor: Color.colorGainsboro_300,
    height: 120,
    borderRadius: Border.br_5xs,
    zIndex: 1,
    top: 0,
    position: "absolute",
    width: "100%",
  },
  contentFlexBox: {
    paddingLeft: Padding.p_8xs,
    justifyContent: "flex-end",
    alignSelf: "stretch",
  },
  minTypo: {
    marginTop: 5,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    alignSelf: "stretch",
  },
  statusBar: {
    right: 0,
    width: 410,
    height: 50,
    zIndex: 0,
    top: 0,
    position: "absolute",
  },
  trainings: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    lineHeight: 40,
    color: Color.colorGray_200,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    flex: 1,
  },
  progress1: {
    textAlign: "right",
    fontSize: FontSize.size_xs,
    color: Color.colorSlategray,
    lineHeight: 40,
  },
  groupChild: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  percent: {
    top: 15,
    left: 7,
    fontSize: 9,
    width: 17,
    color: Color.colorSlategray,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
    display: "flex",
  },
  ellipseParent: {
    marginLeft: 10,
  },
  progress: {
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
  trainingsText: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  bitmap2: {
    backgroundColor: Color.colorGainsboro_200,
    height: 120,
    alignSelf: "stretch",
  },
  bitmap1: {
    alignSelf: "stretch",
    zIndex: 0,
  },
  mask: {
    right: "-2.8%",
    left: "2.8%",
  },
  bitmap: {
    alignSelf: "stretch",
  },
  danceFitness: {
    fontSize: FontSize.size_base,
    lineHeight: 20,
    textAlign: "left",
    alignSelf: "stretch",
  },
  beginner: {
    color: Color.primary,
    height: 19,
    display: "flex",
    alignItems: "center",
  },
  min: {
    color: Color.colorDarkslategray,
    height: 18,
  },
  content: {
    marginTop: 1,
  },
  workout1: {
    justifyContent: "center",
  },
  workout1Wrapper: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  workout2: {
    justifyContent: "flex-end",
  },
  workout2Wrapper: {
    justifyContent: "center",
    marginLeft: 10,
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  row1: {
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  mask2: {
    right: "-2.81%",
    left: "2.81%",
  },
  workout3: {
    justifyContent: "flex-end",
  },
  workout4: {
    justifyContent: "flex-end",
  },
  workout4Wrapper: {
    justifyContent: "center",
    marginLeft: 10,
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  row2: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  workout5: {
    justifyContent: "flex-end",
  },
  workout6: {
    justifyContent: "flex-end",
  },
  row3: {
    justifyContent: "center",
    flexDirection: "row",
  },
  workouts: {
    display: "none",
    paddingBottom: Padding.p_56xl,
    alignItems: "center",
  },
  weeks: {
    paddingBottom: Padding.p_56xl,
    flex: 1,
  },
  scroll: {
    zIndex: 1,
    marginTop: 15,
    overflow: "hidden",
    flex: 1,
  },
  myWorkout: {
    height: 711,
    paddingHorizontal: Padding.p_3xs,
    paddingTop: Padding.p_31xl,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
    flex: 1,
  },
});

export default MyWorkout;
