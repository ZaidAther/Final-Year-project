import React, { useMemo } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Pressable,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

export type NavigationsType = {
  icon?: ImageSourcePropType;
  step2Of5?: string;
  showStep2Of?: boolean;
  showSkip?: boolean;

  /** Style props */
  navigationPosition?: string;
  navigationAlignSelf?: string;
  step2OfColor?: string;
  step2OfMarginLeft?: number | string;
  skipMarginLeft?: number | string;

  /** Action props */
  onBackButtonPress?: () => void;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Navigations = ({
  icon,
  step2Of5,
  showStep2Of,
  showSkip,
  navigationPosition,
  navigationAlignSelf,
  step2OfColor,
  step2OfMarginLeft,
  skipMarginLeft,
  onBackButtonPress,
}: NavigationsType) => {
  const navigationStyle = useMemo(() => {
    return {
      ...getStyleValue("position", navigationPosition),
      ...getStyleValue("alignSelf", navigationAlignSelf),
    };
  }, [navigationPosition, navigationAlignSelf]);

  const step2OfStyle = useMemo(() => {
    return {
      ...getStyleValue("color", "#035e7b"),
      ...getStyleValue("marginLeft", step2OfMarginLeft),
    };
  }, [step2OfColor, step2OfMarginLeft]);

  const skipStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", skipMarginLeft),
    };
  }, [skipMarginLeft]);

  return (
    <>
        <Pressable style={styles.icon} onPress={() => onBackButtonPress}>
          <Image
            style={styles.icon1}
            contentFit="cover"
            source={require("../assets/icon1.png")}
          />
        </Pressable>
    <View style={[styles.navigation, navigationStyle]}>
      {showStep2Of && (
        <Text style={[styles.step2Of, styles.skipTypo, step2OfStyle]}>
          {step2Of5}
        </Text>
      )}
      {/* {showSkip && (
        <Text style={[styles.skip, styles.skipTypo, skipStyle]}>Skip</Text>
      )} */}
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  icon1: {
    width: 12,
    height: 12,
  },
  icon: {

    position: "absolute",
    top: -10,
    left: 10,
    height: 34,
    padding: Padding.p_xs,
    zIndex: 3,
    backgroundColor: Color.rgb255255255,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_8xs,
    // flexDirection: "row",
  },
  skipTypo: {
    marginLeft: 21,
    fontFamily: FontFamily.poppins,
    fontWeight: "400",
    fontSize: FontSize.size_base,
  },
  // icon: {
  //   width: "100%",
  //   height: "100%",
  // },
  backButton: {
    width: 24,
    height: 24,
  },
  step2Of: {
    flex: 1,
    lineHeight: 20,
    color: Color.colorIndigo,
    textAlign: "center",
  },
  skip: {
    lineHeight: 22,
    color: Color.colorDarkslategray,
    textAlign: "left",
  },
  navigation: {
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
  },
});

export default Navigations;
