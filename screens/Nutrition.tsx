import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View, Pressable, ActivityIndicator } from "react-native";
import Scroll1 from "../components/Scroll1";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase, RouteProp } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";
import { RootStackParamList } from "../types";



type NutritionRouteProp = RouteProp<RootStackParamList, "Nutrition">;
type NutritionNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Nutrition"
>;

interface NutritionProps {
  route: NutritionRouteProp;
  navigation: NutritionNavigationProp;
}

interface MealDetails {
  name: string;
  calories: number;
  carbohydrate: number;
  fat: number;
  protein: number;
  image: string;
}

interface MealPlan {
  [day: string]: {
    [mealTime: string]: MealDetails;
  };
}


const Nutrition: React.FC<NutritionProps> = ({ navigation, route }) => {
  const [mealPlan, setMealPlan] = useState<MealPlan>(route.params.mealPlan);
  const { clusterId } = route.params;
  const [loading, setLoading] = useState(true);
  // console.log(mealPlan, clusterId)
  const [flatListFlatListData, setFlatListFlatListData] = useState([
    <Scroll1 clusterId={clusterId} mealPlan={mealPlan} />,
  ]);

  useEffect(() => {
    console.log("Nutrition:",route.params)
    if (!mealPlan) {
      fetch("http://192.168.1.113:5000/recommend_meal_plan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cluster_id: clusterId }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setMealPlan(data);
          setFlatListFlatListData([<Scroll1 clusterId={clusterId} mealPlan={data} />]);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error:", error.message);
          setLoading(false);
        });
    } else {
      setFlatListFlatListData([<Scroll1 clusterId={clusterId} mealPlan={mealPlan} />]);
      setLoading(false);
    }
  }, [clusterId, mealPlan]);

  if (loading) {
    return <ActivityIndicator size="large" color={Color.primary} />;
  }

  return (
    <View style={[styles.nutrition, styles.navBarBg]}>
      <FlatList
        style={styles.flatList}
        data={flatListFlatListData}
        renderItem={({ item }) => item}
        contentContainerStyle={styles.flatListFlatListContent}
      />
      <View style={[styles.navBar, styles.navBarBg]}>
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
          onPress={() => navigation.navigate("Workouts", {...route.params, mealPlan: mealPlan, clusterId: clusterId})}
        >
          <Image
            style={[styles.trainingIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/training.png")}
          />
          <Text style={[styles.home2, styles.home2Typo]}>Workouts</Text>
        </Pressable>
        <Pressable
          style={styles.homeFlexBox}
          onPress={() => navigation.navigate("ActivityActive", {...route.params})}
        >
          <Image
            style={[styles.trainingIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/activity.png")}
          />
          <Text style={[styles.activity1, styles.home2Typo]}>Activity</Text>
        </Pressable>
        <Pressable
          style={styles.homeFlexBox}
          onPress={() => navigation.navigate("ProfileActive", {...route.params})}
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
  navBarBg: {
    overflow: "hidden",
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
    width: "98.55%",
    right: "0.72%",
    bottom: 0,
    left: "0.72%",
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
  nutrition: {
    width: "100%",
    height: 813,
    paddingHorizontal: Padding.p_3xs,
    paddingTop: Padding.p_31xl,
    flex: 1,
  },
});

export default Nutrition;