import React from "react";
import { View, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";
import { AppTitle, AppText } from "./fonts/";

function CustomHeader({
  title,
  style,
  noBackButton = false,
  textColor = "black",
  backgroundColor = defaultStyles.colors.transparant,
  topPaddingAdjustment = false,
  secondaryHeaderItem = false,
  secondaryTitle,
  secondaryIcon,
  onPressSecondary,
  secondaryTextColor,
}) {
  const navigation = useNavigation();
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
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <MaterialCommunityIcons
                name="keyboard-backspace"
                size={24}
                color={defaultStyles.colors.black}
                style={styles.backIcon}
              />
            </TouchableOpacity>
          )}
          <View style={styles.title}>
            <AppTitle
              style={[
                defaultStyles.title,
                { color: defaultStyles.colors[textColor] },
              ]}
              numberOfLines={1}
            >
              {title}
            </AppTitle>
          </View>
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
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <MaterialCommunityIcons
                name="keyboard-backspace"
                size={24}
                color={defaultStyles.colors.black}
                style={styles.backIcon}
              />
            </TouchableOpacity>
          )}
          <View style={styles.title}>
            <AppTitle
              style={[
                defaultStyles.title,
                { color: defaultStyles.colors[textColor] },
              ]}
              numberOfLines={1}
            >
              {title}
            </AppTitle>
          </View>
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
    flexGrow: 1,
    flex: 1,
  },
  title: {
    flexShrink: 1,
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
