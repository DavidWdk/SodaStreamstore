import React from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import i18n from "i18n-js";

import { AppText, AppTitle } from "../fonts";
import AppFlatlist from "./AppFlatlist";
import defaultStyles from "../../config/styles";
import AppButton from "../AppButton";

function LoggedOutSettingsList({ data }) {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.push("Login");
  };

  return (
    <AppFlatlist
      data={data}
      ListHeaderComponent={
        <View style={defaultStyles.screenContainer}>
          <AppTitle style={defaultStyles.title}>{i18n.t("hello")}</AppTitle>
          <AppText>{i18n.t("loginDescription")}</AppText>
          <AppButton
            title={i18n.t("login")}
            color="yellow"
            textColor="black"
            icon="account-arrow-right-outline"
            onPress={handleLogin}
          />
        </View>
      }
    />
  );
}
const styles = StyleSheet.create({
  container: {},
});

export default LoggedOutSettingsList;
