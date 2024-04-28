import React, { useMemo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

export type GoalsType = {
  dumbbell?: ImageSourcePropType;

  /** Style props */
  propBorderColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Goals = ({ dumbbell, propBorderColor }: GoalsType) => {
  const goalStyle = useMemo(() => {
    return {
      ...getStyleValue("borderColor", propBorderColor),
    };
  }, [propBorderColor]);

  return (
    <View style={[styles.goal, styles.goalFlexBox, goalStyle]}>
      <View style={[styles.icon, styles.goalFlexBox]}>
        <View style={[styles.bg, styles.bgLayout]}>
          <LinearGradient
            style={[styles.bg1, styles.bgLayout]}
            locations={[]}
            colors={[]}
          />
        </View>
        <Image
          style={styles.dumbbellIcon}
          contentFit="cover"
          source={dumbbell}
        />
      </View>
      <Text style={styles.title}>Gain muscle mass</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  goalFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  bgLayout: {
    height: 56,
    width: 56,
  },
  bg1: {
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    position: "absolute",
    borderRadius: Border.br_5xs,
  },
  bg: {
    zIndex: 0,
    overflow: "hidden",
  },
  dumbbellIcon: {
    height: "42.86%",
    width: "42.86%",
    top: "28.57%",
    right: "28.57%",
    bottom: "28.57%",
    left: "28.57%",
    maxWidth: "100%",
    maxHeight: "100%",
    zIndex: 1,
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    justifyContent: "center",
  },
  title: {
    flex: 1,
    fontSize: FontSize.size_base,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.poppins,
    color: Color.colorGray_200,
    textAlign: "left",
    marginLeft: 14,
  },
  goal: {
    alignSelf: "stretch",
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.primary,
    borderWidth: 1,
    height: 88,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_12xl,
    overflow: "hidden",
    borderRadius: Border.br_5xs,
  },
});

export default Goals;
