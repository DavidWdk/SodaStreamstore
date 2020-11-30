//LINK HET SCHERM LAATST BEKEKEN, DEZE STAAT OOK BIJ ZOEKEN
//KLANTENSERVICE LEIDT NAAR WEBSITE
//VOORWAARDEN ALS WEBVIEW OF LEIDT NAAR WEBSITE
//FEEBACK OVER APP LEIDT NAAR PLAYSTORE/ APPSTORE

import React from "react";
import { View, StyleSheet } from "react-native";

import AppFlatlist from "../../components/lists/AppFlatlist";
import defaultStyles from "../../config/styles";
import optionsData from "../../../assets/placeholderData/options";
import userData from "../../../assets/placeholderData/userData";
import Screen from "../../components/screenStyling/Screen";
import BottleCounter from "../../components/BottleCounter";
import { AppText, AppTitle } from "../../components/fonts";

function UserSettingsScreen({ navigation }) {
  return (
    <Screen>
      <AppFlatlist
        data={optionsData}
        ListHeaderComponent={
          <View style={styles.container}>
            <AppTitle style={styles.titleText}>
              {userData.voornaam} {userData.achternaam}
            </AppTitle>
            <AppText style={defaultStyles.subtitle}>{userData.email}</AppText>
          </View>
        }
        ListFooterComponent={
          <View style={styles.bottleCount}>
            <BottleCounter
              bottleAmounth={192}
              onPress={() => navigation.navigate("BottleCount")}
            />
          </View>
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  titleText: {
    fontSize: 24,
    color: defaultStyles.colors.black,
  },
  bottleCount: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default UserSettingsScreen;
