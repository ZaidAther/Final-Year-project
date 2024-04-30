import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import StatusBars from "../components/StatusBars";
import BoardingContent from "../components/BoardingContent";
import { Color } from "../GlobalStyles";


const Welcome = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.welcome}>

      <View style={styles.statusBar}>
        <StatusBars
          barsStatusBarsiPhoneLight={require("../assets/barsstatus-barsiphonelight.png")}
          barsStatusBarsiPhoneLightHeight={50}
          barsStatusBarsiPhoneLightOverflow="hidden"
          barsStatusBarsiPhoneLightWidth={390}
        />
      </View>
      <BoardingContent
        welcomeToFitooZone="Welcome to FitooZone"
        title="FitooZone has workouts on demand that you can find based on how much time you have"
        path10={require("../assets/path-10.png")}
        path9={require("../assets/path-9.png")}
        dot1={require("../assets/dot-2.png")}
        dot2={require("../assets/dot-1.png")}
        dot3={require("../assets/dot-1.png")}
        startTraining="Get Started"
        onButtonPress={() => navigation.navigate("SignUp")}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  welcomeBg: {
    overflow: "hidden",
    backgroundColor: Color.primary,
    flex: 1,
  },
  buttonSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_3xs,
    alignSelf: "stretch",
  },
  titleTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconLayout: {
    height: 8,
    width: 8,
    overflow: "hidden",
  },
  statusBar: {
    position: "absolute",
    top: 0,
    right: 1,
    width: 376,
    height: 50,
    flexDirection: "row",

    justifyContent: "space-between",
    zIndex: 0,
    flexDirection: "row",
    alignItems: "center",
  },
  welcome: {
    backgroundColor: Color.rgb255255255,

    flex: 1,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
  },
  button1: {
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 1,
    borderRadius: Border.br_6xl,
    paddingHorizontal: Padding.p_14xl,
    paddingVertical: Padding.p_xs,
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: Color.primary,
    flex: 1,
  },
  button: {
    height: 44,
    marginTop: 20,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_3xs,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  content: {
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    paddingTop: Padding.p_xl,
    paddingBottom: Padding.p_6xl,
    zIndex: 1,
    marginTop: -1,
    alignSelf: "stretch",
    alignItems: "center",
  },
  welcome: {
    width: "100%",
    height: 736,
    overflow: "hidden",

    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export default Welcome;
