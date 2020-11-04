import React from "react";
import { Text, StyleSheet } from "react-native";
import {
  useFonts,
  RobotoSlab_300Light,
  RobotoSlab_600SemiBold,
} from "@expo-google-fonts/roboto-slab";
import { AppLoading } from "expo";

function AppTitle({ style, children, thin = false, ...otherProps }) {
  let [fontsLoaded] = useFonts({
    RobotoSlab_300Light,
    RobotoSlab_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else if (fontsLoaded && thin === false) {
    return (
      <Text style={[styles.text, style]} {...otherProps}>
        {children}
      </Text>
    );
  } else if (fontsLoaded && thin === true) {
    return (
      <Text style={[styles.textBold, style]} {...otherProps}>
        {children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "RobotoSlab_600SemiBold",
    fontSize: 18,
  },
  textThin: {
    fontFamily: "RobotoSlab_300Light",
    fontSize: 18,
  },
});

export default AppTitle;
