import * as React from "react";
import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Padding, Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const ExerciseInfo = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.exerciseinfo}>
      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollScrollViewContent}
      >
        <View style={styles.heroSection}>
          <Image
            style={styles.imageIcon}
            contentFit="cover"
            source={require("../assets/image.png")}
          />
          <View style={[styles.mainInfo, styles.contentSpaceBlock]}>
            <View style={styles.ttileAndDesc}>
              <Text style={[styles.strongLegsAnd, styles.title3FlexBox]}>
                Strong Legs and Core
              </Text>
              <Text style={[styles.tellusPellentesque, styles.text4Typo]}>
                Tellus pellentesque eu tincidunt tortor aliquam nulla. Feugiat
                nisl pretium fusce id velit ut tortor pretium. Nunc faucibus a
                pellentesque sit amet
              </Text>
            </View>
            <View style={styles.cards}>
              <View style={styles.cardDetails}>
                <Text style={styles.text}>⏱️</Text>
                <Text style={[styles.min, styles.minTypo]}>30 min</Text>
              </View>
              <View style={styles.cardShadowBox}>
                <Text style={styles.text}>🔥</Text>
                <Text style={[styles.min, styles.minTypo]}>340 Kal</Text>
              </View>
              <View style={styles.cardShadowBox}>
                <Text style={styles.text}>⚡</Text>
                <Text style={[styles.min, styles.minTypo]}>Beginner</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.content, styles.contentSpaceBlock]}>
          <View style={styles.details}>
            <View style={[styles.equipment, styles.equipmentFlexBox]}>
              <Text style={[styles.title, styles.titleTypo]}>Equipment</Text>
              <Text style={[styles.title1, styles.titleTypo]}>2 Dumbells</Text>
            </View>
            <View style={[styles.focusArea, styles.equipmentFlexBox]}>
              <Text style={[styles.title, styles.titleTypo]}>Focus Area</Text>
              <Text style={[styles.title3, styles.titleTypo]}>Legs</Text>
            </View>
          </View>
          <View style={styles.exercises}>
            <View style={[styles.equipment, styles.equipmentFlexBox]}>
              <Text style={[styles.warmUp, styles.warmUpTypo]}>Workout</Text>
              <View style={styles.info}>
                <Text style={[styles.exercises1, styles.text4Typo]}>
                  3 Exercises
                </Text>
                <Image
                  style={styles.ovalIcon}
                  contentFit="cover"
                  source={require("../assets/oval.png")}
                />
                <Text style={[styles.minutes, styles.text4Typo]}>
                  2 Minutes
                </Text>
              </View>
            </View>
            <View style={styles.exercise}>
              <View style={styles.exerciseShadowBox}>
                <View>
                  <View style={styles.beautifulSlimBrunetteDoing} />
                </View>
                <View style={styles.text3}>
                  <Text style={[styles.armCircles, styles.warmUpTypo]}>
                    Arm circles
                  </Text>
                  <Text style={[styles.text4, styles.text4Typo]}>0:30</Text>
                </View>
                <Image
                  style={styles.featherinfoIcon}
                  contentFit="cover"
                  source={require("../assets/featherinfo1.png")}
                />
              </View>
              <View style={[styles.exercise11, styles.exerciseShadowBox]}>
                <View>
                  <View style={styles.beautifulSlimBrunetteDoing} />
                </View>
                <View style={styles.text3}>
                  <Text style={[styles.armCircles, styles.warmUpTypo]}>
                    Arm circles
                  </Text>
                  <Text style={[styles.text4, styles.text4Typo]}>0:30</Text>
                </View>
                <Image
                  style={styles.featherinfoIcon}
                  contentFit="cover"
                  source={require("../assets/featherinfo1.png")}
                />
              </View>
              <View style={[styles.exercise12, styles.exerciseShadowBox]}>
                <View>
                  <View style={styles.beautifulSlimBrunetteDoing} />
                </View>
                <View style={styles.text3}>
                  <Text style={[styles.armCircles, styles.warmUpTypo]}>
                    Arm circles
                  </Text>
                  <Text style={[styles.text4, styles.text4Typo]}>0:30</Text>
                </View>
                <Image
                  style={styles.featherinfoIcon}
                  contentFit="cover"
                  source={require("../assets/featherinfo1.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={[styles.navigation, styles.equipmentFlexBox]}>
        <View style={styles.backButton}>
          <Pressable style={styles.group} onPress={() => navigation.goBack()}>
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/group1.png")}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollScrollViewContent: {
    flexDirection: "column",
    paddingBottom: 20,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  contentSpaceBlock: {
    paddingHorizontal: Padding.p_3xs,
    alignSelf: "stretch",
  },
  title3FlexBox: {
    display: "flex",
    alignItems: "center",
  },
  text4Typo: {
    color: Color.colorDarkslategray,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
  },
  minTypo: {
    textAlign: "center",
    color: Color.colorGray_200,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    lineHeight: 24,
    alignSelf: "stretch",
  },
  equipmentFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  titleTypo: {
    lineHeight: 22,
    color: Color.colorBlack,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
  },
  warmUpTypo: {
    fontSize: FontSize.size_base,
    lineHeight: 20,
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
  },
  exerciseShadowBox: {
    paddingBottom: Padding.p_8xs,
    paddingRight: Padding.p_3xs,
    paddingTop: Padding.p_8xs,
    paddingLeft: Padding.p_8xs,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    flexDirection: "row",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    borderRadius: Border.br_mini,
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.rgb255255255,
  },
  imageIcon: {
    maxWidth: "100%",
    height: 260,
    alignSelf: "stretch",
    overflow: "hidden",
    width: "100%",
  },
  strongLegsAnd: {
    fontSize: FontSize.size_xl,
    justifyContent: "center",
    height: 32,
    textAlign: "center",
    color: Color.colorGray_200,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    lineHeight: 24,
    alignSelf: "stretch",
  },
  tellusPellentesque: {
    lineHeight: 18,
    marginTop: 8,
    height: 64,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    alignSelf: "stretch",
  },
  ttileAndDesc: {
    borderRadius: Border.br_5xl,
    alignSelf: "stretch",
    backgroundColor: Color.rgb255255255,
  },
  text: {
    fontSize: FontSize.size_mid,
    color: Color.colorBlack,
    lineHeight: 20,
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
  },
  min: {
    fontSize: FontSize.size_xs,
    height: 19,
  },
  cardDetails: {
    paddingVertical: Padding.p_xl,
    paddingHorizontal: Padding.p_12xs,
    borderWidth: 1,
    borderColor: Color.colorAliceblue_200,
    borderStyle: "solid",
    elevation: 4,
    shadowRadius: 4,
    borderRadius: Border.br_5xs,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.rgb255255255,
  },
  cardShadowBox: {
    marginLeft: 16,
    paddingVertical: Padding.p_xl,
    paddingHorizontal: Padding.p_12xs,
    borderWidth: 1,
    borderColor: Color.colorAliceblue_200,
    borderStyle: "solid",
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.rgb255255255,
  },
  cards: {
    marginTop: 13,
    flexDirection: "row",
    alignSelf: "stretch",
    backgroundColor: Color.rgb255255255,
  },
  mainInfo: {
    shadowColor: "rgba(234, 240, 246, 0.6)",
    paddingVertical: Padding.p_5xl,
    marginTop: -15,
    shadowOpacity: 1,
    elevation: 5,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    paddingHorizontal: Padding.p_3xs,
    borderRadius: Border.br_mini,
    backgroundColor: Color.rgb255255255,
  },
  heroSection: {
    height: 489,
    alignSelf: "stretch",
    alignItems: "center",
  },
  title: {
    textAlign: "left",
    flex: 1,
  },
  title1: {
    textAlign: "right",
  },
  equipment: {
    alignSelf: "stretch",
  },
  title3: {
    width: 37,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
  },
  focusArea: {
    marginTop: 15,
    alignSelf: "stretch",
  },
  details: {
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_sm,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 1,
    elevation: 5,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    borderRadius: Border.br_mini,
    alignSelf: "stretch",
    backgroundColor: Color.rgb255255255,
  },
  warmUp: {
    width: 111,
    height: 24,
  },
  exercises1: {
    width: 77,
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.size_sm,
  },
  ovalIcon: {
    width: 4,
    height: 4,
    marginLeft: 9,
  },
  minutes: {
    width: 69,
    marginLeft: 9,
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.size_sm,
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
  },
  beautifulSlimBrunetteDoing: {
    backgroundColor: Color.colorGainsboro_200,
    width: 96,
    height: 64,
  },
  armCircles: {
    alignSelf: "stretch",
  },
  text4: {
    marginTop: 4,
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.size_sm,
    alignSelf: "stretch",
  },
  text3: {
    marginLeft: 10,
    flex: 1,
  },
  featherinfoIcon: {
    width: 24,
    marginLeft: 10,
    height: 24,
  },
  exercise11: {
    marginTop: 10,
  },
  exercise12: {
    marginTop: 10,
  },
  exercise: {
    marginTop: 18,
    alignSelf: "stretch",
  },
  exercises: {
    marginTop: 10,
    borderRadius: Border.br_mini,
    alignSelf: "stretch",
    alignItems: "center",
  },
  content: {
    paddingVertical: 0,
    marginTop: 10,
    alignItems: "center",
  },
  scroll: {
    zIndex: 0,
    alignSelf: "stretch",
    flex: 1,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  group: {
    width: 16,
    height: 14,
  },
  backButton: {
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: Padding.p_8xs,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  navigation: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 622,
    height: 57,
    padding: Padding.p_3xs,
    zIndex: 1,
    overflow: "hidden",
  },
  exerciseinfo: {
    height: 758,
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.rgb255255255,
  },
});

export default ExerciseInfo;
