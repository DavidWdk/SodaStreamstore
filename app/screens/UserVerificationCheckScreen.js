import React from "react";
import { View, StyleSheet } from "react-native";
import * as Yup from "yup";

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
  password: Yup.string().required().label("Wachtwoord"),
});

function UserVerificationCheckScreen(props) {
  return (
    <ScrollScreenKeyboard style={defaultStyles.screenContainer}>
      <CustomHeader title="Korte Controle" />
      <AppTitle>Ben jij het nog, {userName}?</AppTitle>
      <AppText style={styles.textBlock}>
        Om er zeker van te zijn dat jij de gebruiker bent die gekoppeld is aan
        het huidig ingelogde account dien je jouw wachtwoord in te voeren
      </AppText>
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          name="password"
          placeholder="Wachtwoord"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Verder" />
      </AppForm>

      <View style={styles.secondaryOptions}>
        <SecondaryButton
          title="Wissel account"
          style={styles.secondaryButton}
        />
        <SecondaryButton
          title="Wachtwoord vergeten?"
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
