import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, ScrollView, Text, TextInput } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import StatusBars from "../components/StatusBars";
import Category from "../components/Category";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const HomeActive = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.homeActive, styles.workoutsFlexBox]}>
      <View style={styles.statusBar}>
        <StatusBars
          barsStatusBarsiPhoneLight={require("../assets/barsstatus-barsiphonelight.png")}
          barsStatusBarsiPhoneLightHeight={50}
          barsStatusBarsiPhoneLightOverflow="hidden"
          barsStatusBarsiPhoneLightFlex={1}
          barsStatusBarsiPhoneLightWidth="unset"
        />
      </View>
      <ScrollView
        style={[styles.scroll, styles.scrollSpaceBlock]}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollScrollViewContent}
      >
        <View style={[styles.heaader, styles.heaaderFlexBox]}>
          <Text style={[styles.hiDeborah, styles.hiDeborahTypo]}>
            Hi, Hammad
          </Text>
          <Image
            style={styles.notificationIcon}
            contentFit="cover"
            source={require("../assets/notification.png")}
          />
        </View>
        <TextInput
          style={[styles.search, styles.text2Typo1]}
          placeholder="Search something"
          placeholderTextColor="#404b52"
        />
        <View style={[styles.categoriesSection1, styles.scrollSpaceBlock]}>
          <View style={[styles.heaader, styles.heaaderFlexBox]}>
            <Text style={[styles.category, styles.text2Typo]}>Category</Text>
            <Text style={[styles.viewAll, styles.viewTypo]}>View All</Text>
          </View>
          <View style={[styles.categories, styles.heaaderFlexBox]}>
            <Category
              prop="🏃"
              cardio="Cardio"
              categoryPosition="unset"
              categoryMarginLeft="unset"
            />
            <Category
              prop="🧘"
              cardio="Yoga"
              categoryPosition="unset"
              categoryMarginLeft={16}
            />
            <Category
              prop="🤸"
              cardio="Stretch"
              categoryPosition="unset"
              categoryMarginLeft={16}
            />
            <Category
              prop="🏋️"
              cardio="Gym"
              categoryPosition="unset"
              categoryMarginLeft={16}
            />
          </View>
        </View>
        <Banner />
        <View style={[styles.workouts, styles.scrollSpaceBlock]}>
          <View style={[styles.heaader, styles.heaaderFlexBox]}>
            <View style={styles.popular1}>
              <Text style={[styles.popularWorkouts, styles.text2Typo]}>
                Popular Workouts
              </Text>
              <Text style={[styles.workouts80, styles.workouts80Layout]}>
                Workouts: 80
              </Text>
            </View>
            <Text style={[styles.viewAll1, styles.viewTypo]}>View All</Text>
          </View>
          <ScrollView
            style={styles.workouts1}
            horizontal={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.workoutsScrollViewContent}
          >
            <View style={styles.workoutShadowBox}>
              <View style={styles.bitmap}>
                <View style={styles.bitmap1}>
                  <View style={styles.bitmap2} />
                </View>
                <View style={styles.mask} />
              </View>
              <View style={styles.content}>
                <Text style={[styles.danceFitness, styles.hiDeborahTypo]}>
                  Dance Fitness
                </Text>
                <Text style={[styles.beginner, styles.minTypo]}>Beginner</Text>
                <Text style={[styles.min, styles.minTypo]}>32 min</Text>
              </View>
            </View>
            <View style={[styles.workout11, styles.workoutShadowBox]}>
              <View style={styles.bitmap}>
                <View style={styles.bitmap1}>
                  <View style={styles.bitmap2} />
                </View>
                <View style={styles.mask} />
              </View>
              <View style={styles.content}>
                <Text style={[styles.danceFitness, styles.hiDeborahTypo]}>
                  Dance Fitness
                </Text>
                <Text style={[styles.beginner, styles.minTypo]}>Beginner</Text>
                <Text style={[styles.min, styles.minTypo]}>32 min</Text>
              </View>
            </View>
            <View style={[styles.workout12, styles.workoutShadowBox]}>
              <View style={styles.bitmap}>
                <View style={styles.bitmap1}>
                  <View style={styles.bitmap2} />
                </View>
                <View style={styles.mask} />
              </View>
              <View style={styles.content}>
                <Text style={[styles.danceFitness, styles.hiDeborahTypo]}>
                  Dance Fitness
                </Text>
                <Text style={[styles.beginner, styles.minTypo]}>Beginner</Text>
                <Text style={[styles.min, styles.minTypo]}>32 min</Text>
              </View>
            </View>
            <View style={[styles.workout13, styles.workoutShadowBox]}>
              <View style={styles.bitmap}>
                <View style={styles.bitmap1}>
                  <View style={styles.bitmap2} />
                </View>
                <View style={styles.mask} />
              </View>
              <View style={styles.content}>
                <Text style={[styles.danceFitness, styles.hiDeborahTypo]}>
                  Dance Fitness
                </Text>
                <Text style={[styles.beginner, styles.minTypo]}>Beginner</Text>
                <Text style={[styles.min, styles.minTypo]}>32 min</Text>
              </View>
            </View>
            <View style={[styles.workout14, styles.workoutShadowBox]}>
              <View style={styles.bitmap}>
                <View style={styles.bitmap1}>
                  <View style={styles.bitmap2} />
                </View>
                <View style={styles.mask} />
              </View>
              <View style={styles.content}>
                <Text style={[styles.danceFitness, styles.hiDeborahTypo]}>
                  Dance Fitness
                </Text>
                <Text style={[styles.beginner, styles.minTypo]}>Beginner</Text>
                <Text style={[styles.min, styles.minTypo]}>32 min</Text>
              </View>
            </View>
            <View style={[styles.workout15, styles.workoutShadowBox]}>
              <View style={styles.bitmap}>
                <View style={styles.bitmap1}>
                  <View style={styles.bitmap2} />
                </View>
                <View style={styles.mask} />
              </View>
              <View style={styles.content}>
                <Text style={[styles.danceFitness, styles.hiDeborahTypo]}>
                  Dance Fitness
                </Text>
                <Text style={[styles.beginner, styles.minTypo]}>Beginner</Text>
                <Text style={[styles.min, styles.minTypo]}>32 min</Text>
              </View>
            </View>
            <View style={[styles.workout16, styles.workoutShadowBox]}>
              <View style={styles.bitmap}>
                <View style={styles.bitmap1}>
                  <View style={styles.bitmap2} />
                </View>
                <View style={styles.mask} />
              </View>
              <View style={styles.content}>
                <Text style={[styles.danceFitness, styles.hiDeborahTypo]}>
                  Dance Fitness
                </Text>
                <Text style={[styles.beginner, styles.minTypo]}>Beginner</Text>
                <Text style={[styles.min, styles.minTypo]}>32 min</Text>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={styles.scrollSpaceBlock}>
          <View style={[styles.heaader, styles.heaaderFlexBox]}>
            <View style={styles.popular1}>
              <Text style={[styles.popularWorkouts, styles.text2Typo]}>
                Exercises
              </Text>
              <Text style={[styles.exercises210, styles.minTypo]}>
                Exercises: 210
              </Text>
            </View>
            <Text style={[styles.viewAll, styles.viewTypo]}>View All</Text>
          </View>
          <View style={styles.excercises}>
            <View style={styles.exercise1SpaceBlock}>
              <View>
                <View style={styles.beautifulSlimBrunetteDoing} />
              </View>
              <View style={styles.text1}>
                <Text style={[styles.danceFitness, styles.hiDeborahTypo]}>
                  Front and Back Lunge
                </Text>
                <Text style={[styles.text2, styles.text2Typo]}>0:30</Text>
              </View>
              <Image
                style={styles.featherinfoIcon}
                contentFit="cover"
                source={require("../assets/featherinfo1.png")}
              />
            </View>
            <View style={[styles.exercise1Copy, styles.exercise1SpaceBlock]}>
              <View>
                <View style={styles.beautifulSlimBrunetteDoing} />
              </View>
              <View style={styles.text1}>
                <Text style={[styles.danceFitness, styles.hiDeborahTypo]}>
                  Side Plank
                </Text>
                <Text style={[styles.text2, styles.text2Typo]}>0:30</Text>
              </View>
              <Image
                style={styles.featherinfoIcon}
                contentFit="cover"
                source={require("../assets/featherinfo1.png")}
              />
            </View>
            <View style={[styles.exercise1Copy, styles.exercise1SpaceBlock]}>
              <View>
                <View style={styles.beautifulSlimBrunetteDoing} />
              </View>
              <View style={styles.text1}>
                <Text style={[styles.danceFitness, styles.hiDeborahTypo]}>
                  Arm circles
                </Text>
                <Text style={[styles.text2, styles.text2Typo]}>0:30</Text>
              </View>
              <Image
                style={styles.featherinfoIcon}
                contentFit="cover"
                source={require("../assets/featherinfo1.png")}
              />
            </View>
            <View style={[styles.exercise1Copy, styles.exercise1SpaceBlock]}>
              <View>
                <View style={styles.beautifulSlimBrunetteDoing} />
              </View>
              <View style={styles.text1}>
                <Text style={[styles.danceFitness, styles.hiDeborahTypo]}>
                  Sumo Squat
                </Text>
                <Text style={[styles.text2, styles.text2Typo]}>0:30</Text>
              </View>
              <Image
                style={styles.featherinfoIcon}
                contentFit="cover"
                source={require("../assets/featherinfo1.png")}
              />
            </View>
            <View style={[styles.exercise1Copy, styles.exercise1SpaceBlock]}>
              <View>
                <View style={styles.beautifulSlimBrunetteDoing} />
              </View>
              <View style={styles.text1}>
                <Text style={[styles.danceFitness, styles.hiDeborahTypo]}>
                  Sumo Squat
                </Text>
                <Text style={[styles.text2, styles.text2Typo]}>0:30</Text>
              </View>
              <Image
                style={styles.featherinfoIcon}
                contentFit="cover"
                source={require("../assets/featherinfo1.png")}
              />
            </View>
            <View style={[styles.exercise1Copy, styles.exercise1SpaceBlock]}>
              <View>
                <View style={styles.beautifulSlimBrunetteDoing} />
              </View>
              <View style={styles.text1}>
                <Text style={[styles.danceFitness, styles.hiDeborahTypo]}>
                  Sumo Squat
                </Text>
                <Text style={[styles.text2, styles.text2Typo]}>0:30</Text>
              </View>
              <Image
                style={styles.featherinfoIcon}
                contentFit="cover"
                source={require("../assets/featherinfo1.png")}
              />
            </View>
            <View style={[styles.exercise1Copy, styles.exercise1SpaceBlock]}>
              <View>
                <View style={styles.beautifulSlimBrunetteDoing} />
              </View>
              <View style={styles.text1}>
                <Text style={[styles.danceFitness, styles.hiDeborahTypo]}>
                  Sumo Squat
                </Text>
                <Text style={[styles.text2, styles.text2Typo]}>0:30</Text>
              </View>
              <Image
                style={styles.featherinfoIcon}
                contentFit="cover"
                source={require("../assets/featherinfo1.png")}
              />
            </View>
            <View style={[styles.exercise1Copy, styles.exercise1SpaceBlock]}>
              <View>
                <View style={styles.beautifulSlimBrunetteDoing} />
              </View>
              <View style={styles.text1}>
                <Text style={[styles.danceFitness, styles.hiDeborahTypo]}>
                  Sumo Squat
                </Text>
                <Text style={[styles.text2, styles.text2Typo]}>0:30</Text>
              </View>
              <Image
                style={styles.featherinfoIcon}
                contentFit="cover"
                source={require("../assets/featherinfo1.png")}
              />
            </View>
            <View style={[styles.exercise1Copy, styles.exercise1SpaceBlock]}>
              <View>
                <View style={styles.beautifulSlimBrunetteDoing} />
              </View>
              <View style={styles.text1}>
                <Text style={[styles.danceFitness, styles.hiDeborahTypo]}>
                  Sumo Squat
                </Text>
                <Text style={[styles.text2, styles.text2Typo]}>0:30</Text>
              </View>
              <Image
                style={styles.featherinfoIcon}
                contentFit="cover"
                source={require("../assets/featherinfo1.png")}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <Footer
        homeActive={require("../assets/homeactive.png")}
        training={require("../assets/training.png")}
        activity={require("../assets/activity.png")}
        onHomePress={() => navigation.navigate("HomeActive")}
        onTrainingPress={() => navigation.navigate("Workouts")}
        onActivityPress={() => navigation.navigate("ActivityActive")}
        onProfilePress={() => navigation.navigate("ProfileActive")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  workoutsScrollViewContent: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  scrollScrollViewContent: {
    flexDirection: "column",
    paddingBottom: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  workoutsFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  scrollSpaceBlock: {
    marginTop: 19,
    alignSelf: "stretch",
  },
  heaaderFlexBox: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  hiDeborahTypo: {
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorGray_200,
  },
  text2Typo1: {
    fontSize: FontSize.size_sm,
    alignSelf: "stretch",
  },
  text2Typo: {
    lineHeight: 24,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
  },
  viewTypo: {
    color: Color.colorDarkgray_100,
    fontSize: FontSize.size_mini,
    lineHeight: 24,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
  },
  workouts80Layout: {
    lineHeight: 18,
    color: Color.colorDarkslategray,
  },
  minTypo: {
    marginTop: 5,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    alignSelf: "stretch",
  },
  workoutShadowBox: {
    width: 121,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    justifyContent: "flex-end",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  exercise1SpaceBlock: {
    paddingBottom: Padding.p_8xs,
    paddingRight: Padding.p_3xs,
    paddingTop: Padding.p_8xs,
    paddingLeft: Padding.p_8xs,
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.colorWhite,
  },
  statusBar: {
    right: 0,
    width: 390,
    height: 50,
    zIndex: 0,
    justifyContent: "flex-end",
    top: 0,
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
  },
  hiDeborah: {
    lineHeight: 40,
    textAlign: "left",
    color: Color.colorGray_200,
    fontSize: FontSize.size_xl,
    flex: 1,
  },
  notificationIcon: {
    width: 16,
    height: 19,
  },
  heaader: {
    justifyContent: "space-between",
    alignSelf: "stretch",
    alignItems: "center",
  },
  search: {
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowRadius: 5,
    elevation: 5,
    borderRadius: Border.br_6xl,
    height: 45,
    paddingHorizontal: Padding.p_6xl,
    paddingVertical: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    marginTop: 19,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.colorWhite,
  },
  category: {
    color: Color.colorGray_200,
    fontSize: FontSize.size_xl,
    flex: 1,
  },
  viewAll: {
    textAlign: "left",
  },
  categories: {
    marginTop: 21,
    alignSelf: "stretch",
    flex: 1,
  },
  categoriesSection1: {
    height: 150,
  },
  popularWorkouts: {
    color: Color.colorGray_200,
    fontSize: FontSize.size_xl,
    alignSelf: "stretch",
  },
  workouts80: {
    color: Color.colorDarkslategray,
    fontSize: FontSize.size_xs,
    lineHeight: 18,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    alignSelf: "stretch",
  },
  popular1: {
    flex: 1,
  },
  viewAll1: {
    textAlign: "right",
  },
  bitmap2: {
    height: 120,
    backgroundColor: Color.colorGainsboro_200,
    alignSelf: "stretch",
  },
  bitmap1: {
    alignSelf: "stretch",
    zIndex: 0,
  },
  mask: {
    right: "-2.81%",
    left: "2.81%",
    backgroundColor: Color.colorGainsboro_300,
    height: 120,
    borderRadius: Border.br_5xs,
    zIndex: 1,
    top: 0,
    position: "absolute",
    width: "100%",
  },
  bitmap: {
    alignSelf: "stretch",
  },
  danceFitness: {
    fontSize: FontSize.size_base,
    lineHeight: 20,
    textAlign: "left",
    color: Color.colorGray_200,
    alignSelf: "stretch",
  },
  beginner: {
    color: Color.primary,
    display: "flex",
    height: 19,
    alignItems: "center",
  },
  min: {
    height: 18,
    color: Color.colorDarkslategray,
  },
  content: {
    marginTop: 1,
    paddingLeft: Padding.p_8xs,
    alignSelf: "stretch",
    justifyContent: "flex-end",
  },
  workout11: {
    marginLeft: 10,
  },
  workout12: {
    marginLeft: 10,
  },
  workout13: {
    marginLeft: 10,
  },
  workout14: {
    marginLeft: 10,
  },
  workout15: {
    marginLeft: 10,
  },
  workout16: {
    marginLeft: 10,
  },
  workouts1: {
    height: 186,
    maxHeight: 186,
    marginTop: 8,
    alignSelf: "stretch",
    width: "100%",
  },
  workouts: {
    justifyContent: "center",
    alignItems: "center",
  },
  exercises210: {
    height: 17,
    color: Color.colorDarkslategray,
    lineHeight: 18,
  },
  beautifulSlimBrunetteDoing: {
    width: 96,
    height: 64,
    backgroundColor: Color.colorGainsboro_200,
  },
  text2: {
    marginTop: 4,
    color: Color.colorDarkslategray,
    fontSize: FontSize.size_sm,
    alignSelf: "stretch",
  },
  text1: {
    marginLeft: 10,
    flex: 1,
  },
  featherinfoIcon: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  exercise1Copy: {
    marginTop: 10,
  },
  excercises: {
    marginTop: 18,
    alignSelf: "stretch",
  },
  scroll: {
    zIndex: 1,
    marginTop: 19,
    flex: 1,
  },
  homeActive: {
    height: 1471,
    paddingHorizontal: Padding.p_3xs,
    paddingTop: Padding.p_31xl,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    justifyContent: "center",
    width: "100%",
    flex: 1,
  },
});

export default HomeActive;
