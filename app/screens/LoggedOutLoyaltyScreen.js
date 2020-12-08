import React from "react";
import { View, StyleSheet } from "react-native";

import i18n from "i18n-js";

import AppButton from "../components/AppButton";
import { AppText, AppTitle } from "../components/fonts";
import defaultStyles from "../config/styles";

function LoggedOutLoyaltyScreen({ navigation }) {
  return (
    <View style={[defaultStyles.screenContainer, styles.container]}>
      <AppTitle style={[defaultStyles.textCenter, styles.title]}>
        {i18n.t("youreNotLoggedIn")}
      </AppTitle>
      <AppText style={[defaultStyles.textCenter]}>
      {i18n.t("loginForLoyalty")}
      </AppText>
      <AppButton
        title={i18n.t("login")}
        icon="account-arrow-right-outline"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  title: {
    fontSize: 20,
  },
});

export default LoggedOutLoyaltyScreen;
