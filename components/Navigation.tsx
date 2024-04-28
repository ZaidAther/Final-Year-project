import React, { useMemo } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Pressable,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

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
      ...getStyleValue("color", step2OfColor),
      ...getStyleValue("marginLeft", step2OfMarginLeft),
    };
  }, [step2OfColor, step2OfMarginLeft]);

  const skipStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", skipMarginLeft),
    };
  }, [skipMarginLeft]);

  return (
    <View style={[styles.navigation, navigationStyle]}>
      <Pressable style={styles.backButton} onPress={onBackButtonPress}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/back-button1.png")}
        />
      </Pressable>
      {showStep2Of && (
        <Text style={[styles.step2Of, styles.skipTypo, step2OfStyle]}>
          {step2Of5}
        </Text>
      )}
      {showSkip && (
        <Text style={[styles.skip, styles.skipTypo, skipStyle]}>Skip</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  skipTypo: {
    marginLeft: 21,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    fontSize: FontSize.size_base,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
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
