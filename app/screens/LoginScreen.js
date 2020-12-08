import React, { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";

import i18n from "i18n-js";

import AppForm from "../components/forms/AppForm";
import AppFormField from "../components/forms/AppFormField";
import defaultStyles from "../config/styles";
import SubmitButton from "../components/forms/SubmitButton";
import SecondaryButton from "../components/SecondaryButton";
import CustomHeader from "../components/CustomHeader";
import ScrollScreenKeyboard from "../components/screenStyling/ScrollScreenKeyboard";
import { AppTitle, AppText } from "../components/fonts/";
import AuthContext from "../auth/context";
import AppButton from "../components/AppButton";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("E-mailadres"),
  password: Yup.string().required().label("Wachtwoord"),
});

function LoginScreen({ navigation }) {
  const authContext = useContext(AuthContext);

  const [registerError, setRegisterError] = useState("");
  const [registerMail, setRegisterMail] = useState("");

  const handleRegister = () => {
    if (registerMail.includes("@", "." && registerMail.length > 3)) {
      navigation.navigate("Register", { registerMail });
    } else {
      setRegisterError(`${i18n.t("useValidEmail")}`);
    }
  };

  const handleSubmit = () => {
    console.log("handleSubmit");
    // authContext.setUser("User");
    // navigation.navigate("Home");
  };

  return (
    <ScrollScreenKeyboard
      style={[defaultStyles.screenContainer, styles.container]}
    >
      <CustomHeader title={i18n.t("login")} />

      <View style={styles.section}>
        <AppTitle style={defaultStyles.subtitle}>
          {i18n.t("existingUsers")}
        </AppTitle>

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
            placeholder={i18n.t("email")}
            textContentType="emailAddress"
          />

          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            name="password"
            placeholder={i18n.t("password")}
            secureTextEntry
            textContentType="password"
          />
        </AppForm>
        <SubmitButton title={i18n.t("login")} />
        <SecondaryButton title={i18n.t("forgotPass")} />
      </View>

      <View style={styles.section}>
        <AppTitle style={defaultStyles.subtitle}>{i18n.t("newUsers")}</AppTitle>

        <AppForm initialValues={{ registerMail: "" }}>
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            name="registerMail"
            placeholder={i18n.t("email")}
            textContentType="emailAddress"
            onChangeText={(text) => setRegisterMail(text)}
          />
          {registerError.length > 0 && (
            <AppText style={styles.error}>{registerError}</AppText>
          )}
          <AppButton title={i18n.t("createAcc")} onPress={handleRegister} />
        </AppForm>
      </View>
    </ScrollScreenKeyboard>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.blueBackground,
  },
  error: {
    color: "red",
    fontSize: 14,
    marginTop: 2,
  },
  section: {
    marginTop: 24,
  },
});

export default LoginScreen;
