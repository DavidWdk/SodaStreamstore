//TO DO
//IMPORT EXISTING USERDATA
//KIJK NAAR REGISTERSCREEN VOOR VERDERE TO-DO'S
//.MATCHES --- DOE JE ZO CIJFERS VOORKOMEN? /^[1234567890]+$/

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

import AppPicker from "../../components/forms/AppPicker";
import AppForm from "../../components/forms/AppForm";
import AppFormField from "../../components/forms/AppFormField";
import defaultStyles from "../../config/styles";
import SubmitButton from "../../components/forms/SubmitButton";
import CustomHeader from "../../components/CustomHeader";
import { AppText, AppTitle } from "../../components/fonts";
import countries from "../../../assets/placeholderData/countries";

function BillingInfoScreen(props) {
  const validationSchema = Yup.object().shape({
    voornaam: Yup.string().required().label("Voornaam"),
    achternaam: Yup.string().required().label("Achternaam"),
    bedrijfsnaam: Yup.string().notRequired().label("Bedrijfsnaam"),
    postcode: Yup.string().max(4).min(8).required().label("Postcode"),
    huisnummer: Yup.number().required().label("Huisnummer"),
    toevoeging: Yup.string().notRequired().label("Toevoeging"),
    land: Yup.string().required().label("Land"),
    email: Yup.string().required().email().label("E-mailadres"),
    straatnaam: Yup.string().required().label("Straatnaam"),
    iban: Yup.string().max(36).label("IBAN nummer"),
    btwNum: Yup.string().label("BTW nummer"),
    kvkNum: Yup.string().label("KVK nummer"),
    emailFacturatie: Yup.string().email().label("E-mailadres facturatie"),
    woonPlaats: Yup.string().required().label("Woonplaats"),
    referentie1: Yup.string().label("Referentie 1"),
    referentie2: Yup.string().label("Referentie 2"),
    telefoon: Yup.string().label("Telefoon nummer"),
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={[styles.container, defaultStyles.screenContainer]}
    >
      <ScrollView style={styles.section} onPress={Keyboard.dismiss}>
        <CustomHeader title="Factuurgegevens" />

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
            referentie1: "",
            referentie2: "",
            iban: "",
            btwNum: "",
            kvkNum: "",
            emailFacturatie: "",
            telefoon: "",
            woonPlaats: "",
            straatnaam: "",
          }}
          onSubmit={(values) => console.log(values)}
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

          <AppFormField
            autoCapitalize="words"
            autoCorrect={false}
            label={i18n.t("yourReference1")}
            name="referentie1"
          />

          <AppFormField
            autoCapitalize="words"
            autoCorrect={false}
            label={i18n.t("yourReference2")}
            name="referentie2"
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

          <AppFormField
            autoCapitalize="words"
            autoCorrect={false}
            label={i18n.t("street")}
            name="straatnaam"
            required
          />

          <AppFormField
            autoCapitalize="words"
            autoCorrect={false}
            label={i18n.t("city")}
            name="woonPlaats"
            required
          />

          <AppPicker
            label={i18n.t("country")}
            name="land"
            selection={countries}
            placeholder={i18n.t("selectCountry")}
            required
          />

          <AppFormField
            autoCorrect={false}
            label={i18n.t("email")}
            name="email"
            keyboardType="email-address"
            required
          />

          <AppFormField
            autoCapitalize="words"
            label={i18n.t("phoneNum")}
            keyboardType="numeric"
            name="telefoon"
            width="40%"
          />

          <View style={styles.section}>
            <AppTitle style={defaultStyles.subtitle}>{i18n.t("companyDetails")}</AppTitle>
            <AppText style={defaultStyles.text}>
              {i18n.t("businessOrderDesc")}
            </AppText>
            {/* Als er geen bedrijfsnaam is ingevoerd, maak de 'soort bestelling' particulier. */}
            <AppFormField
              autoCapitalize="words"
              autoCorrect={false}
              label={i18n.t("companyName")}
              name="bedrijfsnaam"
            />

            <AppFormField
              autoCorrect={false}
              autoCapitalize="characters"
              label={i18n.t("accountNum")}
              name="iban"
            />

            <AppFormField
              autoCorrect={false}
              autoCapitalize="characters"
              label={i18n.t("btwNum")}
              name="btwNum"
            />

            <AppFormField
              autoCorrect={false}
              autoCapitalize="characters"
              label={i18n.t("kvkNum")}
              name="kvkNum"
            />

            <AppFormField
              autoCorrect={false}
              label={i18n.t("invoiceEmail")}
              name="emailFacturatie"
              keyboardType="email-address"
            />
            <SubmitButton
              title={i18n.t("saveChanges")}
              style={styles.whitespace}
            />
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
    paddingBottom: 24,
  },
  section: {
    paddingBottom: 24,
    paddingTop: 32,
  },
  whitespace: {
    marginBottom: 32,
  },
});

export default BillingInfoScreen;
