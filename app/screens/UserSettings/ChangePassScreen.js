import React from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Keyboard,
  ScrollView,
} from "react-native";
import * as Yup from "yup";

import i18n from "i18n-js";

import AppForm from "../../components/forms/AppForm";
import AppFormField from "../../components/forms/AppFormField";
import defaultStyles from "../../config/styles";
import SubmitButton from "../../components/forms/SubmitButton";
import CustomHeader from "../../components/CustomHeader";
import ScrollScreen from "../../components/screenStyling/ScrollScreen";

function ChangePassScreen(props) {
  const validationSchema = Yup.object().shape({
    wachtwoord: Yup.string().required(`${i18n.t("requiredField")}`).min(6, `${i18n.t("minLength")}`).label(`${i18n.t("password")}`),
    nieuwWachtwoord: Yup.string()
      .required(`${i18n.t("requiredField")}`)
      .oneOf([Yup.ref("wachtwoord"), null], `${i18n.t("notIdentical")}`)
      .label(`${i18n.t("confirmPass")}`),
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={[styles.container, defaultStyles.screenContainer]}
    >
      <ScrollScreen style={styles.section} onPress={Keyboard.dismiss}>
        <CustomHeader title={i18n.t("changePass")} />

        <AppForm
          initialValues={{
            wachtwoord: "",
            bevestigWachtwoord: "",
          }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <View style={styles.container}>
            <AppFormField
              autoCorrect={false}
              label={i18n.t("password")}
              name="wachtwoord"
              required
              secureTextEntry
            />

            <AppFormField
              autoCorrect={false}
              label={i18n.t("confirmPass")}
              name="nieuwWachtwoord"
              required
              secureTextEntry
            />

            <SubmitButton title={i18n.t("changePassBtn")} />
          </View>
        </AppForm>
      </ScrollScreen>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.blueBackground,
    flex: 1,
  },
  section: {
    paddingVertical: 24,
    paddingBottom: 24,
  },
});

export default ChangePassScreen;
