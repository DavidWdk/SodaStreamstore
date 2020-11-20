import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";
import { AppTitle } from "./fonts/";

function CustomHeader({
  title,
  style,
  noBackButton = false,
  textColor = "black",
  backgroundColor = "white",
  topPaddingAdjustment = false,
}) {
  if (!topPaddingAdjustment) {
    return (
      <View style={[styles.customHeader, style]}>
        {!noBackButton && (
          <MaterialCommunityIcons
            name="keyboard-backspace"
            size={24}
            color={defaultStyles.colors.black}
            style={styles.backIcon}
          />
        )}
        <AppTitle style={defaultStyles.title}>{title}</AppTitle>
      </View>
    );
  } else if (topPaddingAdjustment) {
    return (
      <View
        style={[
          styles.customHeader,
          styles.topPaddingAdjustment,
          style,
          { backgroundColor: defaultStyles.colors[backgroundColor] },
        ]}
      >
        {!noBackButton && (
          <MaterialCommunityIcons
            name="keyboard-backspace"
            size={24}
            color={defaultStyles.colors[textColor]}
            style={styles.backIcon}
          />
        )}
        <AppTitle
          style={[
            defaultStyles.title,
            { color: defaultStyles.colors[textColor] },
          ]}
        >
          {title}
        </AppTitle>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  customHeader: {
    flexDirection: "row",
    paddingBottom: 12,
  },
  topPaddingAdjustment: {
    paddingTop: Constants.statusBarHeight,
    paddingLeft: 12,
  },
  backIcon: {
    paddingTop: 5,
    paddingRight: 8,
  },
});

export default CustomHeader;
