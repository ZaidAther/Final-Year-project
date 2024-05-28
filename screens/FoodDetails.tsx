import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Scroll2 from "../components/Scroll2";
import { Color, Padding } from "../GlobalStyles";

const FoodDetails = () => {
  const [flatListFlatListData, setFlatListFlatListData] = useState([
    <Scroll2 />,
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