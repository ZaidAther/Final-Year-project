import * as React from "react";
import { Image } from "expo-image";
<<<<<<< HEAD
import { StyleSheet, View, Text, Pressable } from "react-native";
import StatusBars from "../components/StatusBars";
=======
import { StyleSheet, View } from "react-native";

>>>>>>> Incoming
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
<<<<<<< HEAD
import { Color, Padding, FontFamily, FontSize, Border } from "../GlobalStyles";
=======
import StatusBars from "../components/StatusBars";
import BoardingContent from "../components/BoardingContent";
import { Color } from "../GlobalStyles";

>>>>>>> Incoming

const Onboarding = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
<<<<<<< HEAD
    <View style={[styles.onboarding1, styles.button1Bg]}>
=======
    <View style={styles.onboarding1}>

>>>>>>> Incoming
      <View style={styles.statusBar}>
        <StatusBars
          barsStatusBarsiPhoneLight={require("../assets/barsstatus-barsiphonelight.png")}
          barsStatusBarsiPhoneLightHeight={50}
          barsStatusBarsiPhoneLightOverflow="hidden"
          barsStatusBarsiPhoneLightWidth={390}
        />
      </View>
<<<<<<< HEAD
      <View style={styles.content}>
        <View style={[styles.welcomeText, styles.buttonSpaceBlock]}>
          <Text style={[styles.welcomeToFitoozone, styles.titleTypo]}>
            Workout Categories
          </Text>
          <Text style={[styles.title, styles.buttonFlexBox]}>
            Workout categories will help you gain strength, get in better shape
            and embrace  a healthy lifestyle
          </Text>
        </View>
        <View style={styles.logo}>
          <Image
            style={styles.path10Icon}
            contentFit="cover"
            source={require("../assets/path-10.png")}
          />
          <Image
            style={styles.path9Icon}
            contentFit="cover"
            source={require("../assets/path-9.png")}
          />
        </View>
        <View style={styles.dots}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/dot-1.png")}
          />
          <Image
            style={[styles.dot2Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/dot-2.png")}
          />
          <Image
            style={[styles.dot2Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/dot-1.png")}
          />
        </View>
        <View style={[styles.button, styles.buttonFlexBox]}>
          <Pressable
            style={[styles.button1, styles.buttonFlexBox]}
            onPress={() => navigation.navigate("Onboarding1")}
          >
            <Text style={[styles.startTraining, styles.titleTypo]}>
              Start Training
            </Text>
          </Pressable>
        </View>
      </View>
=======
      <BoardingContent
        welcomeToFitooZone="Workout Categories"
        title="Workout categories will help you gain strength, get in better shape and embrace  a healthy lifestyle"
        path10={require("../assets/path-10.png")}
        path9={require("../assets/path-9.png")}
        dot1={require("../assets/dot-1.png")}
        dot2={require("../assets/dot-2.png")}
        dot3={require("../assets/dot-1.png")}
        startTraining="Start Training"
        logoHeight="unset"
        path9IconDisplay="flex"
        path9IconHeight={56}
        onButtonPress={() => navigation.navigate("Onboarding1")}
      />

>>>>>>> Incoming
    </View>
  );
};

const styles = StyleSheet.create({
  button1Bg: {
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
<<<<<<< HEAD
=======
    flexDirection: "row",

>>>>>>> Incoming
    justifyContent: "space-between",
    zIndex: 0,
    flexDirection: "row",
    alignItems: "center",
  },
<<<<<<< HEAD
  welcomeToFitoozone: {
    fontSize: FontSize.size_8xl,
    lineHeight: 32,
    color: Color.colorGray_200,
    alignSelf: "stretch",
  },
  title: {
    fontSize: FontSize.size_base,
    lineHeight: 22,
    color: Color.colorDarkslategray,
    display: "flex",
    height: 56,
    marginTop: 18,
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    alignSelf: "stretch",
  },
  welcomeText: {
    alignItems: "center",
  },
  path10Icon: {
    width: 13,
    height: 13,
  },
  path9Icon: {
    width: 72,
    height: 30,
    marginTop: 5,
  },
  logo: {
    marginTop: 20,
  },
  dot2Icon: {
    marginLeft: 8,
  },
  dots: {
    marginTop: 20,
    flexDirection: "row",
  },
  startTraining: {
    fontSize: FontSize.size_mid,
    lineHeight: 20,
    color: Color.colorWhite,
=======
  onboarding1: {
    backgroundColor: Color.rgb255255255,

>>>>>>> Incoming
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
  onboarding1: {
    width: "100%",
    height: 736,
<<<<<<< HEAD
=======
    overflow: "hidden",

>>>>>>> Incoming
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export default Onboarding;
