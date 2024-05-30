import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Scroll2 from "../components/Scroll2";
import { Color, Padding } from "../GlobalStyles";
import { RouteProp, useRoute } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types";

// interface MealDetails {
//   name: string;
//   calories: number;
//   carbohydrate: number;
//   fat: number;
//   protein: number;
//   image: string;
// }

// interface MealPlan {
//   [day: string]: {
//     [mealTime: string]: MealDetails;
//   };
// }

type FoodDetailsRouteProp = RouteProp<RootStackParamList, "FoodDetails">;


// type FoodDetailsProps = {
//   route: FoodDetailsRouteProp;
// };

const FoodDetails = () => {
  const route = useRoute<RouteProp<RootStackParamList, "FoodDetails">>();
  const { mealDetails } = route.params;
  console.log("food", mealDetails);
  const [flatListFlatListData, setFlatListFlatListData] = useState([
    <Scroll2  mealDetails = {mealDetails}/>,
  ]);

  return (
    <View style={styles.fooddetails}>
      <FlatList
        style={styles.flatList}
        data={flatListFlatListData}
        renderItem={({ item }) => item}
        contentContainerStyle={styles.flatListFlatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flatListFlatListContent: {
    flexDirection: "column",
  },
  flatList: {
    alignSelf: "stretch",
    flex: 1,
  },
  fooddetails: {
    backgroundColor: Color.rgb255255255,
    width: "100%",
    height: 896,
    overflow: "hidden",
    alignItems: "center",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_31xl,
    flex: 1,
  },
});

export default FoodDetails;