import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";

import AppForm from "../components/forms/AppForm";
import AppFormField from "../components/forms/AppFormField";
import defaultStyles from "../config/styles";
import SubmitButton from "../components/forms/SubmitButton";
import SecondaryButton from "../components/SecondaryButton";
import CustomHeader from "../components/CustomHeader";
import ScrollScreenKeyboard from "../components/screenStyling/ScrollScreenKeyboard";
import { AppTitle } from "../components/fonts/";
import AuthContext from "../auth/context";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("E-mailadres"),
  password: Yup.string().required().min(4).label("Wachtwoord"),
});

const registerValidation = Yup.object().shape({
  registerMail: Yup.string().required().email().label("E-mailadres"),
});

function LoginScreen(props) {
  const authContext = useContext(AuthContext);

  const handleSubmit = () => {
    //Complete with additional user data in form of an object
    authContext.setUser("User");
  };

  return (
    <ScrollScreenKeyboard
      style={[defaultStyles.screenContainer, styles.container]}
    >
      <CustomHeader title="Inloggen" />

      <View style={styles.section}>
        <AppTitle style={defaultStyles.subtitle}>Bestaande gebruikers</AppTitle>

        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            name="email"
            placeholder="E-mailadres"
            textContentType="emailAddress"
          />

          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            name="password"
            placeholder="Wachtwoord"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="Inloggen" />

          <SecondaryButton title="Wachtwoord vergeten" />
        </AppForm>
      </View>

      <View style={styles.section}>
        <AppTitle style={defaultStyles.subtitle}>Nieuwe gebruikers</AppTitle>

        <AppForm
          initialValues={{ registerMail: "" }}
          //Route the field values when implementing navigation
          onSubmit={(values) => console.log(values)}
          validationSchema={registerValidation}
        >
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            name="registerMail"
            placeholder="E-mailadres"
            textContentType="emailAddress"
          />

          {/* Route the field values when implementing navigation */}
          <SubmitButton title="Maak een account aan" />
        </AppForm>
      </View>
    </ScrollScreenKeyboard>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.blueBackground,
  },
  section: {
    marginTop: 24,
  },
});

export default LoginScreen;
