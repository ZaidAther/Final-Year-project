import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase, RouteProp, useRoute } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";
import { RootStackParamList } from "../types";

export type Status1Type = {
  style?: StyleProp<ViewStyle>;

};


const Status1 = ({ style }: Status1Type) => {
  const route = useRoute<RouteProp<RootStackParamList, "ActivityActive">>();
  // const {mealPlan} = route.params;
  console.log("status",route.params)
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.status, style]}>
      <View style={[styles.header, styles.rowFlexBox]}>
        <Text style={[styles.activity, styles.textClr]}>Activity</Text>
      </View>
      <ScrollView
        style={[styles.days, styles.tabSpaceBlock]}
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.daysScrollViewContent}
      >
        <View style={styles.day}>
          <Text style={[styles.date, styles.dateTypo]}>12</Text>
          <Text style={[styles.nov, styles.novLayout]}>Nov</Text>
        </View>
        <View style={[styles.day1, styles.dayShadowBox]}>
          <Text style={[styles.date1, styles.dateTypo]}>13</Text>
          <Text style={[styles.nov1, styles.nov1Clr]}>Nov</Text>
        </View>
        <View style={[styles.day2, styles.dayShadowBox]}>
          <Text style={[styles.date1, styles.dateTypo]}>14</Text>
          <Text style={[styles.nov1, styles.nov1Clr]}>Nov</Text>
        </View>
        <View style={[styles.day3, styles.dayShadowBox]}>
          <Text style={[styles.date1, styles.dateTypo]}>15</Text>
          <Text style={[styles.nov1, styles.nov1Clr]}>Nov</Text>
        </View>
        <View style={[styles.day4, styles.dayShadowBox]}>
          <Text style={[styles.date1, styles.dateTypo]}>16</Text>
          <Text style={[styles.nov1, styles.nov1Clr]}>Nov</Text>
        </View>
        <View style={[styles.day5, styles.dayShadowBox]}>
          <Text style={[styles.date1, styles.dateTypo]}>16</Text>
          <Text style={[styles.nov1, styles.nov1Clr]}>Nov</Text>
        </View>
        <View style={[styles.day6, styles.dayShadowBox]}>
          <Text style={[styles.date1, styles.dateTypo]}>16</Text>
          <Text style={[styles.nov1, styles.nov1Clr]}>Nov</Text>
        </View>
        <View style={[styles.day7, styles.dayShadowBox]}>
          <Text style={[styles.date1, styles.dateTypo]}>16</Text>
          <Text style={[styles.nov1, styles.nov1Clr]}>Nov</Text>
        </View>
      </ScrollView>
      <View style={[styles.tab, styles.tabSpaceBlock]}>
        <Pressable
          style={[styles.item, styles.itemShadowBox]}
          onPress={() => navigation.navigate("Nutrition", {...route.params})}
        >
          <Text style={styles.nutrition}>Nutrition</Text>
        </Pressable>
        <View style={[styles.item1, styles.itemShadowBox]}>
          <Text style={styles.nutrition}>Activity</Text>
        </View>
      </View>
      <View style={[styles.content, styles.tabSpaceBlock]}>
        <View style={[styles.row1, styles.rowFlexBox]}>
          <View style={styles.stepsShadowBox}>
            <View style={styles.sleepGraphFlexBox}>
              <Text style={[styles.steps1, styles.steps1Layout]}>Steps</Text>
              <View style={[styles.icon, styles.iconSpaceBlock]}>
                <Text style={styles.text}>👟</Text>
              </View>
            </View>
            <View style={[styles.grah, styles.grahLayout]}>
              <Image
                style={[styles.path11Icon, styles.path11IconPosition]}
                contentFit="cover"
                source={require("../assets/path-11.png")}
              />
              <Image
                style={[styles.path12Icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/path-12.png")}
              />
              <View style={[styles.stepText, styles.textPosition]}>
                <Text style={[styles.text1, styles.textFlexBox]}>1234</Text>
                <Text style={[styles.steps2, styles.bmpTypo]}>Steps</Text>
              </View>
            </View>
          </View>
          <View style={styles.caloriesShadowBox}>
            <View style={styles.sleepGraphFlexBox}>
              <Text style={[styles.steps1, styles.steps1Layout]}>
                Heart rate
              </Text>
              <View style={[styles.icon2, styles.bg1Bg]}>
                <Text style={styles.text}>❤</Text>
              </View>
            </View>
            <View style={[styles.heartPulse, styles.rowFlexBox]}>
              <Image
                style={styles.pathIcon}
                contentFit="cover"
                source={require("../assets/path.png")}
              />
              <Image
                style={styles.pathIcon1}
                contentFit="cover"
                source={require("../assets/path1.png")}
              />
              <Image
                style={styles.pathIcon2}
                contentFit="cover"
                source={require("../assets/path2.png")}
              />
            </View>
            <View style={[styles.heartText, styles.rowFlexBox]}>
              <Text style={[styles.text3, styles.textLayout]}>120</Text>
              <Text style={[styles.bmp, styles.bmpSpaceBlock]}>bmp</Text>
            </View>
          </View>
        </View>
        <View style={[styles.row2, styles.rowFlexBox]}>
          <View style={styles.stepsShadowBox}>
            <View style={styles.sleepGraphFlexBox}>
              <Text style={[styles.steps1, styles.steps1Layout]}>Training</Text>
              <View style={[styles.icon3, styles.iconFlexBox]}>
                <Text style={styles.textTypo}>💪</Text>
              </View>
            </View>
            <View style={[styles.grah, styles.grahLayout]}>
              <Image
                style={[styles.path11Icon, styles.path11IconPosition]}
                contentFit="cover"
                source={require("../assets/path-11.png")}
              />
              <Image
                style={[styles.path12Icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/path-121.png")}
              />
              <View style={[styles.stepText1, styles.stepPosition]}>
                <Text style={[styles.text1, styles.textFlexBox]}>120</Text>
                <Text style={[styles.steps2, styles.bmpTypo]}>Minutes</Text>
              </View>
            </View>
          </View>
          <View style={styles.caloriesShadowBox}>
            <View style={styles.sleepGraphFlexBox}>
              <Text style={[styles.steps1, styles.steps1Layout]}>Calories</Text>
              <View style={styles.bgLayout}>
                <View style={[styles.bg, styles.bgLayout]} />
                <Text style={styles.text6}>🔥</Text>
              </View>
            </View>
            <View style={[styles.grah2, styles.iconLayout]}>
              <Image
                style={[styles.path11Icon2, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/path-111.png")}
              />
              <Image
                style={[styles.path12Icon2, styles.path12IconPosition]}
                contentFit="cover"
                source={require("../assets/path-122.png")}
              />
              <View style={[styles.caloriesText, styles.textPosition]}>
                <Text style={[styles.text1, styles.textFlexBox]}>990</Text>
                <Text style={[styles.steps2, styles.bmpTypo]}>KCal</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.row2, styles.rowFlexBox]}>
          <View style={styles.sleepShadowBox}>
            <View style={styles.sleepGraphFlexBox}>
              <Text style={[styles.sleep1, styles.steps1Layout]}>Sleep</Text>
              <View style={[styles.icon5, styles.iconFlexBox]}>
                <Text style={[styles.text8, styles.textTypo]}>💤</Text>
              </View>
            </View>
            <View style={[styles.sleepGraph, styles.sleepGraphFlexBox]}>
              <View style={[styles.rectangle, styles.rectangleLayout]} />
              <View style={[styles.rectangle1, styles.rectangleLayout]} />
              <View style={[styles.rectangle2, styles.rectangleLayout]} />
              <View style={[styles.rectangle1, styles.rectangleLayout]} />
              <View style={[styles.rectangle4, styles.rectangleLayout]} />
              <View style={[styles.rectangle1, styles.rectangleLayout]} />
            </View>
            <View style={[styles.heartText, styles.rowFlexBox]}>
              <Text style={[styles.text9, styles.textTypo1]}>7.50</Text>
              <Text style={[styles.hours, styles.hoursTypo]}>hours</Text>
            </View>
          </View>
          <View style={[styles.distance, styles.sleepShadowBox]}>
            <View style={styles.sleepGraphFlexBox}>
              <Text style={[styles.distance1, styles.hoursTypo]}>Distance</Text>
              <View style={styles.bgLayout}>
                <View style={[styles.bg1, styles.bgLayout]} />
                <Text style={[styles.text10, styles.textPosition]}>🚗</Text>
              </View>
            </View>
            <View style={[styles.grah, styles.grahLayout]}>
              <Image
                style={[styles.path11Icon, styles.path11IconPosition]}
                contentFit="cover"
                source={require("../assets/path-112.png")}
              />
              <Image
                style={[styles.path12Icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/path-123.png")}
              />
              <View style={[styles.stepText2, styles.stepPosition]}>
                <Text style={[styles.text11, styles.textFlexBox]}>120</Text>
                <Text style={[styles.steps5, styles.nov1Clr]}>Minutes</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  daysScrollViewContent: {
    flexDirection: "row",
    paddingLeft: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  rowFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
  },
  textClr: {
    color: Color.colorGray_100,
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: 1,
  },
  tabSpaceBlock: {
    marginTop: 30,
    alignSelf: "stretch",
  },
  dateTypo: {
    height: 28,
    width: 64,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.size_xl,
  },
  novLayout: {
    height: 16,
    width: 64,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 24,
  },
  dayShadowBox: {
    backgroundColor: Color.rgb255255255,
    marginLeft: 16,
    paddingVertical: Padding.p_sm,
    paddingHorizontal: 0,
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    elevation: 5,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    alignSelf: "stretch",
  },
  nov1Clr: {
    color: Color.colorDarkgray_100,
    fontSize: FontSize.size_xs,
  },
  itemShadowBox: {
    minWidth: 100,
    paddingVertical: Padding.p_4xs,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    elevation: 4,
    shadowRadius: 4,
    overflow: "hidden",
    backgroundColor: Color.rgb255255255,
    shadowOpacity: 1,
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
  steps1Layout: {
    lineHeight: 20,
    fontSize: FontSize.size_sm,
  },
  iconSpaceBlock: {
    padding: Padding.p_7xs,
    justifyContent: "center",
  },
  grahLayout: {
    width: 86,
    height: 86,
  },
  path11IconPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    width: 84,
    height: 86,
  },
  textPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "center",
    lineHeight: 24,
  },
  bmpTypo: {
    fontSize: FontSize.size_3xs,
    color: Color.colorSlategray_100,
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: 1,
  },
  bg1Bg: {
    backgroundColor: Color.colorMistyrose,
    borderRadius: Border.br_5xs,
  },
  textLayout: {
    lineHeight: 24,
    textAlign: "left",
  },
  bmpSpaceBlock: {
    marginLeft: 5,
    lineHeight: 24,
  },
  iconFlexBox: {
    paddingVertical: Padding.p_7xs,
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    alignItems: "center",
  },
  stepPosition: {
    marginTop: -24,
    left: "50%",
    top: "50%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  bgLayout: {
    width: 32,
    height: 32,
  },
  path12IconPosition: {
    left: 2,
    top: 0,
    position: "absolute",
  },
  textTypo: {
    color: Color.colorGray_200,
    lineHeight: 20,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
  },
  sleepGraphFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  rectangleLayout: {
    width: 10,
    backgroundColor: Color.colorTurquoise,
    borderRadius: 5,
  },
  textTypo1: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  hoursTypo: {
    display: "flex",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    alignItems: "center",
  },
  sleepShadowBox: {
    shadowColor: "rgba(234, 240, 246, 0.6)",
    padding: Padding.p_3xs,
    height: 170,
    overflow: "hidden",
    backgroundColor: Color.rgb255255255,
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    elevation: 5,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    alignItems: "center",
    flex: 1,
  },
  activity: {
    textAlign: "left",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: 1,
  },
  header: {
    height: 40,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  date: {
    color: Color.rgb255255255,
    height: 28,
    width: 64,
  },
  nov: {
    fontSize: FontSize.size_xs,
    height: 16,
    color: Color.rgb255255255,
  },
  day: {
    backgroundColor: Color.primary,
    paddingVertical: Padding.p_sm,
    paddingHorizontal: 0,
    shadowOpacity: 1,
    elevation: 5,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  date1: {
    color: Color.colorGray_300,
  },
  nov1: {
    height: 16,
    width: 64,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 24,
  },
  day1: {
    marginLeft: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  day2: {
    overflow: "hidden",
    marginLeft: 16,
  },
  day3: {
    overflow: "hidden",
    marginLeft: 16,
  },
  day4: {
    overflow: "hidden",
    marginLeft: 16,
  },
  day5: {
    overflow: "hidden",
    marginLeft: 16,
  },
  day6: {
    overflow: "hidden",
    marginLeft: 16,
  },
  day7: {
    overflow: "hidden",
    marginLeft: 16,
  },
  days: {
    display: "none",
    width: "100%",
  },
  nutrition: {
    color: Color.colorSlategray_100,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: 1,
  },
  item: {
    borderColor: Color.colorWhitesmoke,
    paddingHorizontal: Padding.p_3xl,
  },
  item1: {
    borderColor: Color.primary,
    height: 41,
    paddingHorizontal: Padding.p_7xl,
    marginLeft: 17,
  },
  tab: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  steps1: {
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: 1,
  },
  text: {
    width: 20,
    color: Color.colorGray_200,
    lineHeight: 20,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
  },
  icon: {
    backgroundColor: Color.colorAliceblue_100,
    borderRadius: Border.br_5xs,
  },
  path11Icon: {
    height: 86,
    width: 86,
  },
  path12Icon: {
    left: 2,
    top: 0,
    position: "absolute",
  },
  text1: {
    color: Color.colorGray_100,
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: 1,
    fontSize: FontSize.size_base,
  },
  steps2: {
    textAlign: "center",
    lineHeight: 24,
  },
  stepText: {
    marginLeft: -18.5,
    marginTop: -23.5,
    top: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  grah: {
    marginTop: 20,
    height: 86,
  },
  stepsShadowBox: {
    padding: Padding.p_3xs,
    height: 170,
    borderRadius: Border.br_8xs,
    elevation: 4,
    shadowRadius: 4,
    overflow: "hidden",
    backgroundColor: Color.rgb255255255,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    alignItems: "center",
    flex: 1,
  },
  icon2: {
    padding: Padding.p_7xs,
    justifyContent: "center",
  },
  pathIcon: {
    width: 55,
    height: 32,
  },
  pathIcon1: {
    width: 56,
    height: 32,
  },
  pathIcon2: {
    width: 50,
    height: 32,
  },
  heartPulse: {
    width: 161,
    marginTop: 20,
    justifyContent: "center",
  },
  text3: {
    color: Color.colorGray_100,
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: 1,
    fontSize: FontSize.size_base,
  },
  bmp: {
    fontSize: FontSize.size_3xs,
    color: Color.colorSlategray_100,
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: 1,
    textAlign: "left",
  },
  heartText: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  caloriesShadowBox: {
    marginLeft: 15,
    padding: Padding.p_3xs,
    height: 170,
    borderRadius: Border.br_8xs,
    elevation: 4,
    shadowRadius: 4,
    overflow: "hidden",
    backgroundColor: Color.rgb255255255,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    alignItems: "center",
    flex: 1,
  },
  row1: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  icon3: {
    backgroundColor: "#fbf8ee",
    paddingHorizontal: Padding.p_5xs,
  },
  stepText1: {
    marginLeft: -23,
  },
  bg: {
    backgroundColor: "#ffefdd",
    left: 0,
    top: 0,
    position: "absolute",
    borderRadius: Border.br_5xs,
  },
  text6: {
    top: 6,
    left: 6,
    position: "absolute",
    width: 20,
    color: Color.colorGray_200,
    lineHeight: 20,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
  },
  path11Icon2: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  path12Icon2: {
    width: 82,
    height: 86,
  },
  caloriesText: {
    marginLeft: -14.45,
    width: 29,
    marginTop: -23.5,
    top: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  grah2: {
    marginTop: 20,
  },
  row2: {
    marginTop: 16,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  sleep1: {
    width: 39,
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  text8: {
    width: 22,
  },
  icon5: {
    paddingHorizontal: Padding.p_8xs,
    backgroundColor: Color.colorAliceblue_100,
    overflow: "hidden",
  },
  rectangle: {
    height: 44,
  },
  rectangle1: {
    height: 29,
  },
  rectangle2: {
    height: 48,
  },
  rectangle4: {
    height: 21,
  },
  sleepGraph: {
    marginTop: 20,
  },
  text9: {
    color: Color.colorGray_300,
    lineHeight: 24,
    textAlign: "left",
    fontSize: FontSize.size_xl,
    fontWeight: "500",
  },
  hours: {
    width: 35,
    marginLeft: 5,
    lineHeight: 24,
    color: Color.colorDarkgray_100,
    fontSize: FontSize.size_xs,
  },
  distance1: {
    width: 62,
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    color: Color.colorGray_300,
  },
  bg1: {
    marginTop: -16,
    marginLeft: -16,
    backgroundColor: Color.colorMistyrose,
    borderRadius: Border.br_5xs,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  text10: {
    marginTop: -10,
    marginLeft: -8,
    color: Color.colorGray_200,
    lineHeight: 20,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
  },
  text11: {
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
  },
  steps5: {
    textAlign: "center",
    lineHeight: 24,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  stepText2: {
    marginLeft: -24.5,
  },
  distance: {
    marginLeft: 16,
  },
  content: {
    alignItems: "center",
  },
  status: {
    paddingBottom: Padding.p_61xl,
    alignItems: "center",
    flex: 1,
    alignSelf: "stretch",
  },
});

export default Status1;