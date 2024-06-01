import React, { useEffect, useState, Component } from "react";
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import Navigations from "../components/Navigation";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types";

type WeightInputScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "WeightInputScreen"
>;

const dataSource = ["1", "2", "3", "4", "5", "6"];

const WeightInputScreen: React.FC = () => {
  const navigation = useNavigation<WeightInputScreenNavigationProp>();
  const route = useRoute<RouteProp<RootStackParamList, "WeightInputScreen">>();
  const [weight, setWeight] = useState<string>("");
  const [selectedLanguage, setSelectedLanguage] = useState();

  const handleNext = () => {
    // Validate weight input
    const parsedWeight = parseFloat(weight);
    if (!parsedWeight || isNaN(parsedWeight)) {
      alert("Please enter a valid weight.");
      return;
    }
    navigation.navigate("HeightInputScreen", {
      ...route.params,
      weight: parsedWeight,
    });
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={[styles.selectWeight, styles.scrollFlexBox]}>
          <View style={[styles.scroll, styles.scrollFlexBox]}>
            <Navigations
              step2Of5="Step 1 of 8"
              showStep2Of
              showSkip
              navigationPosition="unset"
              navigationAlignSelf="stretch"
              step2OfColor="#035e7b"
              step2OfMarginLeft="unset"
              skipMarginLeft="unset"
              onBackButtonPress={() => navigation.goBack()}
            />
            <Text style={[styles.selectHeight, styles.selectHeightTypo]}>
              Select weight ⚖️
            </Text>
            <View style={styles.button1}>
              <Text style={styles.buttontext}>KG</Text>
            </View>
            <View
              style={[
                styles.heightInput,
                styles.continueFlexBox,
                styles.pickerContainer,
              ]}
            >
              <Picker
                selectedValue={weight}
                onValueChange={(itemValue, itemIndex) => setWeight(itemValue)}
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
              <Text style={[styles.startTraining, styles.selectHeightTypo]}>
                Continue
              </Text>
            </Pressable>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
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
  scrollSpaceBlock: {
    marginTop: 19,
    alignSelf: "stretch",
  },
  scrollScrollViewContent: {
    flexDirection: "column",
    paddingBottom: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  itemText: {
    fontSize: 24,
    textAlign: "center",
    color: Color.colorGray_100,
  },
  pickerItem: {
    height: 60,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    color: Color.colorSlategray_100,
  },
  scrollFlexBox: {
    flex: 1,
    alignItems: "center",
  },
  selectHeightTypo: {
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
  cmTypo: {
    marginTop: 10,
    textAlign: "left",
    color: Color.colorGray_100,
    lineHeight: 22,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
  },
  selectHeight: {
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
    paddingBottom: Padding.p_6xl,
    zIndex: 2,
    position: "absolute",
  },
  selectWeight: {
    width: "100%",
    height: 692,
    paddingHorizontal: Padding.p_3xs,
    paddingTop: Padding.p_31xl,
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default WeightInputScreen;
