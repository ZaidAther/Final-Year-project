import * as React from "react";

import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import the navigation hook
import StatusBars from "../components/StatusBars";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const CreatePlan = () => {
  const navigation = useNavigation(); // Get navigation object

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("HomeActive"); // Navigate to the next screen
    }, 1000); // 1000 milliseconds = 1 second

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.createPlan}>
      <View style={styles.statusBar}>
        <StatusBars
          barsStatusBarsiPhoneLight={require("../assets/barsstatus-barsiphonelight.png")}
          barsStatusBarsiPhoneLightHeight={50}
          barsStatusBarsiPhoneLightOverflow="hidden"
          barsStatusBarsiPhoneLightFlex={1}
          barsStatusBarsiPhoneLightWidth="unset"
        />
      </View>
      <View style={styles.content}>
        <Text style={[styles.weCreateYour, styles.createTypo]}>{`We create your 
training plan`}</Text>
        <View style={styles.path1Parent}>
          <Image
            style={[styles.path1Icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/path-1.png")}
          />
          <Image
            style={[styles.path2Icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/path-2.png")}
          />
          <Text style={styles.text}>75%</Text>
        </View>
        <Text style={[styles.weCreateAContainer, styles.createTypo]}>
          {`We create a workout according `}
          {`to demographic profile, activity `}level and interests

        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  createTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    alignSelf: "stretch",
  },
  iconPosition: {
    width: 225,
    left: "50%",
    height: 264,
    top: 0,
    position: "absolute",
  },
  statusBar: {
    right: 0,
    width: 390,
    height: 50,
    flexDirection: "row",
    justifyContent: "flex-end",
    zIndex: 0,
    top: 0,
    position: "absolute",
    alignItems: "center",
  },
  weCreateYour: {
    fontSize: FontSize.size_xl,
    lineHeight: 32,
  },
  path1Icon: {
    marginLeft: -132.2,
  },
  path2Icon: {
    marginLeft: -93.2,
  },
  text: {
    marginTop: -23,
    marginLeft: -46,
    top: "50%",
    fontSize: 46,
    lineHeight: 46,
    display: "flex",
    width: 92,
    left: "50%",
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  path1Parent: {
    width: 264,
    height: 264,
    marginTop: 33,
  },
  weCreateAContainer: {

    fontSize: FontSize.size_base,
    lineHeight: 22,
    marginTop: 33,
  },
  content: {
    zIndex: 1,
    marginTop: 33,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  createPlan: {
    backgroundColor: Color.rgb255255255,

    width: "100%",
    height: 692,
    overflow: "hidden",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

export default CreatePlan;
