//TO DO:
//CONTROLEER LAND INVOER, ER KOMT EEN ERROR ZODRA JE EERST EEN
//LAND KIEST EN DAARNA GEEN LAND PAKT. OOK KOMT ER GEEN ERROR ALS JE NIKS KIEST
//ZORG DAT NUMMERS NIET TOEGESTAAN ZIJN WAAR NODIG?
//.MATCHES --- DOE JE ZO CIJFERS VOORKOMEN? /^[1234567890]+$/

//IMPLEMENTEER HIER LATER DE REACT NAVIGATION HEADER.
import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import * as Yup from "yup";

import i18n from "i18n-js";

import AppPicker from "../components/forms/AppPicker";
import AppForm from "../components/forms/AppForm";
import AppFormField from "../components/forms/AppFormField";
import defaultStyles from "../config/styles";
import SubmitButton from "../components/forms/SubmitButton";
import CustomHeader from "../components/CustomHeader";
import { AppText, AppTitle } from "../components/fonts";
import countries from "../../assets/placeholderData/countries";
import Screen from "../components/screenStyling/Screen";

const validationSchema = Yup.object().shape({
  voornaam: Yup.string()
    .required(`${i18n.t("requiredField")}`)
    .label(`${i18n.t("firstName")}`),
  achternaam: Yup.string()
    .required(`${i18n.t("requiredField")}`)
    .label(`${i18n.t("lastName")}`),
  bedrijfsnaam: Yup.string()
    .notRequired()
    .label(`${i18n.t("companyName")}`),
  postcode: Yup.string()
    .max(8, `${i18n.t("maxLength")}`)
    .min(4, `${i18n.t("minLength")}`)
    .required(`${i18n.t("requiredField")}`)
    .label(`${i18n.t("zipCode")}`),
  huisnummer: Yup.number(`${i18n.t("numberNotice")}`)
    .required(`${i18n.t("requiredField")}`)
    .label(`${i18n.t("houseNum")}`),
  toevoeging: Yup.string()
    .notRequired()
    .label(`${i18n.t("addition")}`),
  //Placeholder van land is een object, maar een select-item is een string
  //Switch lijkt niet te werken?
  land: Yup.lazy((value) => {
    switch (typeof value) {
      case "object":
        return Yup.object().label(`${i18n.t("country")}`);
      case "string":
        return Yup.string()
          .required(`${i18n.t("requiredField")}`)
          .label(`${i18n.t("country")}`);
      default:
        return Yup.object();
    }
  }),
  email: Yup.string()
    .required(`${i18n.t("requiredField")}`)
    .email(`${i18n.t("validMail")}`)
    .label(`${i18n.t("email")}`),
  wachtwoord: Yup.string()
    .required(`${i18n.t("requiredField")}`)
    .min(6, `${i18n.t("minLength")}`)
    .label(`${i18n.t("password")}`),
});

function RegisterScreen({ navigation }) {
  const handleSubmit = () => {
    navigation.navigate("Home");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={[styles.container, defaultStyles.screenContainer]}
    >
      {/* <Screen> */}
      <ScrollView style={styles.section} onPress={Keyboard.dismiss}>
        <CustomHeader title="Account aanmaken" topPaddingAdjustment />
        <AppTitle style={defaultStyles.subtitle}>
          Persoonlijke gegevens
        </AppTitle>

        <AppForm
          initialValues={{
            voornaam: "",
            achternaam: "",
            bedrijfsnaam: "",
            postcode: "",
            huisnummer: "",
            land: "",
            toevoeging: "",
            email: "",
            wachtwoord: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <AppFormField
            autoCapitalize="words"
            autoCorrect={false}
            label={i18n.t("firstName")}
            name="voornaam"
            required
          />

          <AppFormField
            autoCapitalize="words"
            autoCorrect={false}
            label={i18n.t("lastName")}
            name="achternaam"
            required
          />

          {/* Als er geen bedrijfsnaam is ingevoerd, maak de 'soort bestelling' particulier. */}
          <AppFormField
            autoCapitalize="words"
            autoCorrect={false}
            label={i18n.t("companyName")}
            name="bedrijfsnaam"
            subText={i18n.t("ifBusinessCustomer")}
          />

          <AppFormField
            autoCapitalize="characters"
            autoCorrect={false}
            label={i18n.t("zipCode")}
            name="postcode"
            maxLength={6}
            required
            width="40%"
          />

          <AppFormField
            autoCorrect={false}
            keyboardType="numeric"
            label={i18n.t("houseNum")}
            name="huisnummer"
            required
            width="40%"
          />

          <AppFormField
            autoCapitalize="characters"
            autoCorrect={false}
            label={i18n.t("addition")}
            name="toevoeging"
            width="40%"
          />

          {/* Geeft het string terug of object? */}
          <AppPicker
            label={i18n.t("country")}
            name="land"
            selection={countries}
            placeholder={i18n.t("selectCountry")}
            required
          />

          <View style={styles.section}>
            <AppTitle style={defaultStyles.subtitle}>
              {i18n.t("loginData")}
            </AppTitle>
            <AppText style={defaultStyles.text}>
              {i18n.t("loginDataDesc")}
            </AppText>

            <AppFormField
              autoCorrect={false}
              label={i18n.t("email")}
              name="email"
              keyboardType="email-address"
              required
            />

            <AppFormField
              autoCorrect={false}
              label={i18n.t("password")}
              name="wachtwoord"
              required
              secureTextEntry
            />

            <SubmitButton title={i18n.t("createAcc")} />
          </View>
        </AppForm>
      </ScrollView>
      {/* </Screen> */}
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
  },
  whitespace: {
    marginBottom: 32,
  },
});

export default RegisterScreen;
