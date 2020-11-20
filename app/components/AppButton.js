import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import defaultStyles from "../config/styles";
import { AppText } from "./fonts";

function AppButton({
  title,
  onPress,
  icon,
  fontSize = 16,
  color = "lightBlue",
  textColor = "white",
  bold = false,
  style,
}) {
  return (
    <TouchableOpacity
      style={[styles.button, style, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={24}
          color={colors[textColor]}
          style={styles.icon}
        />
      )}
      {title && (
        <AppText
          bold={bold}
          style={[
            styles.text,
            { color: colors[textColor], fontSize: fontSize },
          ]}
        >
          {title}
        </AppText>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.lightBlue,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginVertical: 16,
    borderBottomWidth: 4,
    borderColor: colors.bottomBtn,
    flexDirection: "row",
  },
  icon: {
    marginRight: 8,
  },
  text: {
    color: colors.white,
    textAlign: "center",
  },
});

export default AppButton;
