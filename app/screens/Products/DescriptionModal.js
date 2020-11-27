import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Constants from "expo-constants";

import { AppText, AppTitle } from "../../components/fonts";
import defaultStyles from "../../config/styles";

function DescriptionModal() {
  return (
    <View style={[styles.container, defaultStyles.screenContainer]}>
      <View style={styles.topBar}>
        <AppTitle>Omschrijving</AppTitle>
        <TouchableOpacity onPress={() => console.log("close this modal")}>
          <MaterialCommunityIcons
            name="close"
            color={defaultStyles.colors.black}
            size={24}
          />
        </TouchableOpacity>
      </View>
      <AppText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </AppText>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
  topBar: {
    flexDirection: "row",
    paddingTop: Constants.statusBarHeight,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 4,
  },
});

export default DescriptionModal;
