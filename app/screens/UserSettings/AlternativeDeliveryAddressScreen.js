//TO DO
//GEGEVENS INVULLEN VAN GEBRUIKER
//KIJK VERDER NAAR REGISTERSCREEN

import React from "react";
import {
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import * as Yup from "yup";

import AppPicker from "../../components/forms/AppPicker";
import AppForm from "../../components/forms/AppForm";
import AppFormField from "../../components/forms/AppFormField";
import defaultStyles from "../../config/styles";
import SubmitButton from "../../components/forms/SubmitButton";
import CustomHeader from "../../components/CustomHeader";
import countries from "../../../assets/placeholderData/countries";
import AppSwitch from "../../components/AppSwitch";
import Screen from "../../components/screenStyling/Screen";

const validationSchema = Yup.object().shape({
  anderAdres: Yup.boolean(),
  bedrijfsnaam: Yup.string().notRequired().label("Bedrijfsnaam"),
  verzendRef1: Yup.string().notRequired().label("Verzend referentie 1"),
  verzendRef2: Yup.string().notRequired().label("Verzend referentie 2"),
  voornaam: Yup.string().required().label("Voornaam"),
  achternaam: Yup.string().required().label("Achternaam"),
  land: Yup.string().required().label("Land"),
  straatnaam: Yup.string().required().label("Straatnaam"),
  postcode: Yup.string().max(4).min(8).required().label("Postcode"),
  huisnummer: Yup.number().required().label("Huisnummer"),
  toevoeging: Yup.string().notRequired().label("Toevoeging"),
  woonPlaats: Yup.string().required().label("Woonplaats"),
});

function AlternativeDeliveryAddressScreen(props) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={[styles.container, defaultStyles.screenContainer]}
    >
      <Screen>
        <ScrollView style={styles.section} onPress={Keyboard.dismiss}>
          <CustomHeader
            title="Factuurgegevens"
            style={defaultStyles.lineWhitespace}
          />

          <AppForm
            initialValues={{
              anderAdres: false,
              bedrijfsnaam: "",
              verzendRef1: "",
              verzendRef2: "",
              voornaam: "",
              achternaam: "",
              land: "",
              straat: "",
              postcode: "",
              huisnummer: "",
              toevoeging: "",
              straatnaam: "",
            }}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}
            style={styles.formContainer}
          >
            <AppSwitch bold title="Ander afleveradres gebruiken?" />

            <AppFormField
              autoCapitalize="words"
              autoCorrect={false}
              label="Bedrijfsnaam"
              name="bedrijfsnaam"
            />

            <AppFormField
              autoCapitalize="words"
              autoCorrect={false}
              label="Verzendrefentie 1"
              name="verzendRef1"
            />

            <AppFormField
              autoCapitalize="words"
              autoCorrect={false}
              label="Verzendrefentie 2"
              name="verzendRef2"
            />

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

            <AppPicker
              label="Land"
              name="land"
              selection={countries}
              placeholder="Selecteer een land"
              required
            />

            <AppFormField
              autoCapitalize="words"
              autoCorrect={false}
              label="Straatnaam"
              name="straatnaam"
              required
            />

            <AppFormField
              autoCapitalize="words"
              autoCorrect={false}
              label="Woonplaats"
              name="woonPlaats"
              required
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

            <SubmitButton style={styles.button} title="Wijzigingen opslaan" />
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
    paddingTop: 12,
  },
  button: {
    marginBottom: 32,
  },
});

export default AlternativeDeliveryAddressScreen;
