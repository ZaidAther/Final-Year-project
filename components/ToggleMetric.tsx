import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

export type ToggleMetricType = {
  fT?: string;
  cm?: string;

  /** Style props */
  property1FTActivePosition?: string;
  property1FTActiveMarginTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ToggleMetric = ({
  fT,
  cm,
  property1FTActivePosition,
  property1FTActiveMarginTop,
}: ToggleMetricType) => {
  const property1FTActiveStyle = useMemo(() => {
    return {
      ...getStyleValue("position", property1FTActivePosition),
      ...getStyleValue("marginTop", property1FTActiveMarginTop),
    };
  }, [property1FTActivePosition, property1FTActiveMarginTop]);

  return (
    <View
      style={[
        styles.property1ftActive,
        styles.cm1FlexBox,
        property1FTActiveStyle,
      ]}
    >
      <View style={[styles.ft, styles.ftFlexBox]}>
        <Text style={[styles.ft1, styles.ft1Typo]}>{fT}</Text>
      </View>
      <View style={[styles.cm, styles.ftFlexBox]}>
        <Text style={[styles.cm1, styles.ft1Typo]}>{cm}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cm1FlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  ftFlexBox: {
    width: 125,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_6xl,
  },
  ft1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
  },
  ft1: {
    color: Color.colorWhite,
  },
  ft: {
    backgroundColor: Color.primary,
  },
  cm1: {
    flex: 1,
    color: Color.primary,
    display: "flex",
    width: 37,
    justifyContent: "center",
    alignItems: "center",
  },
  cm: {
    backgroundColor: Color.colorWhite,
  },
  property1ftActive: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 250,
    height: 35,
    flexDirection: "row",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_6xl,
    alignItems: "center",
  },
});

export default ToggleMetric;
