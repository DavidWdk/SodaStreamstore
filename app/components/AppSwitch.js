import React, { useState } from "react";
import { View, StyleSheet, Switch } from "react-native";

import { AppText } from "./fonts";
import defaultStyles from "../config/styles";

function AppSwitch({ title, bold, style }) {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  return (
    <View style={[styles.switchSection, style]}>
      <AppText bold={bold} style={styles.title}>
        {title}
      </AppText>
      <Switch
        trackColor={{
          false: defaultStyles.colors.grey,
          true: defaultStyles.colors.darkBlue,
        }}
        thumbColor={defaultStyles.colors.white}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  switchSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  title: {
    alignSelf: "center",
  },
});

export default AppSwitch;
