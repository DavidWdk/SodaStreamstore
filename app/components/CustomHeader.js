import React from "react";
import { Text, View, StyleSheet } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";
import { AppTitle } from "./fonts/";

function CustomHeader({ title, style }) {
  return (
    <View style={[styles.customHeader, style]}>
      <MaterialCommunityIcons
        name="keyboard-backspace"
        size={24}
        color={defaultStyles.colors.black}
        style={styles.backIcon}
      />
      <AppTitle style={defaultStyles.title}>{title}</AppTitle>
    </View>
  );
}

const styles = StyleSheet.create({
  customHeader: {
    flexDirection: "row",
    marginBottom: 12,
    paddingTop: 24,
  },
  backIcon: {
    paddingTop: 4,
    paddingRight: 8,
  },
});

export default CustomHeader;
