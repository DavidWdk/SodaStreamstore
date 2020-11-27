import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import Constants from "expo-constants";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";
import { AppTitle, AppText } from "./fonts/";

function CustomHeader({
  title,
  style,
  noBackButton = false,
  textColor = "black",
  backgroundColor = "white",
  topPaddingAdjustment = false,
  secondaryHeaderItem = false,
  secondaryTitle,
  secondaryIcon,
  onPressSecondary,
  secondaryTextColor,
}) {
  if (!topPaddingAdjustment) {
    return (
      <View
        style={[
          styles.customHeader,
          style,
          { backgroundColor: defaultStyles.colors[backgroundColor] },
        ]}
      >
        <View style={styles.mainHeaderContainer}>
          {!noBackButton && (
            <MaterialCommunityIcons
              name="keyboard-backspace"
              size={24}
              color={defaultStyles.colors.black}
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

        {secondaryHeaderItem && (
          <Pressable
            onPress={onPressSecondary}
            style={styles.secondaryContainer}
          >
            {secondaryIcon && (
              <MaterialCommunityIcons
                name={secondaryIcon}
                size={24}
                color={defaultStyles.colors[secondaryTextColor]}
                style={styles.secondaryIcon}
              />
            )}
            {secondaryTitle && (
              <AppText
                thin
                style={{ color: defaultStyles.colors[secondaryTextColor] }}
              >
                {secondaryTitle}
              </AppText>
            )}
          </Pressable>
        )}
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
        <View style={styles.mainHeaderContainer}>
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

        {secondaryHeaderItem && (
          <Pressable
            onPress={onPressSecondary}
            style={styles.secondaryContainer}
          >
            {secondaryIcon && (
              <MaterialCommunityIcons
                name={secondaryIcon}
                size={24}
                color={defaultStyles.colors[secondaryTextColor]}
                style={styles.secondaryIcon}
              />
            )}
            {secondaryTitle && (
              <AppText
                thin
                style={{ color: defaultStyles.colors[secondaryTextColor] }}
              >
                {secondaryTitle}
              </AppText>
            )}
          </Pressable>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backIcon: {
    paddingTop: 5,
    paddingRight: 8,
  },
  customHeader: {
    flexDirection: "row",
    paddingBottom: 12,
    justifyContent: "space-between",
  },
  topPaddingAdjustment: {
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 12,
  },
  mainHeaderContainer: {
    flexDirection: "row",
  },
  secondaryIcon: {
    marginRight: 4,
  },
  secondaryContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default CustomHeader;
