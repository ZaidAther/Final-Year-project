import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontFamily, Color, Border } from "../GlobalStyles";

const ALaunch = () => {
  return (
    <View style={styles.aLaunch}>
      <Text style={styles.activetrack}>
        <Text style={[styles.active, styles.trackTypo]}>ACTIVE</Text>
        <Text style={styles.trackTypo}>TRACK</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  trackTypo: {
    fontFamily: FontFamily.poppins,
    fontStyle: "italic",
  },
  active: {
    fontWeight: "700",
  },
  activetrack: {
    fontSize: 40,
    textTransform: "capitalize",
    color: Color.primary,
    textAlign: "center",
  },
  aLaunch: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderWidth: 1,
    flex: 1,
    width: "100%",
    height: 736,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 59,
    paddingVertical: 338,
  },
});

export default ALaunch;
