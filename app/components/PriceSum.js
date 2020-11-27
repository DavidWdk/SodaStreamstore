import React from "react";
import { View, StyleSheet } from "react-native";

import { AppText } from "./fonts";

function PriceSum({ title, price, style, noFormatting = false }) {
  const priceFormatter = (price) => {
    if (typeof price === "number") {
      price = price.toFixed(2);
      let priceStr = price.toString().replace(".", ",");
      priceStr = "€" + priceStr;
      return priceStr;
    }
  };

  return (
    <View style={styles.container}>
      <AppText>{title}</AppText>
      {noFormatting && (
        <AppText bold style={style}>
          {price}
        </AppText>
      )}
      {!noFormatting && (
        <AppText bold style={style}>
          {priceFormatter(price)}
        </AppText>
      )}
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
