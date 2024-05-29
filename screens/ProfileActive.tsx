import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, ScrollView, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase, RouteProp, useRoute } from "@react-navigation/native";
import StatusBars from "../components/StatusBars";
import Setting from "../components/Setting";
import NavBar from "../components/NavBar";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";
import Footer from "../components/Footer";
import { RootStackParamList } from "../types";



const ProfileActive = () => {
  const route = useRoute<RouteProp<RootStackParamList, "ActivityActive">>();

  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.profileActive}>
      <ScrollView
        style={styles.allSettings}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.allSettingsScrollViewContent}
      >
        <View style={[styles.headerProfile, styles.statusBarFlexBox]}>
          <Text style={[styles.profile, styles.nameTypo]}>Profile</Text>
          <View style={styles.premium}>
            <Text style={[styles.text, styles.textTypo]}>🔥</Text>
            <Text style={[styles.title, styles.textTypo]}>Premium</Text>
          </View>
        </View>
        <View style={[styles.profile1, styles.picFlexBox]}>
          <View style={[styles.pic, styles.picFlexBox]}>
            <Image
              style={styles.maskIcon}
              contentFit="cover"
              source={require("../assets/mask.png")}
            />
          </View>
          <Text style={[styles.name, styles.nameTypo]}>Hammad Zaib</Text>
        </View>
        <View style={[styles.cards, styles.picFlexBox]}>
          <View style={styles.cardComponentWeight}>
            <Text style={[styles.text1, styles.nameTypo]}>⚖️</Text>
            <Text style={[styles.min, styles.minTypo]}>55 kg</Text>
          </View>
          <View style={styles.cardShadowBox}>
            <Text style={[styles.text1, styles.nameTypo]}>🧍‍♀️</Text>
            <Text style={[styles.min1, styles.minTypo]}>167 cm</Text>
          </View>
          <View style={styles.cardShadowBox}>
            <Text style={[styles.text1, styles.nameTypo]}>🎂</Text>
            <Text style={[styles.min1, styles.minTypo]}>26 Years</Text>
          </View>
        </View>
        <View style={[styles.accountInfo, styles.accountShadowBox]}>
          <Setting title="Account" />
          <Setting title="My workouts  🚀" propMarginTop={3} />
          <Setting title="Workout reminders" propMarginTop={3} />
          <Setting title="Log out" propMarginTop={3} />
        </View>
        <View style={styles.settings}>
          <Text style={styles.settings1}>Settings</Text>
          <View style={[styles.accountInfo1, styles.accountShadowBox]}>
            <Setting title="Preferences" propMarginTop="unset" />
            <Setting title="Plan Settings" propMarginTop={3} />
            <Setting title="Pin Lock" propMarginTop={3} />
            <Setting title="Support" propMarginTop={3} />
          </View>
        </View>
      </ScrollView>
      <Footer
        homeActive={require("../assets/homeactive.png")}
        training={require("../assets/training.png")}
        activity={require("../assets/activity.png")}
        onHomePress={() => navigation.navigate("HomeActive", {...route.params})}
        onTrainingPress={() => navigation.navigate("Workouts", {...route.params})}
        onActivityPress={() => navigation.navigate("ActivityActive", {...route.params})}
        onProfilePress={() => navigation.navigate("ProfileActive", {...route.params})}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  allSettingsScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  statusBarFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  nameTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
  },
  textTypo: {
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    alignItems: "center",
  },
  picFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  minTypo: {
    textAlign: "center",
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    color: Color.colorGray_200,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
  },
  accountShadowBox: {
    elevation: 10,
    shadowRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    alignSelf: "stretch",
    overflow: "hidden",
  },
  statusBar: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 390,
    height: 50,
    zIndex: 0,
  },
  profile: {
    fontSize: FontSize.size_8xl,
    lineHeight: 40,
    color: Color.colorGray_200,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    flex: 1,
  },
  text: {
    fontSize: 11,
    color: Color.primary,
    width: 8,
    height: 15,
  },
  title: {
    fontSize: FontSize.size_3xs,
    color: Color.colorWhite,
    width: 46,
    marginLeft: 7,
  },
  premium: {
    borderRadius: 12,
    backgroundColor: Color.primary,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: 4,
    flexDirection: "row",
    overflow: "hidden",
  },
  headerProfile: {
    alignSelf: "stretch",
  },
  maskIcon: {
    width: 100,
    height: 100,
  },
  pic: {
    flexDirection: "row",
  },
  name: {
    fontSize: FontSize.size_xl,
    lineHeight: 24,
    marginTop: 16,
    color: Color.colorGray_200,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
  },
  profile1: {
    marginTop: 33,
  },
  text1: {
    fontSize: FontSize.size_mid,
    lineHeight: 22,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
  },
  min: {
    marginTop: 2,
  },
  cardComponentWeight: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_12xs,
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    elevation: 5,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: "rgba(234, 240, 246, 0.6)",
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
  min1: {
    marginTop: 3,
  },
  cardShadowBox: {
    marginLeft: 16,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_12xs,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    elevation: 5,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: "rgba(234, 240, 246, 0.6)",
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
  cards: {
    height: 80,
    marginTop: 33,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  accountInfo: {
    marginTop: 33,
  },
  settings1: {
    fontSize: FontSize.size_base,
    height: 24,
    lineHeight: 20,
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    alignSelf: "stretch",
  },
  accountInfo1: {
    marginTop: 14,
  },
  settings: {
    borderRadius: Border.br_5xs,
    marginTop: 33,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  allSettings: {
    zIndex: 1,
    marginTop: 33,
    alignSelf: "stretch",
    overflow: "hidden",
    flex: 1,
  },
  profileActive: {
    backgroundColor: Color.colorWhitesmoke,
    width: "100%",
    height: 719,
    paddingHorizontal: Padding.p_3xs,
    paddingTop: Padding.p_31xl,
    paddingBottom: Padding.p_56xl,
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
});

export default ProfileActive;
