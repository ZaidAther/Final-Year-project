import React, { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, ScrollView, Pressable, Text } from "react-native";
import { Datepicker as RNKDatepicker } from "@ui-kitten/components";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import StatusBars from "../components/StatusBars";
import Navigations from "../components/Navigation";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const Birthday = () => {
  const [dateDatePicker, setDateDatePicker] = useState(undefined);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.birthday}>
      <View style={styles.statusBar}>
        <StatusBars
          barsStatusBarsiPhoneLight={require("../assets/barsstatus-barsiphonelight.png")}
          barsStatusBarsiPhoneLightHeight={50}
          barsStatusBarsiPhoneLightOverflow="hidden"
          barsStatusBarsiPhoneLightFlex={1}
          barsStatusBarsiPhoneLightWidth="unset"
        />
      </View>
      <ScrollView
        style={[styles.scrollContent, styles.buttonFlexBox1]}
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
          Select birth date
        </Text>
        <RNKDatepicker
          style={styles.date}
          date={dateDatePicker}
          onSelect={setDateDatePicker}
          status="basic"
          controlStyle={styles.dateDatePickerValue}
        />
      </ScrollView>
      <View style={[styles.continue, styles.buttonFlexBox]}>
        <Pressable
          style={[styles.button, styles.buttonFlexBox]}
          onPress={() => navigation.navigate("SelectHeight")}
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
  dateDatePickerValue: {},
  scrollContentScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  buttonFlexBox1: {
    alignSelf: "stretch",
    overflow: "hidden",
  },
  chooseGenderTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  statusBar: {
    top: 0,
    right: 0,
    width: 390,
    height: 50,
    justifyContent: "flex-end",
    zIndex: 0,
    flexDirection: "row",
    position: "absolute",
    alignItems: "center",
  },
  chooseGender: {
    fontSize: FontSize.size_xl,
    lineHeight: 32,
    color: Color.colorGray_200,
    marginTop: 60,
  },
  date: {
    marginTop: 60,
  },
  scrollContent: {
    zIndex: 1,
    marginTop: 33,
    flex: 1,
    alignSelf: "stretch",
  },
  startTraining: {
    fontSize: FontSize.size_sm,
    letterSpacing: 3,

    lineHeight: 20,
    textTransform: "uppercase",
    color: Color.rgb255255255,

  },
  button: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.primary,

    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 1,
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
  birthday: {
    backgroundColor: Color.rgb255255255,

    width: "100%",
    height: 692,
    paddingHorizontal: Padding.p_3xs,
    paddingTop: Padding.p_31xl,
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
});

export default Birthday;
