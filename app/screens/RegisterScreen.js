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
  voornaam: Yup.string().required().label("Voornaam"),
  achternaam: Yup.string().required().label("Achternaam"),
  bedrijfsnaam: Yup.string().notRequired().label("Bedrijfsnaam"),
  postcode: Yup.string().max(4).min(8).required().label("Postcode"),
  huisnummer: Yup.number().required().label("Huisnummer"),
  toevoeging: Yup.string().notRequired().label("Toevoeging"),
  land: Yup.string().required().label("Land"),
  email: Yup.string().required().email().label("E-mailadres"),
  wachtwoord: Yup.string().required().min(6).label("Wachtwoord"),
});

function RegisterScreen(props) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={[styles.container, defaultStyles.screenContainer]}
    >
      <Screen>
        <ScrollView style={styles.section} onPress={Keyboard.dismiss}>
          <CustomHeader title="Account aanmaken" />
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
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}
          >
            <AppFormField
              autoCapitalize="words"
              autoCorrect={false}
              label="Voornaam"
              name="voornaam"
              required
            />

            <AppFormField
              autoCapitalize="words"
              autoCorrect={false}
              label="Achternaam"
              name="achternaam"
              required
            />

            {/* Als er geen bedrijfsnaam is ingevoerd, maak de 'soort bestelling' particulier. */}
            <AppFormField
              autoCapitalize="words"
              autoCorrect={false}
              label="Bedrijfsnaam"
              name="bedrijfsnaam"
              subText="Indien u zakelijke klant bent"
            />

            <AppFormField
              autoCapitalize="characters"
              autoCorrect={false}
              label="Postcode"
              name="postcode"
              maxLength={6}
              required
              width="40%"
            />

            <AppFormField
              autoCorrect={false}
              keyboardType="numeric"
              label="Huisnummer"
              name="huisnummer"
              required
              width="40%"
            />

            <AppFormField
              autoCapitalize="characters"
              autoCorrect={false}
              label="Toevoeging"
              name="toevoeging"
              width="40%"
            />

            <AppPicker
              label="Land"
              name="land"
              selection={countries}
              placeholder="Selecteer een land"
              required
            />

            <View style={styles.section}>
              <AppTitle style={defaultStyles.subtitle}>Inloggegevens</AppTitle>
              <AppText style={defaultStyles.text}>
                Het e-mailadres en wachtwoord zijn nodig om toegang te krijgen
                tot uw account. Ook zullen we je e-mail gebruiken om contact met
                je op te nemen na een bestelling
              </AppText>

              <AppFormField
                autoCorrect={false}
                label="E-mailadres"
                name="email"
                keyboardType="email-address"
                required
              />

              <AppFormField
                autoCorrect={false}
                label="Wachtwoord"
                name="wachtwoord"
                required
                secureTextEntry
              />

              <SubmitButton title="Maak een account aan" />
            </View>
          </AppForm>
        </ScrollView>
      </Screen>
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
