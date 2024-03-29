import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import i18n from "i18n-js";

import defaultStyles from "../config/styles";
import { AppText } from "../components/fonts";

function MorgenInHuisCheck({ style }) {
  return (
    <View style={[styles.nextDayDelivery, style]}>
      <MaterialCommunityIcons
        name="checkbox-marked-circle-outline"
        size={22}
        color={defaultStyles.colors.lightBlue}
      />
      <AppText bold style={styles.nextDayDeliveryText}>
        {i18n.t("nextDayDelivery")}
      </AppText>
    </View>
  );
}
const styles = StyleSheet.create({
  nextDayDelivery: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  nextDayDeliveryText: {
    marginLeft: 4,
    color: defaultStyles.colors.lightBlue,
  },
});

export default MorgenInHuisCheck;
