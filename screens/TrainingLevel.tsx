import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, ScrollView, Pressable, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import StatusBars from "../components/StatusBars";
import Navigations from "../components/Navigation";
import ChooseLevel from "../components/ChooseLevel";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const TrainingLevel = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.trainingLevel}>
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
        style={[styles.scrollContent, styles.buttonFlexBox]}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContentScrollViewContent}
      >
        <Navigations
          step2Of5="Step 1 of 8"
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
          Choose training level
        </Text>
        <View style={[styles.levels, styles.levelsFlexBox]}>
          <ChooseLevel
            title="Irregular training"
            txt="I train 1-2 times a week"
            propBorderColor="#e5e9ef"
          />
          <ChooseLevel
            title="Beginner"
            txt="I want to start training"
            propBorderColor="#2f548d"
          />
          <ChooseLevel
            title="Medium"
            txt="I train 3-5 times a week"
            propBorderColor="#e5e9ef"
          />
          <ChooseLevel
            title="Advanced"
            txt="I train more than 5 times a week"
          />
        </View>
      </ScrollView>
      <View style={[styles.continue, styles.levelsFlexBox]}>
        <Pressable
          style={[styles.button, styles.levelsFlexBox]}
          onPress={() => navigation.navigate("CreatePlan")}
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
    fontSize: FontSize.size_xl,
    lineHeight: 32,
    color: Color.colorGray_200,
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
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

export default TrainingLevel;
