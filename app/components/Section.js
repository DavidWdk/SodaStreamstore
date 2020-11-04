import React from "react";
import { View, StyleSheet } from "react-native";

import colors from "../config/colors";

function Section({ children, color = "transparant" }) {
  return (
    <View style={(styles.container, { backgroundColor: colors[color] })}>
      {children}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
});

export default Section;
