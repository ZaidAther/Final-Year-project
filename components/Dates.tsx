import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

export type DatesType = {
  date?: string;

  /** Style props */
  property1activeBackgroundColor?: string;
  dateColor?: string;
  novColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Dates = ({
  date,
  property1activeBackgroundColor,
  dateColor,
  novColor,
}: DatesType) => {
  const property1activeStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", property1activeBackgroundColor),
    };
  }, [property1activeBackgroundColor]);

  const dateStyle = useMemo(() => {
    return {
      ...getStyleValue("color", dateColor),
    };
  }, [dateColor]);

  const novStyle = useMemo(() => {
    return {
      ...getStyleValue("color", novColor),
    };
  }, [novColor]);

  return (
    <View style={[styles.property1active, property1activeStyle]}>
      <Text style={[styles.date, styles.novTypo, dateStyle]}>{date}</Text>
      <Text style={[styles.nov, styles.novTypo, novStyle]}>Nov</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  novTypo: {
    width: 64,
    textAlign: "center",
    color: Color.rgb255255255,

    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    lineHeight: 24,
  },
  date: {
    fontSize: FontSize.size_xl,
    height: 28,
  },
  nov: {
    fontSize: FontSize.size_xs,
    height: 16,
  },
  property1active: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.primary,

    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 1,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_sm,
  },
});

export default Dates;
