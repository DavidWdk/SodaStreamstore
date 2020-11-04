import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import * as Yup from "yup";
import Constants from "expo-constants";

import AppPicker from "../components/forms/AppPicker";
import AppForm from "../components/forms/AppForm";
import AppFormField from "../components/forms/AppFormField";
import defaultStyles from "../config/styles";
import SubmitButton from "../components/forms/SubmitButton";
import CustomHeader from "../components/CustomHeader";
import { AppText, AppTitle } from "../components/fonts";

const countries = [
  {
    label: "Nederland",
    value: "nederland",
  },
  {
    label: "België",
    value: "belgie",
  },
  {
    label: "Luxemburg",
    value: "luxemburg",
  },
];

const validationSchema = Yup.object().shape({
  voornaam: Yup.string().required().label("Voornaam"),
  achternaam: Yup.string().required().label("Achternaam"),
  bedrijfsnaam: Yup.string().notRequired().label("Bedrijfsnaam"),
  postcode: Yup.string().max(6).min(6).required().label("Postcode"),
  huisnummer: Yup.number().required().label("Huisnummer"),
  toevoeging: Yup.string().notRequired().label("Toevoeging"),
  land: Yup.string().required().label("Land"),
  email: Yup.string().required().email().label("E-mailadres"),
  wachtwoord: Yup.string().required().min(6).label("Wachtwoord"),
});

//IMPLEMENTEER HIER LATER DE REACT NAVIGATION HEADER.

function RegisterScreen(props) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={[styles.container, defaultStyles.screenContainer]}
    >
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
          style={styles.formContainer}
        >
          <AppFormField
            autoCapitalize="words"
            autoCorrect={false}
            label="Voornaam"
            name="voornaam"
            required
            // placeholder="Voornaam"
          />

          <AppFormField
            autoCapitalize="words"
            autoCorrect={false}
            label="Achternaam"
            name="achternaam"
            required
            // placeholder="Achternaam"
          />

          {/* Als er geen bedrijfsnaam is ingevoerd, maak de 'soort bestelling' particulier. */}
          <AppFormField
            autoCapitalize="words"
            autoCorrect={false}
            label="Bedrijfsnaam"
            name="bedrijfsnaam"
            // placeholder="Bedrijfsnaam"
            subText="Indien u zakelijke klant bent"
          />

          <AppFormField
            autoCapitalize="characters"
            autoCorrect={false}
            label="Postcode"
            name="postcode"
            maxLength={6}
            // placeholder="Postcode"
            required
            width="40%"
          />

          <AppFormField
            autoCorrect={false}
            keyboardType="numeric"
            label="Huisnummer"
            name="huisnummer"
            // placeholder="Huisnummer"
            required
            width="40%"
          />

          <AppFormField
            autoCapitalize="characters"
            autoCorrect={false}
            label="Toevoeging"
            name="toevoeging"
            // placeholder="Huisnummer"
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
              Het e-mailadres en wachtwoord zijn nodig om toegang te krijgen tot
              uw account. Ook zullen we je e-mail gebruiken om contact met je op
              te nemen na een bestelling
            </AppText>

            <AppFormField
              autoCorrect={false}
              label="E-mailadres"
              name="email"
              keyboardType="email-address"
              required
              // placeholder="Huisnummer"
            />

            <AppFormField
              autoCorrect={false}
              label="Wachtwoord"
              name="wachtwoord"
              required
              secureTextEntry
              // placeholder="Huisnummer"
            />

            <SubmitButton title="Maak een account aan" />
          </View>
        </AppForm>
      </ScrollView>
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
});

export default RegisterScreen;
