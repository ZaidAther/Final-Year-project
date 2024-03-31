import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Pressable,
  TouchableHighlight,
  Linking,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Padding, FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const SignUp = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.signup, styles.logoFlexBox]}>
      <View style={styles.formContainer}>
        <View style={styles.conent}>
          <View style={[styles.logo, styles.logoFlexBox]}>
            <Text style={styles.activetrack}> ACTIVETRACK</Text>
          </View>
          <View style={[styles.inputFields, styles.inputFieldsFlexBox]}>
            <TextInput
              style={[styles.enterYourEmail, styles.passwordShadowBox]}
              placeholder="Enter Your Email"
              placeholderTextColor="#c2c3cb"
            />
            <TextInput
              style={[styles.password, styles.passwordShadowBox]}
              placeholder="Password"
              placeholderTextColor="#c2c3cb"
            />
            <Text style={[styles.forgetPassword, styles.loginTypo]}>
              Forget Password ?
            </Text>
            <TouchableHighlight
              style={[styles.loginButton, styles.buttonShadowBox]}
              underlayColor="#fff"
              onPress={() => navigation.navigate("Login")}
            >
              <>
                <Text style={[styles.login, styles.loginTypo]}>Login</Text>
                <Text style={[styles.register, styles.google1Typo]}>
                  REGISTER
                </Text>
              </>
            </TouchableHighlight>
          </View>
          <View style={styles.lowerText}>
            <Text style={styles.alreadyHaveAnContainer}>
              <Text style={styles.alreadyHaveAnAccount}>
                <Text style={styles.alreadyHaveAn}>
                  Already Have An Account?
                </Text>
                <Text style={styles.text}>{` `}</Text>
              </Text>
              <Text style={styles.signIn}>Sign In</Text>
            </Text>
            <View style={styles.lowerTextChild} />
          </View>
        </View>
        <View style={[styles.socialMedia, styles.inputFieldsFlexBox]}>
          <Text style={[styles.continueWithAccounts, styles.loginTypo]}>
            Continue With Accounts
          </Text>
          <View style={styles.accounts}>
            <Pressable
              style={[styles.googleButton, styles.buttonShadowBox]}
              onPress={() => Linking.openURL("https://www.google.com/")}
            >
              <Text style={styles.google} selectionColor="#FFFFFF">
                Google
              </Text>
              <Text style={[styles.google1, styles.google1Typo]}>
                <Text style={styles.g}>G</Text>
                <Text style={styles.o}>o</Text>
                <Text style={styles.o1}>o</Text>
                <Text style={styles.g}>g</Text>
                <Text style={styles.l}>l</Text>
                <Text style={styles.o}>e</Text>
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logoFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  inputFieldsFlexBox: {
    width: 315,
    justifyContent: "center",
    alignItems: "center",
  },
  passwordShadowBox: {
    paddingHorizontal: Padding.p_lgi,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.15)",
    borderRadius: 13,
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    height: 45,
    backgroundColor: Color.colorWhite,
    fontFamily: FontFamily.poppins,
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  loginTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppins,
  },
  buttonShadowBox: {
    paddingVertical: Padding.p_smi,
    borderRadius: Border.br_mini,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.15)",
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  google1Typo: {
    marginLeft: 10,
    textTransform: "uppercase",
    letterSpacing: 3,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
  },
  activetrack: {
    fontSize: FontSize.size_2xl,
    letterSpacing: 3.2,
    lineHeight: 26,
    color: Color.colorGray,
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
  },
  logo: {
    width: 197,
    justifyContent: "center",
    alignItems: "center",
  },
  enterYourEmail: {
    paddingVertical: Padding.p_6xs,
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    justifyContent: "center",
  },
  password: {
    paddingVertical: Padding.p_4xs,
    marginTop: 27,
    fontSize: FontSize.size_sm,
    fontWeight: "500",
  },
  forgetPassword: {
    letterSpacing: -0.3,
    opacity: 0.7,
    color: Color.colorDarkslategray,
    marginTop: 27,
    fontSize: FontSize.size_sm,
    fontWeight: "500",
  },
  login: {
    letterSpacing: 2.8,
    color: Color.colorFirebrick_100,
    display: "none",
    fontSize: FontSize.size_sm,
    fontWeight: "600",
  },
  register: {
    color: Color.colorWhitesmoke_100,
  },
  loginButton: {
    backgroundColor: Color.colorCadetblue,
    // paddingHorizontal: Padding.p_117xl,
    marginTop: 27,
    height: 45,
    paddingVertical: Padding.p_smi,
    borderRadius: Border.br_mini,
  },
  inputFields: {
    paddingTop: Padding.p_31xl,
    paddingBottom: Padding.p_mini,
  },
  alreadyHaveAn: {
    fontWeight: "500",
    fontFamily: FontFamily.poppins,
  },
  text: {
    fontFamily: FontFamily.poppins,
  },
  alreadyHaveAnAccount: {
    color: Color.colorDarkgray,
  },
  signIn: {
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
  },
  alreadyHaveAnContainer: {
    fontSize: FontSize.size_base,
    textAlign: "center",
  },
  lowerTextChild: {
    borderStyle: "solid",
    borderColor: Color.colorSilver,
    borderTopWidth: 2,
    height: 2,
    opacity: 0.3,
    marginTop: 25,
    alignSelf: "stretch",
  },
  lowerText: {
    paddingTop: Padding.p_3xs,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  conent: {
    justifyContent: "center",
    alignItems: "center",
  },
  continueWithAccounts: {
    letterSpacing: -0.2,
    color: Color.colorDarkgray,
    fontSize: FontSize.size_base,
    fontWeight: "500",
  },
  google: {
    color: Color.colorDarkslategray_100,
    textTransform: "uppercase",
    letterSpacing: 3,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
  },
  g: {
    color: Color.colorDodgerblue,
  },
  o: {
    color: Color.colorTomato,
  },
  o1: {
    color: Color.colorGold,
  },
  l: {
    color: Color.colorMediumseagreen,
  },
  google1: {
    display: "none",
  },
  googleButton: {
    // paddingHorizontal: Padding.p_103xl,
    paddingVertical: Padding.p_smi,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorWhite,
  },
  accounts: {
    justifyContent: "flex-end",
    marginTop: 30,
    alignSelf: "stretch",
    alignItems: "center",
  },
  socialMedia: {
    marginTop: 25,
  },
  formContainer: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  signup: {
    borderRadius: Border.br_lg,
    backgroundColor: Color.colorWhitesmoke_100,
    width: "100%",
    height: 736,
    overflow: "hidden",
    paddingHorizontal: Padding.p_21xl,
    paddingVertical: Padding.p_31xl,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

export default SignUp;
