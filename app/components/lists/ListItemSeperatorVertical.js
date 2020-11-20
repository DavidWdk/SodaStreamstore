import React from "react";
import { View, StyleSheet } from "react-native";

import colors from "../../config/colors";

function ListItemSeperatorVertical(props) {
  return <View style={styles.seperator} />;
}

const styles = StyleSheet.create({
  seperator: {
    width: 1,
    height: "60%",
    backgroundColor: colors.lightestGrey,
    alignSelf: "center",
  },
});

export default ListItemSeperatorVertical;
