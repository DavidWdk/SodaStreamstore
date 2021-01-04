import React from "react";
import { View, StyleSheet, Image, Pressable } from "react-native";
import colors from "../config/colors";

import i18n from "i18n-js";

import { AppText } from "./fonts";

function BottleCounter({ bottleAmounth, onPress }) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <AppText thin style={styles.text}>
        {i18n.t("bottlesSaved")}
        {"\n"}
        {i18n.t("withSodaStream")}
      </AppText>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <AppText bold style={styles.count}>
          {bottleAmounth}
        </AppText>
        <Image
          style={styles.image}
          source={require("../../assets/bottleIcon.png")}
        />
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: colors.blueBackground,
    borderWidth: 1,
    borderColor: colors.darkBlue,
    padding: 12,
    justifyContent: "space-between",
    alignItems: "center",
  },
  count: {
    alignContent: "flex-start",
    fontSize: 36,
  },
  image: {
    height: 45,
    resizeMode: "contain",
  },
  text: {
    lineHeight: 20,
    fontSize: 20,
  },
});

export default BottleCounter;
