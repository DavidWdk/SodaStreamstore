import React, { useState } from "react";
import { View, StyleSheet, Switch } from "react-native";

import { AppText } from "./fonts";
import defaultStyles from "../config/styles";

function AppSwitch({ title, toggleSwitchFunction }) {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  return (
    <View style={defaultStyles.section}>
      <View style={styles.switchSection}>
        <AppText style={styles.title}>{title}</AppText>
        <Switch
          trackColor={{
            false: defaultStyles.colors.white,
            true: defaultStyles.colors.darkBlue,
          }}
          thumbColor={defaultStyles.colors.white}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  switchSection: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    alignSelf: "center",
  },
});

export default AppSwitch;
