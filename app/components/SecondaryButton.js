import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import { AppText } from "./fonts/";

function AppButton({ title, onPress, style, icon }) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          color={colors.lightBlue}
          size={20}
        />
      )}
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
    justifyContent: "center",
    // padding: 4,
    width: "100%",
    marginVertical: 4,
    flexDirection: "row",
  },
  text: {
    color: colors.lightBlue,
  },
});

export default AppButton;
