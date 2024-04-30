import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const Activity = () => {
  return (
    <View style={styles.heartRate}>
      <View style={styles.icon}>
        <Text style={styles.heartRate1}>Heart rate</Text>
        <View style={styles.icon1}>
          <Text style={styles.text}>❤️</Text>
        </View>
      </View>
      <View style={[styles.heartPulse, styles.heartFlexBox]}>
        <Image
          style={styles.pathIcon}
          contentFit="cover"
          source={require("../assets/path2.png")}
        />
        <Image
          style={styles.pathIcon1}
          contentFit="cover"
          source={require("../assets/path3.png")}
        />
        <Image
          style={styles.pathIcon2}
          contentFit="cover"
          source={require("../assets/path4.png")}
        />
      </View>
      <View style={[styles.heartText, styles.heartFlexBox]}>
        <Text style={[styles.text1, styles.bmpTypo]}>120</Text>
        <Text style={[styles.bmp, styles.bmpTypo]}>bmp</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heartFlexBox: {
    marginTop: 20,
    justifyContent: "center",
    flexDirection: "row",
  },
  bmpTypo: {
    lineHeight: 24,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
  },
  heartRate1: {
    fontSize: FontSize.size_sm,
    width: 82,
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    lineHeight: 20,
  },
  text: {
    fontSize: FontSize.size_base,
    color: Color.colorGray_100,
    textAlign: "center",
    width: 20,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    lineHeight: 20,
  },
  icon1: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorMistyrose,
    padding: Padding.p_7xs,
    justifyContent: "center",
  },
  icon: {
    alignSelf: "stretch",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  pathIcon: {
    width: 55,
    height: 32,
  },
  pathIcon1: {
    width: 56,
    height: 32,
  },
  pathIcon2: {
    width: 50,
    height: 32,
  },
  heartPulse: {
    width: 161,
  },
  text1: {
    fontSize: FontSize.size_xl,
    color: Color.colorGray_200,
    lineHeight: 24,
  },
  bmp: {
    fontSize: FontSize.size_xs,
    color: Color.colorDarkgray_100,
    marginLeft: 5,
  },
  heartText: {
    alignItems: "center",
  },
  heartRate: {
    flex: 1,
    borderRadius: Border.br_mini,
    backgroundColor: Color.rgb255255255,

    shadowColor: "rgba(234, 240, 246, 0.6)",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 1,
    height: 170,
    overflow: "hidden",
    padding: Padding.p_3xs,
    marginLeft: 15,
    alignItems: "center",
  },
});

export default Activity;
