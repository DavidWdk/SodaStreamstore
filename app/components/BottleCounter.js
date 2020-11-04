import React from "react";
import { View, StyleSheet, Image } from "react-native";
import colors from "../config/colors";

import defaultStyles from "../config/styles";
import { AppText } from "./fonts";

function BottleCounter({ bottleAmounth }) {
  return (
    <View style={styles.container}>
      {/* <View style={styles.wrapper}> */}
      <AppText thin style={styles.text}>
        Flessen bespaard{"\n"}met SodaStream
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
    </View>
    // </View>
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
