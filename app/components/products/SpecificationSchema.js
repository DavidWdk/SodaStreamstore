import React from "react";
import { View, StyleSheet } from "react-native";

import { AppText } from "../fonts";

function Specifications({ style, data }) {
  return (
    <View style={style}>
      {data.map((row, index) => (
        <View style={styles.row} key={index}>
          <AppText bold style={styles.rowItem}>
            {row.title}
          </AppText>
          <AppText style={styles.rowItem}>{row.specification}</AppText>
        </View>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginVertical: 1,
  },
  rowItem: {
    flex: 1,
  },
});

export default Specifications;
