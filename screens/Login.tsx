// import * as React from "react";
import React, { useState } from "react";
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
import { TouchableOpacity } from "react-native-gesture-handler";

const Login = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [isPressed, setIsPressed] = useState(false); // State to track button press

  const handlePress = () => {
    setIsPressed(true); // Set the button press state to true
    Linking.openURL("https://www.google.com/");
  };
  setTimeout(() => {
    setIsPressed(false); // Reset the button press state to false after 1 second
  }, 1000);

  

  return (
    <View style={[styles.login, styles.logoFlexBox]}>
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
            <Text style={[styles.forgetPassword, styles.login1Typo]}>
              Forget Password ?
            </Text>
            <TouchableHighlight
              style={[styles.loginButton, styles.buttonShadowBox]}
              underlayColor="#01607A"
              onPress={() => navigation.navigate("Gender")}
            >
              <>
                <Text style={[styles.login1, styles.login1Typo]}>Login</Text>
                <Text style={[styles.login2, styles.login2Typo]}>LOGIN</Text>
              </>
            </TouchableHighlight>
            <Text style={styles.login3}>Login</Text>
          </View>
          <View style={styles.lowerText}>
            <Text style={styles.createNewAccountContainer}>
              <Text style={styles.createNewAccount}>
                <Text style={styles.createNewAccount1}>
                  Create New Account?
                </Text>
                <Text style={styles.text}>{` `}</Text>
              </Text>
              <Text style={styles.signUp}>Sign up</Text>
            </Text>
            <View style={styles.lowerTextChild} />
          </View>
        </View>
        <View style={[styles.socialMedia, styles.inputFieldsFlexBox]}>
          <Text style={[styles.continueWithAccounts, styles.login1Typo]}>
            Continue With Accounts
          </Text>
          <View style={styles.accounts}>
            <TouchableHighlight
              style={[styles.googleButton, styles.buttonShadowBox]}
              onPress={handlePress}
              onLongPress={handlePress}
              underlayColor="#01607A"
            >
              <Text
                style={[
                  styles.google,
                  // Conditionally change text color based on button press state
                  { color: isPressed ? "#FFFFFF" : Color.colorDarkslategray_100 },
                ]}
              >
                Google
              </Text>
            </TouchableHighlight>
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
  login1Typo: {
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
  login2Typo: {
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
    zIndex: 0,
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    justifyContent: "center",
  },
  password: {
    paddingVertical: Padding.p_4xs,
    zIndex: 1,
    marginTop: 27,
    fontSize: FontSize.size_sm,
    fontWeight: "500",
  },
  forgetPassword: {
    letterSpacing: -0.3,
    opacity: 0.7,
    zIndex: 2,
    color: Color.colorDarkslategray,
    marginTop: 27,
    fontSize: FontSize.size_sm,
    fontWeight: "500",
  },
  login1: {
    letterSpacing: 2.8,
    color: Color.colorFirebrick_100,
    display: "none",
    fontSize: FontSize.size_sm,
    fontWeight: "600",
  },
  login2: {
    color: Color.colorWhitesmoke_100,
  },
  loginButton: {
    backgroundColor: Color.colorCadetblue,
    paddingHorizontal: Padding.p_117xl,
    zIndex: 3,
    marginTop: 27,
    height: 45,
    paddingVertical: Padding.p_smi,
    borderRadius: Border.br_mini,
  },
  login3: {
    position: "absolute",
    marginTop: -126,
    marginLeft: -48.5,
    top: "50%",
    left: "50%",
    fontSize: 38,
    letterSpacing: -1.5,
    lineHeight: 48,
    zIndex: 4,
    display: "none",
    color: Color.colorDarkslategray,
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
  },
  inputFields: {
    paddingTop: Padding.p_31xl,
    paddingBottom: Padding.p_mini,
  },
  createNewAccount1: {
    fontWeight: "500",
    fontFamily: FontFamily.poppins,
  },
  text: {
    fontFamily: FontFamily.poppins,
  },
  createNewAccount: {
    color: Color.colorDarkgray,
  },
  signUp: {
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
  },
  createNewAccountContainer: {
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

  googleButton: {
    paddingHorizontal: Padding.p_103xl,
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
  login: {
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

export default Login;
