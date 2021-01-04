import React from "react";
import { Text, StyleSheet } from "react-native";
import {
  useFonts,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
} from "@expo-google-fonts/roboto";
import { AppLoading } from "expo";

function AppText({
  style,
  children,
  bold = false,
  italic = false,
  thin = false,
  ...otherProps
}) {
  let [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else if (
    fontsLoaded &&
    bold === false &&
    italic === false &&
    thin === false
  ) {
    return (
      <Text style={[styles.text, style]} {...otherProps}>
        {children}
      </Text>
    );
  } else if (fontsLoaded && italic === true) {
    return (
      <Text style={[styles.textItalic, style]} {...otherProps}>
        {children}
      </Text>
    );
  } else if (fontsLoaded && bold === true) {
    return (
      <Text style={[styles.textBold, style]} {...otherProps}>
        {children}
      </Text>
    );
  } else if (fontsLoaded && thin === true) {
    return (
      <Text style={[styles.textThin, style]} {...otherProps}>
        {children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
  },
  textBold: {
    fontFamily: "Roboto_700Bold",
    fontSize: 16,
  },
  textItalic: {
    fontFamily: "Roboto_400Regular_Italic",
    fontSize: 16,
  },
  textThin: {
    fontFamily: "Roboto_300Light",
    fontSize: 16,
  },
});

export default AppText;
