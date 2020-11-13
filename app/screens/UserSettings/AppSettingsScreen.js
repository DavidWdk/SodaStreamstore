import React from "react";
import { StyleSheet } from "react-native";
import CustomHeader from "../../components/CustomHeader";
import defaultStyles from "../../config/styles";
import AppFlatlist from "../../components/lists/AppFlatlist";
import Screen from "../../components/screenStyling/Screen";

const settings = [
  {
    id: 1,
    title: "Meldingen",
    itemKind: "switch",
  },
  {
    id: 2,
    title: "Taal keuze",
  },
  {
    id: 3,
    title: "Cookiebeleid",
  },
  {
    id: 4,
    title: "Versie",
  },
  {
    id: 5,
    title: "Copyright",
  },
  {
    id: 6,
    title: "Geschiedenis wissen",
    textColor: "red",
  },
  {
    id: 7,
    title: "Tijdelijke bestanden wissen",
    textColor: "red",
  },
  {
    id: 8,
    title: "Terug naar standaardinstellingen",
    textColor: "red",
  },
];

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
        data={settings}
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
