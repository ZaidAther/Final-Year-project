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

export type NavBarType = {
  homeActive?: ImageSourcePropType;
  training?: ImageSourcePropType;
  activity?: ImageSourcePropType;
  profile?: ImageSourcePropType;

  /** Style props */
  navBarRight?: number | string;
  navBarBottom?: number | string;
  navBarLeft?: number | string;
  homeColor?: string;
  trainingMarginLeft?: number | string;
  activityMarginLeft?: number | string;
  activityColor?: string;
  profileMarginLeft?: number | string;
  profileColor?: string;

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
const NavBar = ({
  homeActive,
  training,
  activity,
  profile,
  navBarRight,
  navBarBottom,
  navBarLeft,
  homeColor,
  trainingMarginLeft,
  activityMarginLeft,
  activityColor,
  profileMarginLeft,
  profileColor,
  onHomePress,
  onTrainingPress,
  onActivityPress,
  onProfilePress,
}: NavBarType) => {
  const navBarStyle = useMemo(() => {
    return {
      ...getStyleValue("right", navBarRight),
      ...getStyleValue("bottom", navBarBottom),
      ...getStyleValue("left", navBarLeft),
    };
  }, [navBarRight, navBarBottom, navBarLeft]);

  const homeStyle = useMemo(() => {
    return {
      ...getStyleValue("color", homeColor),
    };
  }, [homeColor]);

  const trainingStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", trainingMarginLeft),
    };
  }, [trainingMarginLeft]);

  const activityStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", activityMarginLeft),
    };
  }, [activityMarginLeft]);

  const activity1Style = useMemo(() => {
    return {
      ...getStyleValue("color", activityColor),
    };
  }, [activityColor]);

  const profileStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", profileMarginLeft),
    };
  }, [profileMarginLeft]);

  const profile1Style = useMemo(() => {
    return {
      ...getStyleValue("color", profileColor),
    };
  }, [profileColor]);

  return (
    <View style={[styles.navBar, styles.homeFlexBox, navBarStyle]}>
      <View style={[styles.home, styles.homeFlexBox]}>
        <Pressable style={styles.homeFlexBox} onPress={onHomePress}>
          <Image
            style={styles.homeActiveIcon}
            contentFit="cover"
            source={homeActive}
          />
          <Text style={[styles.home2, styles.home2Typo, homeStyle]}>Home</Text>
        </Pressable>
      </View>
      <Pressable
        style={[styles.training, styles.homeFlexBox, trainingStyle]}
        onPress={onTrainingPress}
      >
        <Image
          style={[styles.trainingIcon, styles.iconLayout]}
          contentFit="cover"
          source={training}
        />
        <Text style={[styles.workouts, styles.home2Typo]}>Workouts</Text>
      </Pressable>
      <Pressable
        style={[styles.training, styles.homeFlexBox, activityStyle]}
        onPress={onActivityPress}
      >
        <Image
          style={[styles.trainingIcon, styles.iconLayout]}
          contentFit="cover"
          source={activity}
        />
        <Text style={[styles.workouts, styles.home2Typo, activity1Style]}>
          Activity
        </Text>
      </Pressable>
      <Pressable
        style={[styles.training, styles.homeFlexBox, profileStyle]}
        onPress={onProfilePress}
      >
        <Image
          style={[styles.profileIcon, styles.iconLayout]}
          contentFit="cover"
          source={profile}
        />
        <Text style={[styles.workouts, styles.home2Typo, profile1Style]}>
          Profile
        </Text>
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
    alignItems: "center",
  },
  trainingIcon: {
    width: 24,
  },
  workouts: {
    color: Color.colorDarkgray_100,
  },
  training: {
    marginLeft: 51,
  },
  profileIcon: {
    width: 19,
  },
  navBar: {
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
    paddingHorizontal: Padding.p_26xl,
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
});

export default NavBar;
