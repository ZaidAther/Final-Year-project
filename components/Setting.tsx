import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

export type SettingType = {
  title?: string;

  /** Style props */
  propMarginTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Setting = ({ title, propMarginTop }: SettingType) => {
  const accountStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propMarginTop]);

  return (
    <View style={[styles.account, accountStyle]}>
      <Text style={styles.title}>{title}</Text>
      <View style={[styles.arrowIosForwardLightTheme, styles.viewboxLayout]}>
        <View style={[styles.viewbox, styles.viewboxLayout]} />
        <Image
          style={styles.pathIcon}
          contentFit="cover"
          source={require("../assets/path1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewboxLayout: {
    height: 24,
    width: 24,
  },
  title: {
    flex: 1,
    fontSize: FontSize.size_base,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.poppins,
    color: Color.colorGray_200,
    textAlign: "left",
  },
  viewbox: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  pathIcon: {
    top: 5,
    left: 9,
    width: 7,
    height: 14,
    position: "absolute",
  },
  arrowIosForwardLightTheme: {
    overflow: "hidden",
  },
  account: {
    alignSelf: "stretch",
<<<<<<< HEAD
    backgroundColor: Color.colorWhite,
=======
    backgroundColor: Color.rgb255255255,

>>>>>>> Incoming
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_mid,
    overflow: "hidden",
  },
});

export default Setting;
