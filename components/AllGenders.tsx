import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

export type AllGendersType = {
  /** Style props */
  property1DefaultBorderColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const AllGenders = ({ property1DefaultBorderColor }: AllGendersType) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      ...getStyleValue("borderColor", property1DefaultBorderColor),
    };
  }, [property1DefaultBorderColor]);

  return (
    <View
      style={[
        styles.property1default,
        styles.iconFlexBox,
        property1DefaultStyle,
      ]}
    >
      <View style={[styles.icon, styles.iconFlexBox]}>
        <Text style={[styles.text, styles.textTypo]}>👨</Text>
      </View>
      <Text style={[styles.title, styles.textTypo]}>Man</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  textTypo: {
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
  },
  text: {
    fontSize: FontSize.size_7xl,
    color: Color.colorGray_100,
    textAlign: "center",
  },
  icon: {
    justifyContent: "center",
  },
  title: {
    flex: 1,
    fontSize: FontSize.size_base,
    lineHeight: 20,
    color: Color.colorGray_200,
    textAlign: "left",
    marginLeft: 14,
  },
  property1default: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.rgb255255255,

    borderStyle: "solid",
    borderColor: Color.colorAliceblue_200,
    borderWidth: 1,
    overflow: "hidden",
    padding: Padding.p_12xl,
    alignSelf: "stretch",
  },
});

export default AllGenders;
