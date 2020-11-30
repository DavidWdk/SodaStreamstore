import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";
import { AppText } from "./fonts";

function ButtonOutline({
  borderColor = "darkBlue",
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
      style={[
        styles.button,
        style,
        { borderColor: defaultStyles.colors[borderColor] },
      ]}
      index={index}
      onPress={onPress}
    >
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={24}
          color={defaultStyles.colors.darkBlue}
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
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 3,
  },
  text: {
    color: defaultStyles.colors.darkBlue,
    marginLeft: 8,
  },
});

export default ButtonOutline;
