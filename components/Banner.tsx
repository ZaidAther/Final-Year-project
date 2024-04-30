import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Banner = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.banner}>
      <Image
        style={[styles.bitmapIcon, styles.buttonLayout]}
        contentFit="cover"
        source={require("../assets/bitmap.png")}
      />
      <View style={[styles.bannerText, styles.buttonFlexBox]}>
        <Text style={[styles.fullBodyToning, styles.startTrainingTypo]}>
          Full Body Toning Workout
        </Text>
        <Text style={[styles.includesCircuitsTo, styles.startTrainingTypo]}>
          Includes circuits to work every muscle
        </Text>
        <Pressable
          style={[styles.button, styles.buttonFlexBox]}
          onPress={() => navigation.navigate("Workouts")}
        >
          <Text style={[styles.startTraining, styles.startTrainingTypo]}>
            Start Training
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonLayout: {
    width: "100%",
    overflow: "hidden",
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  startTrainingTypo: {
    textAlign: "center",
<<<<<<< HEAD
    color: Color.colorWhite,
=======
    color: Color.rgb255255255,

>>>>>>> Incoming
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
  },
  bitmapIcon: {
    maxWidth: "100%",
    height: 339,
    zIndex: 0,
    alignSelf: "stretch",
  },
  fullBodyToning: {
    fontSize: FontSize.size_xl,
    lineHeight: 24,
    alignSelf: "stretch",
  },
  includesCircuitsTo: {
    fontSize: FontSize.size_sm,
    lineHeight: 18,
    height: 40,
    marginTop: 15,
    alignSelf: "stretch",
  },
  startTraining: {
    fontSize: FontSize.size_mid,
    lineHeight: 20,
  },
  button: {
<<<<<<< HEAD
=======
    borderRadius: Border.br_6xl,
    backgroundColor: Color.primary,

>>>>>>> Incoming
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 1,
    borderRadius: Border.br_6xl,
    backgroundColor: Color.primary,
    flexDirection: "row",
    paddingHorizontal: Padding.p_14xl,
    paddingVertical: Padding.p_xs,
    maxWidth: 250,
    marginTop: 15,
    width: "100%",
    overflow: "hidden",
  },
  bannerText: {
    position: "absolute",
    marginTop: -69.5,
    width: "85.17%",
    top: "50%",
    right: "7.38%",
    left: "7.45%",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    zIndex: 1,
  },
  banner: {
    marginTop: 19,
    alignSelf: "stretch",
  },
});

export default Banner;
