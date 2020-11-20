import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { AppTitle } from "./fonts";
import defaultStyles from "../config/styles";

function HugeButton({ title, boldTitle, onPress, style }) {
  return (
    <TouchableOpacity style={[styles.container, { style }]} onPress={onPress}>
      <AppTitle thin style={styles.text}>
        {title}
      </AppTitle>
      {boldTitle && <AppTitle style={styles.text}>{boldTitle}</AppTitle>}
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 8,
    marginVertical: 16,
    backgroundColor: defaultStyles.colors.lightBlue,
    elevation: 12,
    shadowOffset: { height: 5 },
    shadowColor: defaultStyles.colors.lightBlue,
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  text: {
    textAlign: "center",
    fontSize: 24,
    color: defaultStyles.colors.white,
  },
});

export default HugeButton;
