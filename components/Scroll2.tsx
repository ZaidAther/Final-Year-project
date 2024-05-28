import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  View,
  Pressable,
  Text,
} from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

export type Scroll2Type = {
  style?: StyleProp<ViewStyle>;
};

const Scroll2 = ({ style }: Scroll2Type) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.scroll, style]}>
      <View style={[styles.header, styles.descriptionFlexBox1]}>
        <Pressable style={styles.icon} onPress={() => navigation.goBack()}>
          <Image
            style={styles.icon1}
            contentFit="cover"
            source={require("../assets/icon1.png")}
          />
        </Pressable>
        <Text style={[styles.chickenMaximusSala, styles.ingredients1Typo]}>
          Chicken Maximus Salad
        </Text>
      </View>
      <View style={[styles.image, styles.infoFlexBox]} />
      <View style={[styles.info, styles.infoFlexBox]}>
        <View style={styles.text}>
          <Text style={[styles.protein, styles.carbsTypo]}>Protein</Text>
          <Text style={[styles.g, styles.gTypo]}>90 g</Text>
        </View>
        <View style={styles.textShadowBox}>
          <Text style={[styles.kcal, styles.gTypo]}>Kcal</Text>
          <Text style={[styles.g, styles.gTypo]}>1200 kcal</Text>
        </View>
        <View style={styles.textShadowBox}>
          <Text style={[styles.kcal, styles.gTypo]}>Fat</Text>
          <Text style={[styles.g, styles.gTypo]}>37 g</Text>
        </View>
        <View style={styles.textShadowBox}>
          <Text style={[styles.carbs, styles.carbsTypo]}>Carbs</Text>
          <Text style={[styles.g, styles.gTypo]}>14 g</Text>
        </View>
      </View>
      <View style={[styles.ingredients, styles.descriptionFlexBox]}>
        <Text style={[styles.ingredients1, styles.ingredients1Typo]}>
          Ingredients
        </Text>
        <View style={styles.ingredients2}>
          <View style={[styles.description, styles.descriptionFlexBox]}>
            <Image
              style={styles.ovalIcon}
              contentFit="cover"
              source={require("../assets/oval2.png")}
            />
            <Text style={styles.crasDapibusLorem}>
              Cras dapibus lorem rhoncus faucibus
            </Text>
          </View>
          <View style={[styles.description1, styles.descriptionFlexBox]}>
            <Image
              style={styles.ovalIcon}
              contentFit="cover"
              source={require("../assets/oval2.png")}
            />
            <Text style={styles.crasDapibusLorem}>
              Cras dapibus lorem rhoncus faucibus
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  descriptionFlexBox1: {
    alignItems: "center",
    flexDirection: "row",
  },
  ingredients1Typo: {
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: 1,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorGray_100,
  },
  infoFlexBox: {
    justifyContent: "center",
    marginTop: 30,
    alignItems: "center",
    alignSelf: "stretch",
  },
  carbsTypo: {
    fontSize: FontSize.size_3xs,
    color: Color.colorGray_100,
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: 1,
  },
  gTypo: {
    textAlign: "center",
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: 1,
  },
  descriptionFlexBox: {
    overflow: "hidden",
    alignSelf: "stretch",
  },
  icon1: {
    width: 12,
    height: 12,
  },
  icon: {
    height: 34,
    padding: Padding.p_xs,
    zIndex: 0,
    backgroundColor: Color.rgb255255255,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_8xs,
    flexDirection: "row",
  },
  chickenMaximusSala: {
    position: "absolute",
    marginTop: -12,
    marginLeft: -106,
    top: "50%",
    left: "50%",
    zIndex: 1,
    textAlign: "left",
    color: Color.colorGray_100,
  },
  header: {
    height: 40,
    alignSelf: "stretch",
  },
  image: {
    backgroundColor: "#e1f0f1",
    height: 270,
    marginTop: 30,
    borderRadius: Border.br_8xs,
    justifyContent: "center",
  },
  protein: {
    textAlign: "left",
  },
  g: {
    marginTop: 3,
    color: Color.colorSlategray_100,
  },
  text: {
    minWidth: 60,
    height: 60,
    flex: 1,
    justifyContent: "center",
    backgroundColor: Color.rgb255255255,
    borderRadius: Border.br_8xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    alignItems: "center",
  },
  kcal: {
    color: Color.colorGray_100,
  },
  textShadowBox: {
    marginLeft: 15,
    minWidth: 60,
    height: 60,
    flex: 1,
    justifyContent: "center",
    backgroundColor: Color.rgb255255255,
    borderRadius: Border.br_8xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    alignItems: "center",
  },
  carbs: {
    textAlign: "right",
  },
  info: {
    marginTop: 30,
    justifyContent: "center",
    flexDirection: "row",
  },
  ingredients1: {
    textAlign: "left",
    color: Color.colorGray_100,
  },
  ovalIcon: {
    width: 8,
    height: 8,
  },
  crasDapibusLorem: {
    fontSize: FontSize.size_sm,
    marginLeft: 8,
    color: Color.colorSlategray_100,
    flex: 1,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: 1,
  },
  description: {
    alignItems: "center",
    flexDirection: "row",
  },
  description1: {
    marginTop: 8,
    alignItems: "center",
    flexDirection: "row",
  },
  ingredients2: {
    marginTop: 15,
    alignSelf: "stretch",
  },
  ingredients: {
    marginTop: 30,
  },
  scroll: {
    paddingBottom: Padding.p_61xl,
    alignSelf: "stretch",
  },
});

export default Scroll2;