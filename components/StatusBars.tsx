import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, ImageSourcePropType } from "react-native";

export type StatusBarsType = {
  barsStatusBarsiPhoneLight?: ImageSourcePropType;

  /** Style props */
  barsStatusBarsiPhoneLightHeight?: number | string;
  barsStatusBarsiPhoneLightOverflow?: string;
  barsStatusBarsiPhoneLightFlex?: number | string;
  barsStatusBarsiPhoneLightWidth?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StatusBars = ({
  barsStatusBarsiPhoneLight,
  barsStatusBarsiPhoneLightHeight,
  barsStatusBarsiPhoneLightOverflow,
  barsStatusBarsiPhoneLightFlex,
  barsStatusBarsiPhoneLightWidth,
}: StatusBarsType) => {
  const barsStatusBarsiPhoneLightIconStyle = useMemo(() => {
    return {
      ...getStyleValue("height", barsStatusBarsiPhoneLightHeight),
      ...getStyleValue("overflow", barsStatusBarsiPhoneLightOverflow),
      ...getStyleValue("flex", barsStatusBarsiPhoneLightFlex),
      ...getStyleValue("width", barsStatusBarsiPhoneLightWidth),
    };
  }, [
    barsStatusBarsiPhoneLightHeight,
    barsStatusBarsiPhoneLightOverflow,
    barsStatusBarsiPhoneLightFlex,
    barsStatusBarsiPhoneLightWidth,
  ]);

  return (
    <Image
      style={[
        styles.barsstatusBarsiphonelightIcon,
        barsStatusBarsiPhoneLightIconStyle,
      ]}
      contentFit="cover"
      source={barsStatusBarsiPhoneLight}
    />
  );
};

const styles = StyleSheet.create({
  barsstatusBarsiphonelightIcon: {
    height: 48,
    flex: 1,
  },
});

export default StatusBars;
