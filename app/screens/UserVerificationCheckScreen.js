import React from "react";
import { View, StyleSheet } from "react-native";
import * as Yup from "yup";

import i18n from "i18n-js";

import defaultStyles from "../config/styles";
import AppFormField from "../components/forms/AppFormField";
import ScrollScreenKeyboard from "../components/screenStyling/ScrollScreenKeyboard";
import { AppText, AppTitle } from "../components/fonts";
import CustomHeader from "../components/CustomHeader";
import SecondaryButton from "../components/SecondaryButton";
import AppButton from "../components/AppButton";
import AppForm from "../components/forms/AppForm";
import SubmitButton from "../components/forms/SubmitButton";

const userMail = "david.widlak@gmail.com";
const userName = "David";

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .required()
    .matches(/(ja|david)/)
    .label("Wachtwoord"),
});

function UserVerificationCheckScreen({ navigation }) {
  return (
    <ScrollScreenKeyboard style={defaultStyles.screenContainer}>
      <CustomHeader title={i18n.t("quickCheck")} />
      <AppTitle>{i18n.t("isItYou")}{userName}?</AppTitle>
      <AppText style={styles.textBlock}>
        {i18n.t("verificationDesc")}
      </AppText>
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={() => navigation.navigate("Checkout")}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          name="password"
          placeholder={i18n.t("password")}
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title={i18n.t("proceed")} />
      </AppForm>

      <View style={styles.secondaryOptions}>
        <SecondaryButton
          title={i18n.t("switchAcc")}
          style={styles.secondaryButton}
        />
        <SecondaryButton
          title={i18n.t("forgotPass")}
          style={styles.secondaryButton}
        />
      </View>
    </ScrollScreenKeyboard>
  );
}

const styles = StyleSheet.create({
  secondaryButton: {
    width: undefined,
  },
  secondaryOptions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textBlock: {
    marginTop: 4,
  },
});

export default UserVerificationCheckScreen;
