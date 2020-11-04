import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import colors from "../config/colors";
import { AppText } from "./fonts/";

function AppButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <AppText bold style={styles.text}>
        {title}
      </AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgba(52, 52, 52, 0.0)",
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
    width: "100%",
    marginVertical: 4,
  },
  text: {
    color: colors.lightBlue,
  },
});

export default AppButton;
