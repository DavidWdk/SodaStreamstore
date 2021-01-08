import React from "react";
import {
  StyleSheet,
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
import countries from "../../../assets/placeholderData/countries";
import AppSwitch from "../../components/AppSwitch";

const validationSchema = Yup.object().shape({
  anderAdres: Yup.boolean(),
  bedrijfsnaam: Yup.string()
    .notRequired()
    .label(`${i18n.t("companyName")}`),
  verzendRef1: Yup.string()
    .notRequired()
    .label(`${i18n.t("deliveryRef1")}`),
  verzendRef2: Yup.string()
    .notRequired()
    .label(`${i18n.t("deliveryRef2")}`),
  voornaam: Yup.string()
    .required(`${i18n.t("requiredField")}`)
    .label(`${i18n.t("firstName")}`),
  achternaam: Yup.string()
    .required(`${i18n.t("requiredField")}`)
    .label(`${i18n.t("lastName")}`),
  land: Yup.string()
    .required(`${i18n.t("requiredField")}`)
    .label(`${i18n.t("country")}`),
  straatnaam: Yup.string()
    .required(`${i18n.t("requiredField")}`)
    .label(`${i18n.t("street")}`),
  postcode: Yup.string()
    .max(4, `${i18n.t("minLength")}`)
    .min(8, `${i18n.t("maxLength")}`)
    .required(`${i18n.t("requiredField")}`)
    .label(`${i18n.t("zipCode")}`),
  huisnummer: Yup.number()
    .required(`${i18n.t("requiredField")}`)
    .label(`${i18n.t("houseNum")}`),
  toevoeging: Yup.string()
    .notRequired()
    .label(`${i18n.t("addition")}`),
  woonPlaats: Yup.string()
    .required(`${i18n.t("requiredField")}`)
    .label(`${i18n.t("city")}`),
});

function AlternativeDeliveryAddressScreen(props) {
  return (
    <>
      <CustomHeader
        title={i18n.t("alternativeDeliveryAddress")}
        topPaddingAdjustment
        backgroundColor="blueBackground"
      />
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={[styles.container, defaultStyles.screenContainer]}
      >
        <ScrollView onPress={Keyboard.dismiss}>
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
            <AppSwitch bold title={i18n.t("useAltAddress")} />

            <AppFormField
              autoCapitalize="words"
              autoCorrect={false}
              label={i18n.t("companyName")}
              name="bedrijfsnaam"
            />

            <AppFormField
              autoCapitalize="words"
              autoCorrect={false}
              label={i18n.t("deliveryRef1")}
              name="verzendRef1"
            />

            <AppFormField
              autoCapitalize="words"
              autoCorrect={false}
              label={i18n.t("deliveryRef2")}
              name="verzendRef2"
            />

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

            <AppPicker
              label={i18n.t("country")}
              name="land"
              selection={countries}
              placeholder={i18n.t("selectCountry")}
              required
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

            <SubmitButton style={styles.button} title={i18n.t("saveChanges")} />
          </AppForm>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.blueBackground,
    flex: 1,
  },
  button: {
    marginBottom: 32,
    marginTop: 32,
  },
});

export default AlternativeDeliveryAddressScreen;
