import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

export type CategoryType = {
  prop?: string;
  cardio?: string;

  /** Style props */
  categoryPosition?: string;
  categoryMarginLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Category = ({
  prop,
  cardio,
  categoryPosition,
  categoryMarginLeft,
}: CategoryType) => {
  const categoryStyle = useMemo(() => {
    return {
      ...getStyleValue("position", categoryPosition),
      ...getStyleValue("marginLeft", categoryMarginLeft),
    };
  }, [categoryPosition, categoryMarginLeft]);

  return (
    <View style={[styles.category, categoryStyle]}>
      <View style={styles.text}>
        <Text style={[styles.text1, styles.text1Typo]}>{prop}</Text>
        <Text style={[styles.cardio, styles.text1Typo]}>{cardio}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
  },
  text1: {
    fontSize: FontSize.size_7xl,
    color: Color.colorBlack,
    width: 26,
  },
  cardio: {
    alignSelf: "stretch",
    fontSize: FontSize.size_xs,
    lineHeight: 24,
    color: Color.colorGray_200,
    marginTop: 3,
  },
  text: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  category: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_sm,
    alignSelf: "stretch",
    flex: 1,
  },
});

export default Category;
