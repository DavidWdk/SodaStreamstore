import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";
import { AppLoading } from "expo";

import defaultStyles from "../config/styles";
import colors from "../config/colors";
import { AppText } from "./fonts";

function AppTextInput({
  icon,
  label,
  width = "100%",
  required = false,
  subText,
  style,
  ...otherProps
}) {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else
    return (
      <>
        {label ? (
          <AppText bold style={styles.label}>
            {label}{" "}
            {required && (
              <AppText bold style={styles.required}>
                *
              </AppText>
            )}
          </AppText>
        ) : (
          <View style={styles.whiteSpace} />
        )}
        <View style={[styles.container, style, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.grey}
              style={[defaultStyles.icon]}
            />
          )}
          <TextInput
            placeholderTextColor={defaultStyles.colors.grey}
            style={[defaultStyles.text]}
            {...otherProps}
          />
        </View>
        {subText && (
          <AppText italic style={styles.subText}>
            {subText}
          </AppText>
        )}
      </>
    );
}
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: defaultStyles.colors.grey,
    backgroundColor: defaultStyles.colors.white,
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 12,
    paddingVertical: 14,
    // marginTop: 16,
    fontFamily: "Roboto_400Regular",
  },
  icon: {
    // marginRight: 10,
    // marginTop: 12,
  },
  text: {
    color: defaultStyles.colors.black,
    fontFamily: "Roboto_400Regular",
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
    marginTop: 16,
    fontWeight: "bold",
  },
  required: {
    color: "red",
    fontWeight: "bold",
  },
  subText: {
    color: colors.grey,
    fontStyle: "italic",
    marginTop: 4,
  },
  whiteSpace: {
    marginTop: 16,
  },
});

export default AppTextInput;
