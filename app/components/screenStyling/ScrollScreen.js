import React from "react";
import Constants from "expo-constants";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Platform,
} from "react-native";

function ScrollScreen({ children, style, ...otherProps }) {
  return (
    <ScrollView style={[styles.screen, style]} {...otherProps}>
      <View style={[styles.view]}>{children}</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  view: {
    flex: 1,
    paddingBottom: Platform.OS === "ios" ? 0 : 32,
  },
});

export default ScrollScreen;
