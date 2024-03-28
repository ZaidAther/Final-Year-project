import * as React from "react";
import { Text, StyleSheet, Pressable, View, Linking } from "react-native";
import SignUpForm from "../components/SignUpForm";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const SignUp = () => {
  return (
    <View style={[styles.signup, styles.signupFlexBox]}>
      <View style={[styles.container, styles.signupFlexBox]}>
        <SignUpForm />
        <View style={[styles.socialMedia, styles.signupFlexBox]}>
          <Text style={styles.continueWithAccounts}>
            Continue With Accounts
          </Text>
          <View style={[styles.accounts, styles.signupFlexBox]}>
            <Pressable
              style={[styles.googleButton, styles.buttonLayout]}
              onPress={() => Linking.openURL("www.google.com")}
            >
              <Text style={[styles.google, styles.googleTypo]}>Google</Text>
            </Pressable>
            <View style={styles.facebookButton}>
              <View style={[styles.facebookButtonChild, styles.buttonLayout]} />
              <Text style={[styles.facebook, styles.googleTypo]}>facebook</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({


  signupFlexBox: {
    justifyContent: "center",
    alignItems: "center",

  },
  buttonLayout: {
    borderRadius: Border.br_3xs,
    width: 315,
  },
  googleTypo: {
    textAlign: "center",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 3,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppins,
  },
  continueWithAccounts: {
    fontSize: FontSize.size_base,
    letterSpacing: -0.2,
    fontWeight: "500",
    color: Color.colorDarkgray,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
  },
  google: {
    color: "#d44638",
    width: 148,
  },
  googleButton: {
    backgroundColor: "rgba(212, 70, 56, 0.25)",
    height: 50,
    width: 315,
    justifyContent: "center",
    alignItems: "center",
  },
  facebookButtonChild: {
    backgroundColor: "rgba(66, 103, 178, 0.25)",
    height: 57,
    width: 315,
  },
  facebook: {
    color: "#4267b2",
    width: 196,
    marginTop: -39,
  },
  facebookButton: {
    justifyContent: "flex-end",
    display: "none",
    marginTop: 10,
    width: 315,
    alignItems: "center",
  },
  accounts: {
    marginTop: 23,
  },
  socialMedia: {
    marginTop: 30,
  },
  container: {
    paddingTop: 20,

  },
  signup: {
    borderRadius: 18,
    backgroundColor: "#f7f8fa",
    flex: 1,
    width: "100%",
    height: 736,
    overflow: "hidden",
    flexDirection: "row",
  },
});

export default SignUp;
