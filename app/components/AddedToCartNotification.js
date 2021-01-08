import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";

import defaultStyles from "../config/styles";
import { AppText } from "./fonts";

function AddedToCartNotification(props) {
  return (
    <View style={styles.box}>
      <AppText style={[defaultStyles.textCenter, styles.text]}>
        Het artikel is toegevoegd aan je winkelwagen
      </AppText>
    </View>
  );
}
const styles = StyleSheet.create({
  box: {
    backgroundColor: defaultStyles.colors.darkestBlue,
    height: 50,
    position: "absolute",
    zIndex: 1,
    justifyContent: "center",
    borderRadius: 5,
    width: "95%",
    alignSelf: "center",
    elevation: 6,
    shadowColor: defaultStyles.colors.black,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 4,
    shadowOpacity: 0.5,
    top: Constants.statusBarHeight,
    alignItems: "center",
  },
  text: {
    color: defaultStyles.colors.white,
  },
});

export default AddedToCartNotification;
