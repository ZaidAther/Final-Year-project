import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

export type DropdownType = {
  label?: string;
};

const Dropdown = ({ label }: DropdownType) => {
  return (
    <View style={[styles.dropdown, styles.buttonFlexBox]}>
      <View style={[styles.button, styles.buttonFlexBox]}>
        <Text style={styles.label}>{label}</Text>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/icon.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonFlexBox: {
    alignItems: "center",
    borderRadius: Border.br_5xs,
    alignSelf: "stretch",
  },
  label: {
    fontSize: FontSize.size_xs,
    lineHeight: 20,
    fontFamily: FontFamily.poppins,
    color: Color.colorBlack,
    textAlign: "left",
  },
  icon: {
    width: 18,
    height: 18,
    overflow: "hidden",
    opacity: 0.5,
  },
  button: {
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorGray_300,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 45,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
  },
  dropdown: {
    justifyContent: "center",
  },
});

export default Dropdown;
