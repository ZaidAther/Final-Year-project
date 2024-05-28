import React, { useMemo } from "react";
import { StyleSheet, View, Text, Image, ImageSourcePropType, Pressable } from "react-native";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

export type GoalsType = {
  dumbbell?: ImageSourcePropType;
  title?: string;
  txt?: string;
  propBorderColor?: string;
  onPress?: () => void;
};

const Goals: React.FC<GoalsType> = ({
  dumbbell,
  title = "",
  txt = "",
  propBorderColor = Color.primary,
  onPress,
}) => {
  const goalStyle = useMemo(() => {
    return {
      backgroundColor: propBorderColor,
    };
  }, [propBorderColor]);

  return (
    <Pressable onPress={onPress} style={[styles.goal, goalStyle]}>
      <View style={styles.icon}>
        <Image style={styles.dumbbellIcon} source={dumbbell} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </Pressable >
  );
};

const styles = StyleSheet.create({
  goal: {
    backgroundColor: Color.colorWhite,

    height: 88,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_12xl,
    borderRadius: Border.br_5xs,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2,
    elevation: 5,
    shadowOpacity: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    width: "100%",

  },
  icon: {
    width: 56,
    height: 56,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorGray_200,
    marginRight: 10,
  },
  dumbbellIcon: {
    width: "50%",
    height: "50%",
    resizeMode: "contain",
  },
  title: {
    flex: 1,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppins,
    color: Color.colorGray_200,
  },

});

export default Goals;
