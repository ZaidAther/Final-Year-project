import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  View,
  Text,
  StyleSheet,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  useNavigation,
  ParamListBase,
  RouteProp,
  useRoute,
} from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";
import { RootStackParamList } from "../types";

// Import types/interfaces from the first code snippet
// type NutritionRouteProp = RouteProp<RootStackParamList, "Nutrition">;
// type NutritionNavigationProp = StackNavigationProp<
//   RootStackParamList,
//   "Nutrition"
// >;

// interface NutritionProps {
//   route: NutritionRouteProp;
//   navigation: NutritionNavigationProp;
// }

// interface MealDetails {
//   name: string;
//   calories: number;
//   carbohydrate: number;
//   fat: number;
//   protein: number;
// }
export type Scroll1Type = {
  style?: StyleProp<ViewStyle>;
  clusterId?: number | undefined;
  mealPlan?: {
    [day: string]: {
      [mealTime: string]: {
        name: string;
        calories: number;
        carbohydrate: number;
        fat: number;
        protein: number;
        image: string;
      };
    };
  };
};


// Define Scroll1 component
const Scroll1 = ({ style, clusterId, mealPlan }: Scroll1Type) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const route = useRoute<RouteProp<RootStackParamList, "ActivityActive">>();
  // const { clusterId } = route.params;

  // State variables and functions for fetching meal plan
  const [mealPlans, setMealPlan] = React.useState(mealPlan);

  // Calculate total proteins
  let totalProteins = 0;
  let totalcarbs = 0;
  let totalfat = 0;
  let totalcalories = 0;
  
  if (mealPlan) {
    Object.values(mealPlan).forEach((mealsPerDay) => {
      Object.values(mealsPerDay).forEach((meal) => {
        totalProteins += meal.protein;
        totalcarbs += meal.carbohydrate;
        totalfat += meal.fat;
        totalcalories += meal.calories;
      });
    });
  }


  return (
    <View style={[styles.scroll, style]}>
      <View style={styles.header}>
        <Text style={styles.nutrition}>Nutrition</Text>
      </View>
      <View style={[styles.tab, styles.tabSpaceBlock]}>
        <View style={styles.item}>
          <Text style={[styles.nutrition1, styles.nutritionTypo]}>
            Nutrition
          </Text>
        </View>
        <Pressable
          style={styles.item1}
          onPress={() =>
            navigation.navigate("ActivityActive", {
              ...route.params,
              mealPlan: mealPlans,
            })
          }
        >
          <Text style={[styles.nutrition1, styles.nutritionTypo]}>
            Activity
          </Text>
        </Pressable>
      </View>
      <View style={styles.section}>
        <View style={styles.chart}>
          <View style={styles.donutChart}>
            <Image
              style={styles.ovalIcon}
              contentFit="cover"
              source={require("../assets/oval1.png")}
            />
            <Image
              style={[styles.ovalIcon1, styles.textPosition]}
              contentFit="cover"
              source={require("../assets/oval1.png")}
            />
          </View>
          <View style={[styles.text, styles.textPosition]}>
            <Text style={[styles.target, styles.nutritionTypo]}>Target</Text>
            <Text style={[styles.kcal, styles.kcalTypo]}>4000 kcal</Text>
          </View>
        </View>
        <View style={[styles.goalForTheDay, styles.infoSpaceBlock]}>
          <Text style={[styles.nutritionGoalsFor, styles.nutritionTypo]}>
            Nutrition Goals for Today
          </Text>

          <View style={[styles.info, styles.infoSpaceBlock]}>
            <View style={styles.textShadowBox}>
              <Text style={[styles.protein, styles.kcalTypo]}>Protein</Text>
              <Text style={[styles.g, styles.kcalTypo]}>{totalProteins} g</Text>
            </View>
            <View style={[styles.text2, styles.textShadowBox]}>
              <Text style={[styles.kcal1, styles.kcalTypo]}>Kcal</Text>
              <Text style={[styles.g, styles.kcalTypo]}>{totalcalories} kcal</Text>
            </View>
            <View style={[styles.text3, styles.textShadowBox]}>
              <Text style={[styles.kcal1, styles.kcalTypo]}>Fat</Text>
              <Text style={[styles.g, styles.kcalTypo]}>{totalfat} g</Text>
            </View>
            <View style={[styles.text4, styles.textShadowBox]}>
              <Text style={[styles.carbs, styles.kcalTypo]}>Carbs</Text>
              <Text style={[styles.g, styles.kcalTypo]}>{totalcarbs} g</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.allMeals, styles.tabSpaceBlock]}>
        <View style={styles.allMeals1}>
          <Text style={[styles.nutritionGoalsFor, styles.nutritionTypo]}>
            All Meals
          </Text>
        </View>
        {mealPlans &&
          Object.entries(mealPlans).map(([day, meals]) => (
            <View key={day}>
              {Object.entries(meals).map(([mealTime, details]) => (
                <Pressable
                  style={styles.itemShadowBox}
                  onPress={() =>
                    navigation.navigate("FoodDetails", {
                      ...route.params,
                      mealDetails: details,
                    })
                  }
                  key={mealTime}
                >
                  <Image
                    style={styles.image}
                    contentFit="cover"
                    source={{ uri: details.image }}
                  />
                  <View style={[styles.info1, styles.infoFlexBox]}>
                    <View style={styles.text5}>
                      <Text
                        style={[
                          styles.mixedFruitOats,
                          styles.vegetableSoupTypo,
                        ]}
                        adjustsFontSizeToFit
                      >
                        {details.name}
                      </Text>
                      <Text style={[styles.kcal3, styles.kcalTypo]}>
                        {mealTime}
                      </Text>
                    </View>
                    <Image
                      style={styles.icon}
                      contentFit="cover"
                      source={require("../assets/icon.png")}
                    />
                  </View>
                </Pressable>
              ))}
            </View>
          ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mealImage: {
    width: 60,
    height: 60,
    borderRadius: Border.br_8xs,
  },
  tabSpaceBlock: {
    marginTop: 30,
    alignSelf: "stretch",
  },
  nutritionTypo: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: 1,
  },
  textPosition: {
    zIndex: 1,
    // left: "50%",
    position: "absolute",
  },
  kcalTypo: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: 1,
  },
  infoSpaceBlock: {
    marginTop: 22,
    alignSelf: "stretch",
  },
  textShadowBox: {
    minWidth: 60,
    height: 60,
    backgroundColor: Color.rgb255255255,
    borderRadius: Border.br_8xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  infoFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  vegetableSoupTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: 1,
  },
  nutrition: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: 1,
  },
  header: {
    height: 40,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 0,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  nutrition1: {
    textAlign: "center",
    color: Color.colorSlategray_100,
  },
  item: {
    borderColor: Color.primary,
    paddingHorizontal: Padding.p_3xl,
    minWidth: 100,
    paddingVertical: Padding.p_4xs,
    borderWidth: 1,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    backgroundColor: Color.rgb255255255,
    borderRadius: Border.br_8xs,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  item1: {
    height: 41,
    paddingHorizontal: Padding.p_7xl,
    marginLeft: 17,
    borderColor: Color.colorWhitesmoke,
    minWidth: 100,
    paddingVertical: Padding.p_4xs,
    overflow: "hidden",
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.rgb255255255,
    borderRadius: Border.br_8xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  tab: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  ovalIcon: {
    width: 180,
    height: 180,
    zIndex: 0,
  },
  ovalIcon1: {
    marginTop: 86,
    marginLeft: -86,
    top: "50%",
    width: 171,
    height: 171,
    display: "none",
  },
  donutChart: {
    zIndex: 0,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  target: {
    textAlign: "center",
    color: Color.colorGray_100,
    alignSelf: "stretch",
  },
  kcal: {
    marginTop: 9,
    textAlign: "center",
    color: Color.colorSlategray_100,
    alignSelf: "stretch",
  },
  text: {
    marginLeft: -28.5,
    top: 69,
    overflow: "hidden",
    alignItems: "center",
  },
  chart: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  nutritionGoalsFor: {
    textAlign: "left",
    color: Color.colorGray_100,
  },
  protein: {
    textAlign: "left",
    color: Color.colorGray_100,
  },
  g: {
    marginTop: 3,
    textAlign: "center",
    color: Color.colorSlategray_100,
  },
  kcal1: {
    textAlign: "center",
    color: Color.colorGray_100,
  },
  text2: {
    marginLeft: 15,
  },
  text3: {
    marginLeft: 15,
  },
  carbs: {
    textAlign: "right",
    color: Color.colorGray_100,
  },
  text4: {
    marginLeft: 15,
  },
  info: {
    flexDirection: "row",
  },
  goalForTheDay: {
    justifyContent: "center",
  },
  section: {
    paddingHorizontal: Padding.p_sm,
    paddingVertical: 13,
    backgroundColor: Color.rgb255255255,
    borderRadius: Border.br_8xs,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  allMeals1: {
    padding: Padding.p_3xs,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    backgroundColor: Color.colorSteelblue_100,
    width: 68,
    height: 68,
    borderRadius: Border.br_8xs,
  },
  mixedFruitOats: {
    display: "flex",
    width: 121,
    // undefined: "",
    alignItems: "center",
  },
  kcal3: {
    marginTop: 7,
    color: Color.colorSlategray_100,
    textAlign: "left",
  },
  text5: {
    height: "100%",
    overflow: "hidden",
    flex: 1,
  },
  icon: {
    width: 12,
    height: 10,
  },
  info1: {
    marginLeft: 19,
  },
  itemShadowBox: {
    marginTop: 15,
    padding: Padding.p_3xs,
    borderColor: Color.colorWhitesmoke,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.rgb255255255,
    borderRadius: Border.br_8xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  vegetableSoup: {
    width: 125,
  },
  text6: {
    overflow: "hidden",
    flex: 1,
  },
  info2: {
    marginLeft: 15,
  },
  maecenasTortorFood: {
    width: 176,
  },
  text7: {
    justifyContent: "center",
    flex: 1,
  },
  allMeals: {
    overflow: "hidden",
  },
  scroll: {
    paddingBottom: Padding.p_61xl,
    alignItems: "center",
    flex: 1,
    alignSelf: "stretch",
  },
});

export default Scroll1;
