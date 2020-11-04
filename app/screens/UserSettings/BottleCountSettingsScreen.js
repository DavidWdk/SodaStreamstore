import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import { AppTitle, AppText } from "../../components/fonts";
import CustomHeader from "../../components/CustomHeader";
import Screen from "../../components/screenStyling/Screen";
import defaultStyles from "../../config/styles";
import AppSlider from "../../components/AppSlider";
import AppSwitch from "../../components/AppSwitch";

function BottleCountSettings(props) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <Screen style={defaultStyles.screenContainer}>
      <CustomHeader title="Flessenteller" />
      <View style={defaultStyles.section}>
        <AppTitle>Hoe werkt het?</AppTitle>
        <AppText>
          De flessenteller berekent het aantal bespaarde plastic flessen op
          basis van hoeveel liter bruiswater je maakt met een CO2-cilinder. Het
          aantal CO2-cilinders dat je hebt gebruikt worden berekend aan de hand
          van je bestelgeschiedenis.
        </AppText>
      </View>

      <View style={defaultStyles.section}>
        <AppTitle>Hoeveelheid</AppTitle>
        <AppText>
          Hoeveel liter bruiswater haal je uit een CO2-cilinder?
        </AppText>

        <AppSlider
          minimum={40}
          maximum={70}
          step={1}
          initialValue={60}
          unit="liter"
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
