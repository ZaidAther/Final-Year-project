import React, { useMemo } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

export type FooterType = {
  homeActive?: ImageSourcePropType;
  training?: ImageSourcePropType;
  activity?: ImageSourcePropType;
  profile?: ImageSourcePropType;

  /** Style props */
  propBottom?: number | string;
  propColor?: string;
  propColor1?: string;
  propColor2?: string;

  /** Action props */
  onHomePress?: () => void;
  onTrainingPress?: () => void;
  onActivityPress?: () => void;
  onProfilePress?: () => void;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Footer = ({
  homeActive,
  training,
  activity,
  profile,
  propBottom,
  propColor,
  propColor1,
  propColor2,
  onHomePress,
  onTrainingPress,
  onActivityPress,
  onProfilePress,
}: FooterType) => {
  const navBar1Style = useMemo(() => {
    return {
      ...getStyleValue("bottom", propBottom),
    };
  }, [propBottom]);

  const home1Style = useMemo(() => {
    return {
      ...getStyleValue("color", propColor),
    };
  }, [propColor]);

  const workoutsStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor1),
    };
  }, [propColor1]);

  const activity2Style = useMemo(() => {
    return {
      ...getStyleValue("color", propColor2),
    };
  }, [propColor2]);

  return (
    <View style={[styles.navBar, navBar1Style]}>
      <View style={[styles.home, styles.homeFlexBox]}>
        <Pressable style={styles.homeFlexBox} onPress={onHomePress}>
          <Image
            style={styles.homeActiveIcon}
            contentFit="cover"
            source={homeActive}
          />
          <Text style={[styles.home2, styles.home2Typo, home1Style]}>Home</Text>
        </Pressable>
      </View>
      <Pressable style={styles.homeFlexBox} onPress={onTrainingPress}>
        <Image
          style={[styles.trainingIcon, styles.iconLayout]}
          contentFit="cover"
          source={training}
        />
        <Text style={[styles.workouts, styles.home2Typo, workoutsStyle]}>
          Workouts
        </Text>
      </Pressable>
      <Pressable style={styles.homeFlexBox} onPress={onActivityPress}>
        <Image
          style={[styles.trainingIcon, styles.iconLayout]}
          contentFit="cover"
          source={activity}
        />
        <Text style={[styles.activity1, styles.home2Typo, activity2Style]}>
          Activity
        </Text>
      </Pressable>
      <Pressable style={styles.homeFlexBox} onPress={onProfilePress}>
        <Image
          style={[styles.profileIcon, styles.iconLayout]}
          contentFit="cover"
          source={profile}
        />
        <Text style={[styles.activity1, styles.home2Typo]}>Profile</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  homeFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  home2Typo: {
    marginTop: 9,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
  },
  iconLayout: {
    height: 24,
    overflow: "hidden",
  },
  homeActiveIcon: {
    height: 19,
    width: 24,
  },
  home2: {
    color: Color.primary,
  },
  home: {
    flexDirection: "row",
  },
  trainingIcon: {
    width: 24,
  },
  workouts: {
    color: Color.tertiaryColor,
  },
  activity1: {
    color: Color.colorDarkgray_100,
  },
  profileIcon: {
    width: 19,
  },
  navBar: {
    position: "absolute",
    width: "100%",
    // right: "0%",
    bottom: 0,
    // left: "0%",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorWhite,
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_26xl,
    paddingVertical: Padding.p_3xs,
    zIndex: 2,
    flexDirection: "row",
    overflow: "hidden",
  },
});

export default Footer;
