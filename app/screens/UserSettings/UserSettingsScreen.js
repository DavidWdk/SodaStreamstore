import React from "react";
import { View, StyleSheet } from "react-native";

import AppFlatlist from "../../components/lists/AppFlatlist";
import defaultStyles from "../../config/styles";
import optionsData from "../../../assets/placeholderData/options";
import userData from "../../../assets/placeholderData/userData";
import Screen from "../../components/screenStyling/Screen";
import BottleCounter from "../../components/BottleCounter";
import { AppText, AppTitle } from "../../components/fonts";

function UserSettingsScreen(props) {
  return (
    <Screen>
      <AppFlatlist
        data={optionsData}
        ListFooterComponent={
          <View style={styles.bottleCount}>
            <BottleCounter bottleAmounth={192} />
          </View>
        }
        ListHeaderComponent={
          <View style={styles.container}>
            <AppTitle style={styles.titleText}>
              {userData.voornaam} {userData.achternaam}
            </AppTitle>
            <AppText style={defaultStyles.subtitle}>{userData.email}</AppText>
          </View>
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 8,
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
