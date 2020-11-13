import React from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Keyboard,
  ScrollView,
} from "react-native";
import * as Yup from "yup";

import AppForm from "../../components/forms/AppForm";
import AppFormField from "../../components/forms/AppFormField";
import defaultStyles from "../../config/styles";
import SubmitButton from "../../components/forms/SubmitButton";
import CustomHeader from "../../components/CustomHeader";
import ScrollScreen from "../../components/screenStyling/ScrollScreen";

function ChangePassScreen(props) {
  const validationSchema = Yup.object().shape({
    wachtwoord: Yup.string().required().min(6).label("Wachtwoord"),
    nieuwWachtwoord: Yup.string()
      .required()
      .oneOf([Yup.ref("wachtwoord"), null], "Wachtwoorden komen niet overeen")
      .label("Bevestig wachtwoord"),
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={[styles.container, defaultStyles.screenContainer]}
    >
      <ScrollScreen style={styles.section} onPress={Keyboard.dismiss}>
        <CustomHeader title="Wachtwoord veranderen" />

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
              label="Wachtwoord"
              name="wachtwoord"
              required
              secureTextEntry
            />

            <AppFormField
              autoCorrect={false}
              label="Bevestig wachtwoord"
              name="nieuwWachtwoord"
              required
              secureTextEntry
            />

            <SubmitButton title="Verander wachtwoord" />
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
