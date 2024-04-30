import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

export type ChooseLevelType = {
  title?: string;
  txt?: string;

  /** Style props */
  propBorderColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ChooseLevel = ({ title, txt, propBorderColor }: ChooseLevelType) => {
  const chooseLevelStyle = useMemo(() => {
    return {
      ...getStyleValue("borderColor", propBorderColor),
    };
  }, [propBorderColor]);

  return (
    <View style={[styles.chooseLevel, chooseLevelStyle]}>
      <View style={styles.text}>
        <Text style={[styles.title, styles.txtTypo]}>{title}</Text>
        <Text style={[styles.txt, styles.txtTypo]}>{txt}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  txtTypo: {
    height: 16,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    alignSelf: "stretch",
  },
  title: {
    fontSize: FontSize.size_base,
    lineHeight: 20,
    color: Color.colorGray_200,
  },
  txt: {
    fontSize: FontSize.size_sm,
    lineHeight: 18,
    color: Color.colorDarkslategray,
    marginTop: 9,
  },
  text: {
    alignSelf: "stretch",
  },
  chooseLevel: {
    borderRadius: Border.br_5xs,
<<<<<<< HEAD
    backgroundColor: Color.colorWhite,
=======
    backgroundColor: Color.rgb255255255,

>>>>>>> Incoming
    borderStyle: "solid",
    borderColor: Color.colorAliceblue_200,
    borderWidth: 1,
    height: 89,
    overflow: "hidden",
    padding: Padding.p_5xl,
    marginTop: 16,
    alignSelf: "stretch",
  },
});

export default ChooseLevel;
