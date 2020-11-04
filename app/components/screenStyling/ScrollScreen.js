import React from "react";
import Constants from "expo-constants";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";

function ScrollScreen({ children, style }) {
  return (
    <ScrollView style={[styles.screen, style]}>
      <SafeAreaView>
        <View style={[styles.view]}>{children}</View>
      </SafeAreaView>
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
    paddingBottom: 32,
  },
});

export default ScrollScreen;
