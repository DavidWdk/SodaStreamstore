import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import i18n from "i18n-js";

import { AppTitle, AppText } from "../../components/fonts";
import CustomHeader from "../../components/CustomHeader";
import Screen from "../../components/screenStyling/Screen";
import defaultStyles from "../../config/styles";
import AppSlider from "../../components/AppSlider";

function BottleCountSettings(props) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <Screen style={defaultStyles.screenContainer}>
      <CustomHeader title={i18n.t("bottleCountHeader")} />
      <View style={defaultStyles.section}>
        <AppTitle>{i18n.t("counterWorkings")}</AppTitle>
        <AppText>
          {i18n.t("counterWorkingsDesc")}
        </AppText>
      </View>

      <View style={defaultStyles.section}>
        <AppTitle>{i18n.t("amount")}</AppTitle>
        <AppText>
          {i18n.t("amountDesc")}
        </AppText>

        <AppSlider
          minimum={40}
          maximum={70}
          step={1}
          initialValue={60}
          unit={i18n.t("liter")}
          style={styles.slider}
        />
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  slider: {
    width: "100%",
    alignSelf: "center",
  },
  switchSection: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default BottleCountSettings;
