import React from "react";
import { View, StyleSheet } from "react-native";

import { AppText } from "./fonts";

function PriceSum({ title, price }) {
  return (
    <View style={styles.container}>
      <AppText>{title}</AppText>
      <AppText bold>€{price}</AppText>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 4,
    justifyContent: "space-between",
  },
});

export default PriceSum;
