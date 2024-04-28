import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, ScrollView, Pressable, Text } from "react-native";
import { Button } from "react-native-paper";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import StatusBars from "../components/StatusBars";
import Navigations from "../components/Navigation";
import AllGenders from "../components/AllGenders";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const Gender = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.gender, styles.genderFlexBox]}>
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
        style={[styles.scrollContent, styles.genderFlexBox]}
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
        <Text style={[styles.chooseGender, styles.chooseGenderTypo]}>
          Choose gender
        </Text>
        <View style={[styles.genders, styles.buttonFlexBox]}>
          <AllGenders property1DefaultBorderColor="#e5e9ef" />
          <AllGenders property1DefaultBorderColor="#2f548d" />
        </View>
      </ScrollView>
      <View style={[styles.continue, styles.buttonFlexBox]}>
        <Pressable
          style={[styles.button, styles.buttonFlexBox]}
          onPress={() => navigation.navigate("Goal")}
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
  womanBtn: {
    color: "#0a0615",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Poppins",
  },
  womanBtn1: {
    paddingHorizontal: 15,
    paddingVertical: 31,
    borderRadius: 8,
    height: 88,
  },
  scrollContentScrollViewContent: {
    flexDirection: "column",
    paddingBottom: 80,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  genderFlexBox: {
    flex: 1,
    overflow: "hidden",
  },
  chooseGenderTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
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
    fontSize: FontSize.size_xl,
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
    width: "92.05%",
    right: "3.97%",
    bottom: 0,
    left: "3.97%",
    paddingBottom: Padding.p_6xl,
    zIndex: 2,
    position: "absolute",
  },
  gender: {
    backgroundColor: Color.colorWhite,
    width: "100%",
    height: 692,
    paddingHorizontal: Padding.p_3xs,
    paddingTop: Padding.p_31xl,
    alignItems: "center",
    overflow: "hidden",
  },
});

export default Gender;
