import React, { useState } from "react";
import { View, FlatList, StyleSheet, Text, Pressable } from "react-native";
import Status1 from "../components/Status1";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase, RouteProp, useRoute } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";
import { RootStackParamList } from "../types";



const ActivityActive = () => {
  const route = useRoute<RouteProp<RootStackParamList, "ActivityActive">>();
  // console.log("screenshot", route.params)
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [flatListFlatListData, setFlatListFlatListData] = useState([
    <Status1/>,
  ]);

  return (
    <View style={[styles.activityActive, styles.navBarLayout]}>
      <FlatList
        style={styles.flatList}
        data={flatListFlatListData}
        renderItem={({ item }) => item}
        contentContainerStyle={styles.flatListFlatListContent}
      />
      <View style={[styles.navBar, styles.navBarLayout]}>
        <View style={[styles.home, styles.homeFlexBox]}>
          <Pressable
            style={styles.homeFlexBox}
            onPress={() => navigation.navigate("HomeActive", {...route.params})}
          >
            <Image
              style={styles.homeIcon}
              contentFit="cover"
              source={require("../assets/home.png")}
            />
            <Text style={[styles.home2, styles.home2Typo]}>Home</Text>
          </Pressable>
        </View>
        <Pressable
          style={styles.homeFlexBox}
          onPress={() => navigation.navigate("Workouts", {...route.params})}
        >
          <Image
            style={[styles.trainingIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/training1.png")}
          />
          <Text style={[styles.home2, styles.home2Typo]}>Workouts</Text>
        </Pressable>
        <Pressable
          style={styles.homeFlexBox}
          onPress={() => navigation.navigate("ActivityActive", {...route.params, mealPlan: route.params.mealPlan})}
        >
          <Image
            style={[styles.trainingIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/activity1.png")}
          />
          <Text style={[styles.activity1, styles.home2Typo]}>Activity</Text>
        </Pressable>
        <Pressable
          style={styles.homeFlexBox}
          onPress={() => navigation.navigate("ProfileActive" , {...route.params})}
        >
          <Image
            style={[styles.profileIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/profile.png")}
          />
          <Text style={[styles.home2, styles.home2Typo]}>Profile</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flatListFlatListContent: {
    flexDirection: "column",
  },
  navBarLayout: {
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.rgb255255255,
  },
  homeFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  home2Typo: {
    marginTop: 9,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
  },
  iconLayout: {
    height: 24,
    overflow: "hidden",
  },
  flatList: {
    alignSelf: "stretch",
    zIndex: 0,
    flex: 1,
  },
  homeIcon: {
    height: 19,
    width: 24,
  },
  home2: {
    color: Color.colorDarkgray_100,
  },
  home: {
    flexDirection: "row",
  },
  trainingIcon: {
    width: 24,
  },
  activity1: {
    color: Color.primary,
  },
  profileIcon: {
    width: 19,
  },
  navBar: {
    position: "absolute",
    right: "0%",
    bottom: 0,
    left: "0%",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderRadius: Border.br_mini,
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_26xl,
    paddingVertical: Padding.p_3xs,
    zIndex: 1,
    flexDirection: "row",
  },
  activityActive: {
    height: 576,
    paddingHorizontal: Padding.p_3xs,
    paddingTop: Padding.p_31xl,
    flex: 1,
  },
});

export default ActivityActive;