import React from "react";
import { View, StyleSheet } from "react-native";

import { AppText } from "../fonts";
import defaultStyles from "../../config/styles";

function NutritionSchema({ data, style }) {
  return (
    <View style={[styles.container, style]}>
      {data.map((row, index) => (
        <View style={styles.rowContainer} key={index}>
          <View style={[styles.block, styles.titleBlock]}>
            <AppText bold>{row.nutritionTitle}</AppText>
          </View>

          <View style={[styles.block]}>
            <AppText>{row.nutritionInfo}</AppText>
          </View>
        </View>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  block: {
    borderWidth: 1,
    borderColor: defaultStyles.colors.darkestBlue,
    padding: 10,
    width: "50%",
  },
  container: {
    borderWidth: 1,
    borderColor: defaultStyles.colors.darkestBlue,
  },
  rowContainer: {
    flexDirection: "row",
  },
  titleBlock: {
    backgroundColor: defaultStyles.colors.blueBackground,
  },
});

export default NutritionSchema;
