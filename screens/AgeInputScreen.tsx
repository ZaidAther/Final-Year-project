import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import Navigations from "../components/Navigation";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import { Picker } from "@react-native-picker/picker";

type HeightInputScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "AgeInputScreen"
>;

const AgeInputScreen: React.FC = () => {
  const navigation = useNavigation<HeightInputScreenNavigationProp>();
  const route = useRoute<RouteProp<RootStackParamList, "AgeInputScreen">>();
  const [age, setage] = useState<string>("");

  const handleNext = () => {
    // Validate height input
    const parsedage = parseFloat(age);
    if (!parsedage || isNaN(parsedage)) {
      alert("Please enter a valid age.");
      return;
    }
    navigation.navigate("Gender", { ...route.params, age: parseInt(age) });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={[styles.selectHeight, styles.scrollFlexBox]}>
        <View style={[styles.scroll, styles.scrollFlexBox]}>
          <Navigations
            step2Of5="Step 3 of 8"
            showStep2Of
            showSkip
            navigationPosition="unset"
            navigationAlignSelf="stretch"
            step2OfColor="#035e7b"
            step2OfMarginLeft="unset"
            skipMarginLeft="unset"
            onBackButtonPress={() => navigation.goBack()}
          />
          <Text style={[styles.selectHeight1, styles.selectHeight1Typo]}>
            Enter Your Age 👤
          </Text>
          <View style={styles.button1}>
            <Text style={styles.buttontext}>Y/O</Text>
          </View>
          <View
            style={[
              styles.heightInput,
              styles.continueFlexBox,
              styles.pickerContainer,
            ]}
          >
            <Picker
              selectedValue={age}
              onValueChange={(itemValue, itemIndex) => setage(itemValue)}
              style={styles.picker}
            >
              {Array.from({ length: 200 }, (_, i) => i + 1).map((value) => (
                <Picker.Item
                  key={value}
                  label={value.toString()}
                  value={value.toString()}
                />
              ))}
            </Picker>
          </View>
        </View>
        <View style={[styles.continue, styles.continueFlexBox]}>
          <Pressable
            style={[styles.button, styles.inputShadowBox]}
            onPress={handleNext}
          >
            <Text style={[styles.startTraining, styles.selectHeight1Typo]}>
              Continue
            </Text>
          </Pressable>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
  
};

const styles = StyleSheet.create({
  pickerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  picker: {
    flex: 1,
    height: 64,
  },
  scrollFlexBox: {
    flex: 1,
    alignItems: "center",
  },
  selectHeight1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
  },
  continueFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  inputShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    justifyContent: "center",
    alignItems: "center",
  },
  button1: {
    marginTop: 20,
    backgroundColor: Color.primary,
    width: 125,
    height: 40,
    borderRadius: 10,
  },
  buttontext: {
    textAlign: "center",
    marginTop: 8,
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
  },
  selectHeight1: {
    marginTop: 90,
    fontSize: FontSize.size_xl,
    fontWeight: "bold",
    color: Color.colorSlategray_100,
    textAlign: "center",
  },
  input: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowRadius: 4,
    elevation: 4,
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    borderColor: Color.colorGray_400,
    borderWidth: 1,
    width: 97,
    height: 64,
    backgroundColor: Color.colorWhite,
  },
  cm: {
    fontSize: FontSize.size_base,
    lineHeight: 22,
    color: Color.colorGray_100,
    textAlign: "left",
    marginTop: 10,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
  },
  heightInput: {
    marginTop: 60,
  },
  scroll: {
    zIndex: 1,
    marginTop: 33,
    alignSelf: "stretch",
    alignItems: "center",
  },
  startTraining: {
    fontSize: FontSize.size_mid,
    lineHeight: 20,
    color: Color.colorWhite,
  },
  button: {
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowRadius: 5,
    elevation: 5,
    borderRadius: Border.br_6xl,
    backgroundColor: Color.primary,
    paddingHorizontal: Padding.p_14xl,
    paddingVertical: Padding.p_xs,
    alignSelf: "stretch",
    flexDirection: "row",
    overflow: "hidden",
  },
  continue: {
    width: "92.05%",
    right: "4.1%",
    bottom: 0,
    left: "3.85%",
    height: 69,
    paddingBottom: Padding.p_6xl,
    zIndex: 2,
    position: "absolute",
  },
  selectHeight: {
    width: "100%",
    height: 692,
    paddingHorizontal: Padding.p_3xs,
    paddingTop: Padding.p_31xl,
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default AgeInputScreen;
