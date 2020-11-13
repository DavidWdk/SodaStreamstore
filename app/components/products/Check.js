import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { AppText } from "../fonts";
import defaultStyles from "../../config/styles";

function Check({ title = "Morgen in huis", bold = false }) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="checkbox-marked-circle-outline"
        size={24}
        color={defaultStyles.colors.lightBlue}
        style={styles.icon}
      />
      <AppText bold={bold}>{title}</AppText>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 2,
  },
  icon: {
    marginRight: 4,
  },
});

export default Check;
