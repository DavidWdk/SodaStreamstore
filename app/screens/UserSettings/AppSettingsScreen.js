import React from "react";
import { StyleSheet } from "react-native";
import CustomHeader from "../../components/CustomHeader";
import defaultStyles from "../../config/styles";
import AppFlatlist from "../../components/lists/AppFlatlist";
import Screen from "../../components/screenStyling/Screen";
import appSettingsData from "../../../assets/placeholderData/appSettingsData";

function AppSettingsScreen(props) {
  return (
    <Screen>
      <AppFlatlist
        ListHeaderComponent={
          <CustomHeader
            title="Instellingen"
            style={[defaultStyles.screenContainer, styles.header]}
          />
        }
        data={appSettingsData}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  header: {
    marginTop: 24,
  },
});

export default AppSettingsScreen;
