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
  const [selectedItems, setSelectedItems] = React.useState<string[]>([]);

  const toggleSelection = (item: string) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const isSelected = (item: string) => {
    return selectedItems.includes(item)
  };

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
              <TouchableHighlight
                style={[styles.backShadowBox, isSelected("FOREARM") && styles.selectedItem]}
                underlayColor="transparent"
                onPress={() => toggleSelection("FOREARM")}
              >
                <Text style={[styles.forearm1, styles.forearm1Typo, isSelected("FOREARM") && styles.selectedText]}>
                  FOREARM
                </Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={[styles.bicep, styles.backShadowBox, isSelected("BICEP") && styles.selectedItem]}
                underlayColor="transparent"
                onPress={() => toggleSelection("BICEP")}
              >
                <Text style={[styles.forearm1, styles.forearm1Typo, isSelected("BICEP") && styles.selectedText]}>
                  BICEP
                </Text>
              </TouchableHighlight>
            </View>
            <View style={styles.row1}>
              <TouchableHighlight
                style={[styles.backShadowBox, isSelected("TRICEPS") && styles.selectedItem]}
                underlayColor="transparent"
                onPress={() => toggleSelection("TRICEPS")}
              >
                <Text style={[styles.forearm1, styles.forearm1Typo, isSelected("TRICEPS") && styles.selectedText]}>
                  TRICEPS
                </Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={[styles.bicep, styles.backShadowBox, isSelected("LATS") && styles.selectedItem]}
                underlayColor="transparent"
                onPress={() => toggleSelection("LATS")}
              >
                <Text style={[styles.forearm1, styles.forearm1Typo, isSelected("LATS") && styles.selectedText]}>
                LATS
                </Text>
              </TouchableHighlight>
            </View>
            <View style={styles.row1}>
              <TouchableHighlight
                style={[styles.backShadowBox, isSelected("SHOULDER") && styles.selectedItem]}
                underlayColor="transparent"
                onPress={() => toggleSelection("SHOULDER")}
              >
                <Text style={[styles.forearm1, styles.forearm1Typo, isSelected("SHOULDER") && styles.selectedText]}>
                  SHOULDER
                </Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={[styles.bicep, styles.backShadowBox, isSelected("BOOST LIBIDO") && styles.selectedItem]}
                underlayColor="transparent"
                onPress={() => toggleSelection("BOOST LIBIDO")}
              >
                <Text style={[styles.forearm1, styles.forearm1Typo, isSelected("BOOST LIBIDO") && styles.selectedText]}>
                  BOOST LIBIDO
                </Text>
              </TouchableHighlight>
            </View>
            <View style={styles.row1}>
              <TouchableHighlight
                style={[styles.backShadowBox, isSelected("WEIGHT LOSS") && styles.selectedItem]}
                underlayColor="transparent"
                onPress={() => toggleSelection("WEIGHT LOSS")}
              >
                <Text style={[styles.forearm1, styles.forearm1Typo, isSelected("WEIGHT LOSS") && styles.selectedText]}>
                  WEIGHT LOSS
                </Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={[styles.bicep, styles.backShadowBox, isSelected("TRAPS") && styles.selectedItem]}
                underlayColor="transparent"
                onPress={() => toggleSelection("TRAPS")}
              >
                <Text style={[styles.forearm1, styles.forearm1Typo, isSelected("TRAPS") && styles.selectedText]}>
                  TRAPS
                </Text>
              </TouchableHighlight>
            </View>
            <View style={styles.row1}>
              <TouchableHighlight
                style={[styles.backShadowBox, isSelected("FLEXIBILITY") && styles.selectedItem]}
                underlayColor="transparent"
                onPress={() => toggleSelection("FLEXIBILITY")}
              >
                <Text style={[styles.forearm1, styles.forearm1Typo, isSelected("FLEXIBILITY") && styles.selectedText]}>
                  FLEXIBILITY
                </Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={[styles.bicep, styles.backShadowBox, isSelected("MIDDLE BACK") && styles.selectedItem]}
                underlayColor="transparent"
                onPress={() => toggleSelection("MIDDLE BACK")}
              >
                <Text style={[styles.forearm1, styles.forearm1Typo, isSelected("MIDDLE BACK") && styles.selectedText]}>
                  MIDDLE BACK
                </Text>
              </TouchableHighlight>
            </View>
            <View style={styles.row1}>
              <TouchableHighlight
                style={[styles.backShadowBox, isSelected("HAMSTRINGS") && styles.selectedItem]}
                underlayColor="transparent"
                onPress={() => toggleSelection("HAMSTRINGS")}
              >
                <Text style={[styles.forearm1, styles.forearm1Typo, isSelected("HAMSTRINGS") && styles.selectedText]}>
                  HAMSTRINGS
                </Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={[styles.bicep, styles.backShadowBox, isSelected("CALVES") && styles.selectedItem]}
                underlayColor="transparent"
                onPress={() => toggleSelection("CALVES")}
              >
                <Text style={[styles.forearm1, styles.forearm1Typo, isSelected("CALVES") && styles.selectedText]}>
                  CALVES
                </Text>
              </TouchableHighlight>
            </View>
            <View style={styles.row1}>
              <TouchableHighlight
                style={[styles.backShadowBox, isSelected("LOWER BACK") && styles.selectedItem]}
                underlayColor="transparent"
                onPress={() => toggleSelection("LOWER BACK")}
              >
                <Text style={[styles.forearm1, styles.forearm1Typo, isSelected("LOWER BACK") && styles.selectedText]}>
                  LOWER BACK
                </Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={[styles.bicep, styles.backShadowBox, isSelected("CHEST") && styles.selectedItem]}
                underlayColor="transparent"
                onPress={() => toggleSelection("CHEST")}
              >
                <Text style={[styles.forearm1, styles.forearm1Typo, isSelected("CHEST") && styles.selectedText]}>
                  CHEST
                </Text>
              </TouchableHighlight>
            </View>
            <View style={styles.row2}>
              <TouchableHighlight
                style={[styles.backShadowBox, isSelected("ABDUCTORS") && styles.selectedItem]}
                underlayColor="transparent"
                onPress={() => toggleSelection("ABDUCTORS")}
              >
                <Text style={[styles.forearm1, styles.forearm1Typo, isSelected("ABDUCTORS") && styles.selectedText]}>
                  ABDUCTORS
                </Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={[styles.bicep, styles.backShadowBox, isSelected("GLUTES") && styles.selectedItem]}
                underlayColor="transparent"
                onPress={() => toggleSelection("GLUTES")}
              >
                <Text style={[styles.forearm1, styles.forearm1Typo, isSelected("GLUTES") && styles.selectedText]}>
                  GLUTES
                </Text>
              </TouchableHighlight>
            </View>
            {/* Repeat the above structure for other items */}
          </View>
          <View style={[styles.bottom, styles.goalsFlexBox]}>
            <TouchableHighlight
              style={styles.continue}
              underlayColor= {Color.colorDarkslategray_100}
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
    fontSize: 10,
    color: Color.colorDarkslategray_100,
  },
  bicep: {
    marginLeft: 10,
  },
  row1: {
    flexDirection: "row",
    marginBottom: 10,
  },
  row2: {
    flexDirection: "row",

  },
  selectedText: {
    color: Color.colorWhite, // Change to your desired selected text color
  },
  continue1: {
    fontSize: FontSize.size_sm,
    color: Color.colorWhite,
  },
  continue: {
    // width: 210,
    // height: 45,
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_31xl,
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
  selectedItem: {
    backgroundColor: Color.colorDarkslategray_100, // Change to your desired selected background color
  },
});

export default ChooseGoals;
