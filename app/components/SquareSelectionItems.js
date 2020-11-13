import React, { useState } from "react";
import { View, StyleSheet, Pressable } from "react-native";

import defaultStyles from "../config/styles";
import { AppTitle } from "./fonts";

function SquareSelectionItems({ style, items }) {
  const [active, setActive] = useState(0);

  return (
    <View style={[styles.container, style]}>
      {items.map((item, index) => (
        <Pressable
          style={index == active ? styles.selectableActive : styles.selectable}
          onPress={() => setActive(index)}
          key={index}
        >
          <AppTitle style={defaultStyles.textCenter}>{item}</AppTitle>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  selectable: {
    borderColor: defaultStyles.colors.grey,
    borderWidth: 1,
    backgroundColor: defaultStyles.colors.white,
    width: "32%",
    padding: 12,
  },
  selectableActive: {
    borderColor: defaultStyles.colors.darkBlue,
    borderWidth: 1,
    backgroundColor: defaultStyles.colors.blueBackground,
    width: "32%",
    padding: 12,
  },
});

export default SquareSelectionItems;
