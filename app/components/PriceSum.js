import React, { useEffect } from "react";
import { typeOf } from "react-is";
import { View, StyleSheet } from "react-native";

import { AppText } from "./fonts";

function PriceSum({ title, price }) {
  // useEffect(() => {
  //   price.toString();
  //   console.log(typeof price);

  //   // if (price.includes(".")) {
  //   // price = price.replace(/./, ",");
  //   // console.log(price);
  //   // }
  // }, [price]);

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
