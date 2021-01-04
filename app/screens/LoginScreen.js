import React, { useContext } from "react";
import { StyleSheet, View, Platform } from "react-native";
import * as Yup from "yup";

import i18n from "i18n-js";

import AppForm from "../components/forms/AppForm";
import AppFormField from "../components/forms/AppFormField";
import defaultStyles from "../config/styles";
import SecondaryButton from "../components/SecondaryButton";
import CustomHeader from "../components/CustomHeader";
import ScrollScreenKeyboard from "../components/screenStyling/ScrollScreenKeyboard";
import { AppTitle } from "../components/fonts/";
import AuthContext from "../auth/context";
import AppButton from "../components/AppButton";
import SubmitButton from "../components/forms/SubmitButton";
import userData from "../../assets/placeholderData/userData";
import storage from "../auth/storage";
import { StackActions } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required(`${i18n.t("requiredField")}`)
    .email(`${i18n.t("validMail")}`)
    .label(`${i18n.t("email")}`),
  password: Yup.string()
    .required(`${i18n.t("requiredField")}`)
    .label(`${i18n.t("password")}`),
});

function LoginScreen({ navigation, route }) {
  const authContext = useContext(AuthContext);

  const handleRegister = () => {
    navigation.navigate("Register");
  };

  const handleRouting = () => {
    if (route.params?.checkout === true) {
      navigation.navigate("Checkout");
    } else {
      navigation.navigate("Home");
    }
  };

  const handleSubmit = () => {
    authContext.setUser(userData);
    storage.storeToken("Token");
    const popAction = StackActions.pop(5);
    navigation.dispatch(popAction);
    handleRouting();
    // if (!route.params?.checkout) {

    // }
  };

  return (
    <ScrollScreenKeyboard
      style={[defaultStyles.screenContainer, styles.container]}
    >
      <CustomHeader title={i18n.t("login")} style={styles.header} />

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
          <SubmitButton title="Login" />
        </AppForm>
        <SecondaryButton
          title={i18n.t("forgotPass")}
          onPress={() => navigation.replace("ForgotPassword")}
        />
      </View>

      <View style={styles.section}>
        <AppTitle style={defaultStyles.subtitle}>{i18n.t("newUsers")}</AppTitle>
        <AppButton title={i18n.t("createAcc")} onPress={handleRegister} />
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
  header: {
    paddingTop: Platform.OS === "ios" ? 10 : 40,
  },
  section: {
    marginTop: 24,
  },
});

export default LoginScreen;
