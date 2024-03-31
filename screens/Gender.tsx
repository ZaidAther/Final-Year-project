import * as React from "react";
import {
  Pressable,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Padding, Border, FontSize, FontFamily } from "../GlobalStyles";

const Gender = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.gender}>
      <View style={styles.genderContainer}>
        <View style={styles.genderContent}>
          <View style={styles.header}>

            <View style={styles.progressbar}>
              <View style={styles.progressPillBar}>
                <View style={styles.progressPills} />
                <View style={styles.progressLayout} />
                <View style={styles.progressLayout} />
                <View style={styles.progressLayout} />
                <View style={styles.progressLayout} />
                <View style={[styles.progressPills5, styles.progressLayout]} />
              </View>
            </View>
          </View>
          <View style={[styles.chooseYourGoals, styles.gendersFlexBox]}>
            <Text style={styles.gender1}>GENDER</Text>
          </View>
          <View style={[styles.genders, styles.gendersFlexBox]}>
            <View style={styles.row1}>
              <TouchableHighlight
                style={styles.maleRow}
                underlayColor="#fff"
                onPress={() => navigation.navigate("ChooseGoals")}
              >
                <>
                  <TouchableHighlight
                    underlayColor="#fff"
                    onPress={() => navigation.navigate("ChooseGoals")}
                  >
                    <Text style={styles.male1Typo}>Male</Text>
                  </TouchableHighlight>
                  <Image
                    style={styles.iconGenderMale}
                    contentFit="cover"
                    source={require("../assets/-icon-gender-male.png")}
                  />
                </>
              </TouchableHighlight>
            </View>
            <View style={[styles.row2, styles.rowSpaceBlock]}>
              <TouchableHighlight
                style={[styles.femaleRow, styles.rowShadowBox]}
                underlayColor="#fff"
                onPress={() => navigation.navigate("ChooseGoals")}
              >
                <>
                  <Text style={styles.male1Typo} selectionColor="#FFFFFF">
                    female
                  </Text>
                  <Image
                    style={styles.vectorIcon}
                    contentFit="cover"
                    source={require("../assets/vector.png")}
                  />
                </>
              </TouchableHighlight>
            </View>
            <View style={[styles.row3, styles.rowSpaceBlock]}>
              <TouchableHighlight
                style={[styles.otherRow, styles.rowShadowBox]}
                underlayColor="#fff"
                onPress={() => navigation.navigate("ChooseGoals")}
              >
                <>
                  <Text style={styles.male1Typo} selectionColor="#FFFFFF">
                    Other
                  </Text>
                  <Image
                    style={styles.vectorIcon1}
                    contentFit="cover"
                    source={require("../assets/vector1.png")}
                  />
                </>
              </TouchableHighlight>
            </View>
          </View>
        </View>
        <TouchableHighlight
          style={styles.bottom}
          underlayColor="#fff"
          onPress={() => navigation.navigate("ChooseGoals")}
        >
          <View style={styles.continue}>
            <Text style={styles.continue1}>cONTINUE</Text>
          </View>
        </TouchableHighlight>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  progressLayout: {
    marginLeft: 10,
    borderWidth: 2.4,
    borderColor: Color.colorLightgray,
    borderStyle: "solid",
    height: 15,
    borderRadius: 121,
    width: 35,
    overflow: "hidden",
  },
  gendersFlexBox: {
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  rowSpaceBlock: {
    marginTop: 27,
    alignSelf: "stretch",
  },
  rowShadowBox: {
    height: 45,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.15)",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_mini,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },


  progressPills: {
    backgroundColor: Color.colorDarkslategray_100,
    height: 15,
    borderRadius: 121,
    width: 35,
    overflow: "hidden",
  },
  progressPills5: {
    display: "none",
  },
  progressPillBar: {
    flexDirection: "row",
    justifyContent: "center",
  },
  progressbar: {
    marginLeft: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  gender1: {
    fontSize: FontSize.size_2xl,
    letterSpacing: 3.2,
    lineHeight: 26,
    fontWeight: "500",
    fontFamily: FontFamily.poppins,
    color: Color.colorGray,
    textAlign: "center",
  },
  chooseYourGoals: {
    flexDirection: "row",
  },
  male1Typo: {
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 3,
    fontSize: FontSize.size_sm,
    textAlign: "center",
  },
  iconGenderMale: {
    width: 28,
    height: 28,
    marginLeft: 205,
    display: "none",
  },
  maleRow: {

    height: 45,
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
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  row1: {
    paddingHorizontal: 2,
    paddingVertical: 0,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  vectorIcon: {
    width: 22,
    height: 22,
    marginLeft: 187,
    display: "none",
  },
  femaleRow: {
    paddingVertical: 12,
  },
  row2: {
    justifyContent: "center",
    alignItems: "center",
    width: 315,
  },
  vectorIcon1: {
    width: 19,
    height: 26,
    marginLeft: 197,
    display: "none",
  },
  otherRow: {
    paddingVertical: Padding.p_4xs,
  },
  row3: {
    paddingHorizontal: 1,
    paddingVertical: 0,
    
  },
  genders: {
    alignSelf: "stretch",
  },
  genderContent: {
    zIndex: 0,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  continue1: {
    color: Color.colorWhitesmoke_100,
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 3,
    fontSize: FontSize.size_sm,
    textAlign: "center",
  },
  continue: {
    backgroundColor: Color.colorCadetblue,
    alignItems: "flex-end",
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
    flexDirection: "row",
    justifyContent: "center",
  },
  bottom: {
    marginTop: 222,
    zIndex: 1,
    alignItems: "center",
  },

  genderContainer: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  gender: {
    borderRadius: Border.br_lg,
    backgroundColor: Color.colorWhitesmoke_100,
    flex: 1,
    height: 736,
    paddingHorizontal: Padding.p_21xl,
    paddingVertical: Padding.p_31xl,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
  },
});

export default Gender;
