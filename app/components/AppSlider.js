import React from "react";
import { View, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";

import { AppText } from "./fonts";
import defaultStyles from "../config/styles";

function AppSlider({
  minimum,
  maximum,
  step,
  style,
  initialValue,
  unit,
  data,
}) {
  return (
    <>
      <View style={styles.indicationWrapper}>
        <AppText bold style={styles.literIndication}>
          {data.volume + " "}
        </AppText>
        <AppText thin style={styles.literIndication}>
          {unit}
        </AppText>
      </View>

      <Slider
        style={[styles.slider, style]}
        step={step}
        minimumValue={minimum}
        maximumValue={maximum}
        value={initialValue}
        thumbTintColor={defaultStyles.colors.darkBlue}
        minimumTrackTintColor={defaultStyles.colors.darkBlue}
        maximumTrackTintColor={defaultStyles.colors.lightestGrey}
        onValueChange={(value) => {
          data.changeVolume(value);
        }}
      />
    </>
  );
}
const styles = StyleSheet.create({
  literIndication: {
    fontSize: 24,
  },
  indicationWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
  },
});

export default AppSlider;
