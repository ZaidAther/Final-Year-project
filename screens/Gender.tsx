import React, { useState } from "react";
import { View, Text, TouchableHighlight, StyleSheet, Pressable, ScrollView } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../types";
import Navigations from "../components/Navigation";
import { Color, FontSize, Border, Padding, FontFamily } from "../GlobalStyles";
import { color } from "@rneui/base";

type GenderScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Gender'>;
type GenderScreenRouteProp = RouteProp<RootStackParamList, 'Gender'>;

type Props = {
  navigation: GenderScreenNavigationProp;
  route: GenderScreenRouteProp;
};

const Gender: React.FC<Props> = ({ route }) => {
  const navigation = useNavigation<GenderScreenNavigationProp>();
  const [gender, setGender] = useState("");
  console.log(route.params.age);

  const handlePress = (selectedGender: string) => {
    setGender(selectedGender);
  };

  const handleNext = () => {
    if (gender.trim().toLowerCase() !== "male" && gender.trim().toLowerCase() !== "female") {
      alert("Please select a valid gender (Male/Female).");
      return;
    }
    navigation.navigate("Goal", {
      ...route.params,
      gender: gender.trim().toLowerCase(),
    });
  };

  return (
    <View style={[styles.gender, styles.genderFlexBox]}>
      <ScrollView
        style={[styles.scrollContent, styles.genderFlexBox]}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContentScrollViewContent}
      >
        <Navigations
          step2Of5="Step 1 of 8"
          showStep2Of
          showSkip
          navigationPosition="unset"
          navigationAlignSelf="stretch"
          step2OfColor="#2f548d"
          step2OfMarginLeft="unset"
          skipMarginLeft="unset"
          onBackButtonPress={() => navigation.goBack()}
        />
        <Text style={[styles.chooseGender, styles.chooseGenderTypo]}>
          Choose gender
        </Text>
        <View style={[styles.genders, styles.buttonFlexBox]}>
          <TouchableHighlight
            style={[styles.iconFlexBox, gender === "male" && styles.selectedGender]}
            underlayColor={Color.primary}
            onPress={() => handlePress("male")}
          >
            <Text
              style={[
                styles.text,
                gender === "male" && styles.selectedText,
              ]}
            >
              👨 Male
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.iconFlexBox, gender === "female" && styles.selectedGender]}
            underlayColor={Color.primary}
            onPress={() => handlePress("female")}
          >
            <Text
              style={[
                styles.text,
                gender === "female" && styles.selectedText,
              ]}
            >
              👩 Female
            </Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
      <View style={[styles.continue, styles.buttonFlexBox]}>
        <Pressable
          style={[styles.button, styles.buttonFlexBox]}
          onPress={handleNext}
        >
          <Text style={[styles.startTraining, styles.chooseGenderTypo]}>
            Continue
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconFlexBox: {
    backgroundColor: Color.colorWhite,
    width: "100%",
    paddingVertical: 30,
    paddingHorizontal: 15,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 1,
    elevation: 1,
    shadowOpacity: 1,
  },

  text: {
    fontFamily: FontFamily.poppins,
    fontWeight: "400",
    color: Color.colorGray_100,
    flex: 1,
    fontSize: FontSize.size_base,
    lineHeight: 20,
    textAlign: "left",
    width: "100%",
  },

  selectedGender: {
    backgroundColor: Color.primary,
  },
  selectedText: {
    color: Color.colorWhitesmoke_100,
  },
  scrollContentScrollViewContent: {
    flexDirection: "column",
    paddingBottom: 80,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  genderFlexBox: {
    flex: 1,
  },
  chooseGenderTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    fontWeight: "400",
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  chooseGender: {
    fontSize: FontSize.size_mid,
    lineHeight: 32,
    color: Color.colorGray_200,
    marginTop: 60,
  },
  genders: {
    marginTop: 60,
    alignSelf: "stretch",
  },
  scrollContent: {
    zIndex: 1,
    marginTop: 33,
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
    flexDirection: "row",
    overflow: "hidden",
  },
  continue: {
    width: "100%",
    bottom: 0,
    paddingBottom: Padding.p_6xl,
    zIndex: 2,
    position: "absolute",
  },
  gender: {
    backgroundColor: Color.colorWhite,
    width: "100%",
    height: 692,
    paddingHorizontal: Padding.p_3xs,
    paddingTop: Padding.p_31xl,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

export default Gender;
