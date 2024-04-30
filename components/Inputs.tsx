import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";
import { TextInput } from "react-native-gesture-handler";

const Inputs = () => {
  return (
    <View style={styles.input1}>
      <Text style={styles.phoneEmail}>Phone / Email</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  phoneEmail: {
    fontSize: FontSize.size_sm,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.poppins,
    color: Color.colorDarkslategray,
    textAlign: "left",
  },
  input1: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.rgb255255255,

    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_xs,
    alignSelf: "stretch",
  },
});

export default Inputs;
