import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";

function CartButton({ style, onPress }) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <MaterialCommunityIcons
        name="cart-outline"
        size={24}
        style={styles.icon}
        color={defaultStyles.colors.black}
      />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: defaultStyles.colors.yellow,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    borderBottomWidth: 4,
    borderColor: defaultStyles.colors.bottomBtn,
    flexDirection: "row",
    height: 45,
    alignSelf: "flex-end",
  },
});

export default CartButton;
