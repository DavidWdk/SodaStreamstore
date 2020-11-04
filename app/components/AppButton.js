import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";
import { AppText } from "./fonts";

function AppButton({
  title,
  onPress,
  color = "lightBlue",
  textColor = "white",
}) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <AppText style={[styles.text, { color: colors[textColor] }]}>
        {title}
      </AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.lightBlue,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    paddingBottom: 13,
    width: "100%",
    marginVertical: 16,
    borderBottomWidth: 4,
    borderColor: colors.bottomBtn,
  },
  text: {
    color: colors.white,
  },
});

export default AppButton;
