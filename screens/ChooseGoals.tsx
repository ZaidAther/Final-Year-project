import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableHighlight,
} from "react-native";
import { Color, FontFamily, Padding, Border, FontSize } from "../GlobalStyles";

const ChooseGoals = () => {
  return (
    <View style={[styles.choosegoals, styles.backFlexBox]}>
      <View style={[styles.muscleGroupContainer, styles.backFlexBox]}>
        <View style={styles.headerFlexBox}>
          <View style={[styles.header, styles.headerFlexBox]}>

            <View style={[styles.progressbar, styles.backFlexBox]}>
              <View style={styles.progressPillBar}>
                <View style={[styles.progressPills, styles.progressLayout1]} />
                <View style={[styles.progressPills1, styles.progressLayout1]} />
                <View style={styles.progressLayout} />
                <View style={styles.progressLayout} />
                <View style={styles.progressLayout} />
                <View style={[styles.progressPills5, styles.progressLayout]} />
              </View>
            </View>
          </View>
          <View style={[styles.chooseYourGoals, styles.goalsFlexBox]}>
            <Text style={styles.chooseMuscle}>CHOOSE MUSCLE</Text>
          </View>
          <View style={styles.goalsFlexBox}>
            <View style={styles.row1}>
              <View style={styles.backShadowBox}>
                <Text style={[styles.forearm1, styles.forearm1Typo]}>
                  FOREARM
                </Text>
              </View>
              <View style={[styles.bicep, styles.backShadowBox]}>
                <Text style={[styles.forearm1, styles.forearm1Typo]}>
                  BICEP
                </Text>
              </View>
            </View>
            <View style={styles.row2}>
              <View style={styles.backShadowBox}>
                <Text style={[styles.forearm1, styles.forearm1Typo]}>
                  TRICEPS
                </Text>
              </View>
              <View style={[styles.lats, styles.backShadowBox]}>
                <Text style={[styles.forearm1, styles.forearm1Typo]}>LATS</Text>
              </View>
            </View>
            <View style={styles.row2}>
              <View style={styles.backShadowBox}>
                <Text style={[styles.forearm1, styles.forearm1Typo]}>
                  SHOULDER
                </Text>
              </View>
              <View style={[styles.boostLibido, styles.backShadowBox]}>
                <Text style={[styles.forearm1, styles.forearm1Typo]}>
                  BOOST LIBIDO
                </Text>
              </View>
            </View>
            <View style={styles.row2}>
              <View style={styles.backShadowBox}>
                <Text style={[styles.forearm1, styles.forearm1Typo]}>
                  WEIGHT LOSS
                </Text>
              </View>
              <View style={[styles.traps, styles.backShadowBox]}>
                <Text style={[styles.forearm1, styles.forearm1Typo]}>
                  TRAPS
                </Text>
              </View>
            </View>
            <View style={styles.row2}>
              <View style={styles.backShadowBox}>
                <Text style={[styles.forearm1, styles.forearm1Typo]}>
                  FLEXIBILITY
                </Text>
              </View>
              <View style={[styles.middleBack, styles.backShadowBox]}>
                <Text style={[styles.forearm1, styles.forearm1Typo]}>
                  MIDDLE BACK
                </Text>
              </View>
            </View>
            <View style={styles.row2}>
              <View style={styles.backShadowBox}>
                <Text style={[styles.forearm1, styles.forearm1Typo]}>
                  HAMSTRINGS
                </Text>
              </View>
              <View style={[styles.calves, styles.backShadowBox]}>
                <Text style={[styles.forearm1, styles.forearm1Typo]}>
                  CALVES
                </Text>
              </View>
            </View>
            <View style={styles.row2}>
              <View style={styles.backShadowBox}>
                <Text style={[styles.forearm1, styles.forearm1Typo]}>
                  LOWER BACK
                </Text>
              </View>
              <View style={[styles.chest, styles.backShadowBox]}>
                <Text style={[styles.forearm1, styles.forearm1Typo]}>
                  CHEST
                </Text>
              </View>
            </View>
            <View style={styles.row2}>
              <View style={styles.backShadowBox}>
                <Text style={[styles.forearm1, styles.forearm1Typo]}>
                  ABDUCTORS
                </Text>
              </View>
              <View style={[styles.glutes, styles.backShadowBox]}>
                <Text style={[styles.forearm1, styles.forearm1Typo]}>
                  GLUTES
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.bottom, styles.goalsFlexBox]}>
            <TouchableHighlight
              style={styles.continue}
              underlayColor="#fff"
              onPress={() => {}}
            >
              <Text style={[styles.continue1, styles.forearm1Typo]}>
                CONTINUE
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backFlexBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  headerFlexBox: {
    alignSelf: "stretch",
    justifyContent: "center",
    // alignItems: "center",
  },
  progressLayout1: {
    height: 15,
    borderRadius: 121,
    width: 35,
    overflow: "hidden",
  },
  progressLayout: {
    borderWidth: 2.4,
    borderColor: Color.colorLightgray,
    borderStyle: "solid",
    marginLeft: 10,
    height: 15,
    borderRadius: 121,
    width: 35,
    overflow: "hidden",
  },
  goalsFlexBox: {
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  forearm1Typo: {
    fontWeight: "600",
    letterSpacing: 3,
    textAlign: "center",
    fontFamily: FontFamily.poppins,
  },
  backShadowBox: {
    paddingHorizontal: Padding.p_13xl,
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.15)",
    borderRadius: Border.br_mini,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },



  progressPills: {
    backgroundColor: Color.colorCadetblue,
    height: 15,
    borderRadius: 121,
  },
  progressPills1: {
    backgroundColor: Color.colorDarkslategray_100,
    marginLeft: 10,
    height: 15,
    borderRadius: 121,
  },
  progressPills5: {
    display: "none",
  },
  progressPillBar: {
    justifyContent: "center",
    flexDirection: "row",
  },
  progressbar: {
    marginLeft: 16,
    justifyContent: "center",
    flexDirection: "row",
  },
  header: {
    flexDirection: "row",
  },
  chooseMuscle: {
    fontSize: FontSize.size_2xl,
    letterSpacing: 3.2,
    lineHeight: 26,
    fontWeight: "500",
    color: Color.colorGray,
    textAlign: "center",
    fontFamily: FontFamily.poppins,
  },
  chooseYourGoals: {
    flexDirection: "row",
  },
  forearm1: {
    fontSize: FontSize.size_5xs,
    color: Color.colorDarkslategray_100,
  },
  bicep: {
    marginLeft: 10,
  },
  row1: {
    flexDirection: "row",
  },
  lats: {
    marginLeft: 10,
  },
  row2: {
    marginTop: 10,
    flexDirection: "row",
  },
  boostLibido: {
    marginLeft: 10,
  },
  traps: {
    marginLeft: 10,
  },
  middleBack: {
    marginLeft: 10,
  },
  calves: {
    marginLeft: 10,
  },
  chest: {
    marginLeft: 10,
  },
  glutes: {
    marginLeft: 10,
  },
  continue1: {
    fontSize: FontSize.size_sm,
    color: Color.colorWhite,
  },
  continue: {
    width: 210,
    height: 45,
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_41xl,
    paddingVertical: Padding.p_smi,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.15)",
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorCadetblue,
    alignItems: "center",
    flexDirection: "row",
  },
  bottom: {
    paddingTop: 22,
  },
  muscleGroupContainer: {
    width: 315,
    height: 600,
    justifyContent: "center",
  },
  choosegoals: {
    borderRadius: Border.br_lg,
    backgroundColor: Color.colorWhitesmoke_100,
    flex: 1,
    width: "100%",
    height: 736,
    paddingHorizontal: Padding.p_21xl,
    paddingVertical: Padding.p_31xl,
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
});

export default ChooseGoals;
