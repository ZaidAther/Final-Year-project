import React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

export type ChooseLevelProps = {
  title?: string;
  txt?: string;
  propBorderColor?: string;
  onPress?: () => void;
  isSelected?: boolean;
};

const ChooseLevel = ({
  title,
  txt,
  propBorderColor,
  onPress,
  isSelected = false,
}: ChooseLevelProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.chooseLevel,
        isSelected
          ? { backgroundColor: Color.primary, borderColor: propBorderColor }
          : { backgroundColor: Color.colorWhite, borderColor: Color.primary },
      ]}
    >
      <View style={styles.text}>
        <Text
          style={[
            styles.title,
            styles.txtTypo,
            isSelected && { color: Color.colorWhite },
          ]}
        >
          {title}
        </Text>
        <Text
          style={[
            styles.txt,
            styles.txtTypo,
            isSelected && { color: Color.colorWhite },
          ]}
        >
          {txt}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  txtTypo: {
    // height: 16,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "400",
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
    marginTop: 5,
  },
  text: {
    alignSelf: "stretch",
  },
  chooseLevel: {
    width: "100%",
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 1,
    borderRadius: Border.br_5xs,
    backgroundColor: "white",
    // borderStyle: "solid",
    // borderWidth: 1,
    height: 80,
    overflow: "hidden",
    padding: Padding.p_5xl,
    marginTop: 16,
    alignSelf: "stretch",
  },
});

export default ChooseLevel;
