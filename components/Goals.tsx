import React, { useMemo } from "react";
import { StyleSheet, View, Text, Image, ImageSourcePropType, Pressable } from "react-native";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

type GoalsType = {
  title: string;
  txt: string;
  propBorderColor: string;
  onPress: () => void;
  isSelected: boolean;
  dumbbell?: any;
};

const Goals: React.FC<GoalsType> = ({
  dumbbell,
  title = "",
  txt = "",
  propBorderColor = Color.primary,
  onPress,
  isSelected,
}) => {
  const goalStyle = useMemo(() => {
    return {
      backgroundColor: isSelected ? propBorderColor : Color.colorWhite,
      borderColor: isSelected ? propBorderColor : "#e5e9ef",
      borderWidth: isSelected ? 2 : 1,
    };
  }, [propBorderColor, isSelected]);

  const titleStyle = useMemo(() => {
    return {
      color: isSelected ? Color.colorWhite : Color.colorGray_100,
      // fontWeight: isSelected ? "700" : "500",
    };
  }, [isSelected]);

  return (
    <Pressable onPress={onPress} style={[styles.goal, goalStyle]}>
      <View style={styles.icon}>
        <Image style={styles.dumbbellIcon} source={dumbbell} />
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goal: {
    height: 80,
    paddingHorizontal: Padding.p_mini,
    // paddingVertical: Padding.p_12xl,
    // paddingTop: 20,
    
    borderRadius: Border.br_5xs,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 1,
    elevation: 1,
    shadowOpacity: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
  icon: {

    alignItems: "center",
    flexDirection: "row",
  },
  dumbbellIcon: {
    width: 45,
    height: 45,
    resizeMode: "contain",
    marginRight: 15,

  },
  title: {
    zIndex: 2,
    fontFamily: FontFamily.poppins,
    flex: 1,
    textAlign: "left",
    fontSize: FontSize.size_base,
    color: Color.colorGray_100,
    fontWeight: "400",
    height: "100%",
  },
});

export default Goals;
