import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  StatusBar,
  Pressable,
} from "react-native";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";
import { ProgressBar } from "react-native-paper";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types";

type ResultScreenRouteProp = RouteProp<RootStackParamList, "ResultScreen">;
type ResultScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "ResultScreen"
>;

interface ResultScreenProps {
  route: ResultScreenRouteProp;
  navigation: ResultScreenNavigationProp;
}

interface MealDetails {
  name: string;
  calories: number;
  carbohydrate: number;
  fat: number;
  protein: number;
}

interface MealPlan {
  [day: string]: {
    [mealTime: string]: MealDetails;
  };
}

const ResultScreen: React.FC<ResultScreenProps> = ({ navigation, route }) => {
  const [mealPlan, setMealPlan] = useState<MealPlan>({});
  const [loading, setLoading] = useState(true);
  const { clusterId } = route.params;

  useEffect(() => {
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
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error.message);
        setLoading(false);
      });
  }, [clusterId]);

  if (loading) {
    return <ActivityIndicator size="large" color={Color.primary} />;
  }

  return (
    <View style={styles.container}>
      <ScrollView >
        {Object.entries(mealPlan).map(([day, meals]) => (
          <View key={day} style={styles.dayContainer}>
            <StatusBar backgroundColor={Color.primary} />
            <Text style={styles.dayTitle}>{day}</Text>
            {Object.entries(meals).map(([mealTime, mealDetails]) => (
              <View key={mealTime} style={styles.mealContainer}>
                <Text style={styles.mealTime}>{mealTime.toUpperCase()}</Text>
                <View style={styles.mealInfo}>
                  <Text>Name: {mealDetails.name}</Text>
                  <Text>Calories: {mealDetails.calories}</Text>
                  <View style={styles.progressBarContainer}>
                    <Text>Carbs: {mealDetails.carbohydrate}g</Text>
                    <ProgressBar
                      progress={mealDetails.carbohydrate / 100}
                      color={Color.primary}
                      style={styles.progressBar}
                    />
                  </View>
                  <View style={styles.progressBarContainer}>
                    <Text>Fat: {mealDetails.fat}g</Text>
                    <ProgressBar
                      progress={mealDetails.fat / 100}
                      color={Color.primary}
                      style={styles.progressBar}
                    />
                  </View>
                  <View style={styles.progressBarContainer}>
                    <Text>Protein: {mealDetails.protein}g</Text>
                    <ProgressBar
                      progress={mealDetails.protein / 100}
                      color={Color.primary}
                      style={styles.progressBar}
                    />
                  </View>
                </View>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
      <View style={[styles.continue, styles.levelsFlexBox]}>
        <Pressable
          style={[styles.button, styles.levelsFlexBox]}
          onPress={() =>
            navigation.navigate("HomeActive", { ...route.params })
          }
        >
          <Text style={[styles.startTraining, styles.chooseGenderTypo]}>
            View Workout Plan
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  levelsFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },

  chooseGenderTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
  },

  chooseGender: {
    fontSize: FontSize.size_xl,
    color: Color.colorGray_200,
    textAlign: "center",
  },
  levels: {
    marginTop: 60,
    alignSelf: "stretch",
  },
  scrollContent: {
    zIndex: 1,
    marginTop: 33,
    flex: 1,
    alignSelf: "stretch",
  },
  startTraining: {
    fontSize: FontSize.size_mid,
    lineHeight: 20,
    color: Color.colorWhite,
  },
  button: {
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 1,
    borderRadius: Border.br_6xl,
    backgroundColor: Color.primary,
    paddingHorizontal: Padding.p_14xl,
    paddingVertical: Padding.p_xs,
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "row",
  },
  continue: {
    width: "92.05%",
    right: "3.97%",
    bottom: 0,
    left: "3.97%",
    paddingBottom: Padding.p_6xl,
    zIndex: 2,
    position: "absolute",
  },
  trainingLevel: {
    backgroundColor: Color.colorWhite,
    width: "100%",
    height: 692,
    paddingHorizontal: Padding.p_3xs,
    paddingTop: Padding.p_31xl,
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
  container: {
    flex: 1,
    padding: Padding.p_mid,
  },
  dayContainer: {
    marginBottom: Padding.p_mid,
    borderWidth: 1,
    borderColor: Color.colorGray_200,
    borderRadius: 10,
    padding: Padding.p_mid,
    backgroundColor: Color.colorWhite,
    // marginBottom: 80,
  },
  dayTitle: {
    fontSize: FontSize.size_xl,
    fontWeight: "bold",
    marginBottom: Padding.p_sm,
  },
  mealContainer: {
    marginTop: Padding.p_sm,
  },
  mealTime: {
    fontWeight: "bold",
    marginBottom: Padding.p_sm,
  },
  mealInfo: {
    padding: Padding.p_sm,
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: 10,
  },
  progressBarContainer: {
    marginTop: Padding.p_sm,
  },
  progressBar: {
    height: 10,
  },
});

export default ResultScreen;
