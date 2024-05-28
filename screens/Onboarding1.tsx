import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import StatusBars from "../components/StatusBars";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Padding, FontFamily, FontSize, Border } from "../GlobalStyles";

const Onboarding1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.onboarding2, styles.button1FlexBox]}>
      <View style={styles.statusBar}>
        <StatusBars
          barsStatusBarsiPhoneLight={require("../assets/barsstatus-barsiphonelight.png")}
          barsStatusBarsiPhoneLightHeight={50}
          barsStatusBarsiPhoneLightOverflow="hidden"
          barsStatusBarsiPhoneLightWidth={390}
        />
      </View>
      <View style={styles.content}>
        <View style={[styles.welcomeText, styles.buttonSpaceBlock]}>
          <Text style={[styles.welcomeToFitoozone, styles.titleTypo]}>
            Custom Workouts
          </Text>
          <Text style={[styles.title, styles.titleTypo]}>
            FitooZone has workouts on demand that you can find based on hCreate
            and save your own custom workouts. Name your workouts, save them,
            and they’ll automatically appear when you’re ready  to workoutow
            much time you have
          </Text>
        </View>
        <View style={styles.logo}>
          <Image
            style={styles.path10Icon}
            contentFit="cover"
            source={require("../assets/path-101.png")}
          />
          <Image
            style={styles.path9Icon}
            contentFit="cover"
            source={require("../assets/path-91.png")}
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
            source={require("../assets/dot-1.png")}
          />
          <Image
            style={[styles.dot2Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/dot-2.png")}
          />
        </View>
        <View style={[styles.button, styles.buttonSpaceBlock]}>
          <Pressable
            style={[styles.button1, styles.button1FlexBox]}
            onPress={() => navigation.navigate("WeightInputScreen")} // Fixed typo
          >
            <Text style={[styles.startTraining, styles.titleTypo]}>
              Start Training
            </Text>
          </Pressable>
        </View>
      </View>
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
    justifyContent: "space-between",
    zIndex: 0,
    flexDirection: "row",
    alignItems: "center",
  },
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
    marginTop: 18,
    alignSelf: "stretch",
  },
  welcomeText: {
    height: 214,
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
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export default Onboarding1;
