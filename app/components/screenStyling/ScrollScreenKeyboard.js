import React from "react";
import Constants from "expo-constants";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

function ScrollScreenKeyboard({ children, style, onPress }) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={[styles.screen, style]}
    >
      <ScrollView onPress={onPress}>
        <SafeAreaView>
          <View style={[styles.view]}>{children}</View>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  view: {
    flex: 1,
    paddingBottom: 32,
  },
});

export default ScrollScreenKeyboard;
