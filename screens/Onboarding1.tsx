import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import StatusBars from "../components/StatusBars";
import BoardingContent from "../components/BoardingContent";
import { Color, Padding, Border } from "../GlobalStyles";


const Onboarding1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.onboarding2}>

      <View style={styles.statusBar}>
        <StatusBars
          barsStatusBarsiPhoneLight={require("../assets/barsstatus-barsiphonelight.png")}
          barsStatusBarsiPhoneLightHeight={50}
          barsStatusBarsiPhoneLightOverflow="hidden"
          barsStatusBarsiPhoneLightWidth={390}
        />
      </View>
      <BoardingContent
        welcomeToFitooZone="Custom Workouts"
        title="FitooZone has workouts on demand that you can find based on hCreate and save your own custom workouts. Name your workouts, save them, and they’ll automatically appear when you’re ready  to workoutow much time you have"
        path10={require("../assets/path-101.png")}
        path9={require("../assets/path-91.png")}
        dot1={require("../assets/dot-1.png")}
        dot2={require("../assets/dot-1.png")}
        dot3={require("../assets/dot-2.png")}
        startTraining="Start Training"
        logoHeight={214}
        path9IconDisplay="unset"
        path9IconHeight="unset"
        onButtonPress={() => navigation.navigate("Gender")}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  button1FlexBox: {
    overflow: "hidden",
    backgroundColor: Color.primary,
    alignItems: "center",
    flex: 1,
  },
  buttonSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_3xs,
    alignSelf: "stretch",
    alignItems: "center",
  },
  titleTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
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
  onboarding2: {
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
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    height: 44,
    marginTop: 20,
    justifyContent: "center",
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
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  onboarding2: {
    width: "100%",
    height: 736,
    overflow: "hidden",

    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export default Onboarding1;
