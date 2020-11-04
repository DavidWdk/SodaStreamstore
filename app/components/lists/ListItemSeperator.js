import React from "react";
import { View, StyleSheet } from "react-native";

import colors from "../../config/colors";

function ListItemSeperator() {
  return <View style={styles.seperator} />;
}

const styles = StyleSheet.create({
  seperator: {
    width: "97%",
    height: 1,
    backgroundColor: colors.lightestGrey,
    alignSelf: "flex-end",
  },
});

export default ListItemSeperator;
