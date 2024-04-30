import React, { useMemo } from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { Image } from "expo-image";
import { Padding, FontFamily, FontSize, Color, Border } from "../GlobalStyles";

export type BoardingContentType = {
  welcomeToFitooZone?: string;
  title?: string;
  path10?: ImageSourcePropType;
  path9?: ImageSourcePropType;
  dot1?: ImageSourcePropType;
  dot2?: ImageSourcePropType;
  dot3?: ImageSourcePropType;
  startTraining?: string;

  /** Style props */
  logoHeight?: number | string;
  path9IconDisplay?: string;
  path9IconHeight?: number | string;

  /** Action props */
  onButtonPress?: () => void;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const BoardingContent = ({
  welcomeToFitooZone,
  title,
  path10,
  path9,
  dot1,
  dot2,
  dot3,
  startTraining,
  logoHeight,
  path9IconDisplay,
  path9IconHeight,
  onButtonPress,
}: BoardingContentType) => {
  const welcomeTextStyle = useMemo(() => {
    return {
      ...getStyleValue("height", logoHeight),
    };
  }, [logoHeight]);

  const titleStyle = useMemo(() => {
    return {
      ...getStyleValue("display", path9IconDisplay),
      ...getStyleValue("height", path9IconHeight),
    };
  }, [path9IconDisplay, path9IconHeight]);

  return (
    <View style={styles.content}>
      <View
        style={[styles.welcomeText, styles.buttonSpaceBlock, welcomeTextStyle]}
      >
        <Text style={[styles.welcomeToFitoozoneContainer, styles.titleTypo]}>
          {welcomeToFitooZone}
        </Text>
        <Text style={[styles.title, styles.buttonFlexBox, titleStyle]}>
          {title}
        </Text>
      </View>
      <View style={styles.logo}>
        <Image style={styles.path10Icon} contentFit="cover" source={path10} />
        <Image style={styles.path9Icon} contentFit="cover" source={path9} />
      </View>
      <View style={styles.dots}>
        <Image
          style={[styles.dot1Icon, styles.iconLayout]}
          contentFit="cover"
          source={dot1}
        />
        <Image
          style={[styles.dot2Icon, styles.iconLayout]}
          contentFit="cover"
          source={dot2}
        />
        <Image
          style={[styles.dot2Icon, styles.iconLayout]}
          contentFit="cover"
          source={dot3}
        />
      </View>
      <View style={[styles.button, styles.buttonFlexBox]}>
        <Pressable
          style={[styles.button1, styles.buttonFlexBox]}
          onPress={onButtonPress}
        >
          <Text style={[styles.startTraining, styles.titleTypo]}>
            {startTraining}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_3xs,
    alignSelf: "stretch",
  },
  titleTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconLayout: {
    height: 8,
    width: 8,
    overflow: "hidden",
  },
  welcomeToFitoozoneContainer: {
    fontSize: FontSize.size_8xl,
    lineHeight: 32,
    color: Color.colorGray_200,
    alignSelf: "stretch",
  },
  title: {
    fontSize: FontSize.size_base,
    lineHeight: 22,
    color: Color.colorDarkslategray,
    display: "flex",
    height: 56,
    marginTop: 18,
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    alignSelf: "stretch",
  },
  welcomeText: {
    alignItems: "center",
  },
  path10Icon: {
    width: 13,
    height: 13,
  },
  path9Icon: {
    width: 72,
    height: 30,
    marginTop: 5,
  },
  logo: {
    marginTop: 20,
  },
  dot1Icon: {
    overflow: "hidden",
  },
  dot2Icon: {
    marginLeft: 8,
    overflow: "hidden",
  },
  dots: {
    flexDirection: "row",
    marginTop: 20,
  },
  startTraining: {
    fontSize: FontSize.size_sm,
    letterSpacing: 3,
    lineHeight: 20,
    textTransform: "uppercase",
    color: Color.rgb255255255,
    flex: 1,
  },
  button1: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.primary,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 1,
    paddingHorizontal: Padding.p_14xl,
    paddingVertical: Padding.p_xs,
    flex: 1,
    overflow: "hidden",
    flexDirection: "row",
  },
  button: {
    height: 44,
    flexDirection: "row",
    marginTop: 20,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_3xs,
    alignSelf: "stretch",
  },
  content: {
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    backgroundColor: Color.rgb255255255,
    paddingTop: Padding.p_xl,
    paddingBottom: Padding.p_6xl,
    zIndex: 1,
    marginTop: -1,
    alignItems: "center",
    alignSelf: "stretch",
  },
});

export default BoardingContent;
