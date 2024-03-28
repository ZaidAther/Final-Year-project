import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  TouchableHighlight,
} from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const SignUpForm = () => {
  return (
    <View style={[styles.conent, styles.logoFlexBox]}>
      <View style={[styles.logo, styles.logoFlexBox]}>
        <Image
          style={styles.path2Icon}
          contentFit="cover"
          source={require("../assets/path-2.png")}
        />
        <Image
          style={styles.path3Icon}
          contentFit="cover"
          source={require("../assets/path-3.png")}
        />
        <Image
          style={styles.path3Icon}
          contentFit="cover"
          source={require("../assets/path-3.png")}
        />
        <Image
          style={styles.path3Icon}
          contentFit="cover"
          source={require("../assets/path-3.png")}
        />
        <Text style={styles.arMenuSavour}> ACTIVETRACK</Text>
      </View>
      <View style={[styles.inputFields, styles.logoFlexBox]}>
        <TextInput
          style={[styles.enterYourEmail, styles.passwordTypo]}
          placeholder="Enter Your Email"
          placeholderTextColor="#c2c3cb"
        />
        <TextInput
          style={[styles.password, styles.passwordTypo]}
          placeholder="Password"
          placeholderTextColor="#c2c3cb"
        />
        <Text style={styles.login}>Login</Text>
        <Text style={[styles.forgetPassword, styles.registerTypo]}>
          Forget Password ?
        </Text>
        <TouchableHighlight
          style={[styles.loginButton, styles.passwordLayout]}
          underlayColor="#fff"
          onPress={() => {}}
        >
          <Text style={[styles.register, styles.registerTypo]}>Register</Text>
        </TouchableHighlight>
      </View>
      <View style={[styles.inputFields, styles.logoFlexBox]}>
        <Text style={styles.alreadyHaveAnContainer}>
          <Text style={styles.alreadyHaveAnAccount}>
            <Text style={styles.alreadyHaveAn}>Already Have An Account?</Text>
            <Text style={styles.text}>{` `}</Text>
          </Text>
          <Text style={styles.signIn}>Sign In</Text>
        </Text>
        <View style={styles.lowerTextChild} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  
  logoFlexBox: {
    justifyContent: "center",
    alignItems: "center",

  },
  passwordTypo: {
    fontSize: FontSize.size_sm,
    fontWeight: "500",
  },
  registerTypo: {
    letterSpacing: -0.3,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
  },
  passwordLayout: {
    height: 50,
    width: 325,
  },
  path2Icon: {
    width: 21,
    display: "none",
    height: 43,
  },
  path3Icon: {
    width: 1,
    marginLeft: 2,
    display: "none",
    height: 43,
  },
  arMenuSavour: {
    fontSize: FontSize.size_2xl,
    letterSpacing: 3.2,
    lineHeight: 26,
    color: Color.colorGray,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    marginLeft: 2,
  },
  logo: {
    marginBottom: 10,
    width: 197,
    flexDirection: "row",
  },
  enterYourEmail: {
    paddingHorizontal: 23,
    paddingVertical: 12,
    height: 50,
    width: 325,
    backgroundColor: Color.colorWhite,
    borderRadius: 13,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppins,
  },
  password: {
    paddingHorizontal: 23,
    marginTop: 27,
    height: 50,
    width: 325,
    backgroundColor: Color.colorWhite,
    borderRadius: 13,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppins,
  },
  login: {
    fontSize: FontSize.size_19xl,
    letterSpacing: -1.5,
    lineHeight: 48,
    textAlign: "center",
    color: Color.colorDarkslategray,
    marginTop: 27,
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    display: "none",
  },
  forgetPassword: {
    opacity: 0.7,
    color: Color.colorDarkslategray,
    marginTop: 27,
    fontSize: FontSize.size_sm,
    fontWeight: "500",
  },
  register: {
    color: Color.bG,
    fontSize: FontSize.size_base,
    fontWeight: "600",
  },
  loginButton: {
    borderRadius: Border.br_sm,
    backgroundColor: Color.colorGray,
    marginTop: 27,
    justifyContent: "center",
    alignItems: "center",
  },
  inputFields: {
    marginTop: 40,
    alignSelf: "stretch",
    alignItems: "center",
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
    width: 325,
    height: 2,
    opacity: 0.3,
    marginTop: 35,
  },
  conent: {
    alignSelf: "stretch",
    alignItems: "center",
  },
});

export default SignUpForm;
