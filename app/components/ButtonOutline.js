import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";
import { AppText } from "./fonts";

function ButtonOutline({
  textColor = "darkBlue",
  title,
  bold = false,
  onPress,
  icon,
  style,
  index,
}) {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      index={index}
      onPress={onPress}
    >
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={24}
          color={defaultStyles.colors.darkBlue}
          style={defaultStyles.icon}
        />
      )}
      <AppText
        bold={bold}
        style={[styles.text, { color: defaultStyles.colors[textColor] }]}
      >
        {title}
      </AppText>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderColor: defaultStyles.colors.darkBlue,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
    flexDirection: "row",
  },
  text: {
    padding: 10,
    color: defaultStyles.colors.darkBlue,
  },
});

export default ButtonOutline;
