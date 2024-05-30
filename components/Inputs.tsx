import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";
import { TextInput } from "react-native-gesture-handler";

interface InputsProps {
  placeholder: string;
  placeholderTextColor?: string;
  onChangeText?: (text: string) => void;
  value?: string;
  secureTextEntry?: boolean;
}

const Inputs = ({
  placeholder,
  placeholderTextColor,
  onChangeText,
  value,
  secureTextEntry,
}: InputsProps) => {
  return (
    <View style={styles.input1}>
      <TextInput
        style={styles.phoneEmail}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  phoneEmail: {
    height: 45,
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.poppins,
    color: Color.colorDarkslategray,
    textAlign: "left",
    alignItems: "center",
    textAlignVertical: "center",
    // textAlignVertical: "center",
    // paddingVertical: Padding.p_xs,
    width: "100%",
  },
  input1: {
    height: 45,
    borderRadius: 8,
    backgroundColor: "white",
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2,
    elevation: 1,
    shadowOpacity: 1,
    // overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_xs,
    alignSelf: "stretch",
    width: "100%",
  },
});

export default Inputs;
