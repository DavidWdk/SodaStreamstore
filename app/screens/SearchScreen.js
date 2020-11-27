import React from "react";
import Constants from "expo-constants";

import { StyleSheet, View } from "react-native";
import AppTextInput from "../components/AppTextInput";
import AccordionList from "../components/lists/AccordionList";

//TODO: als je op een niet uitklapbaar item klikt error voorkomen

const searchOptions = [
  {
    id: 0,
    title: "Kies een categorie",
    data: [
      { title: "CO2-cilinders", onPress: false },
      { title: "Siropen", onPress: false },
      { title: "Accessoires", onPress: false },
      { title: "Toestellen", onPress: false },
    ],
  },
  {
    id: 1,
    title: "Artikelen met korting",
    data: [
      { title: "Alle artikelen met korting", onPress: false },
      { title: "CO2-cilinders", onPress: false },
      { title: "Siropen", onPress: false },
      { title: "Accessoires", onPress: false },
      { title: "Toestellen", onPress: false },
    ],
  },
  {
    id: 2,
    title: "Laatst gekochte artikelen",
  },
  {
    id: 3,
    title: "Laatst bekeken artikelen",
  },
];

function SearchScreen(props) {
  return (
    <View style={styles.container}>
      <AppTextInput
        icon="magnify"
        placeholder="Waar ben je naar op zoek?"
        style={styles.searchInput}
      />
      <AccordionList data={searchOptions} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },
  searchInput: {
    borderWidth: 0,
    borderBottomWidth: 1,
  },
});

export default SearchScreen;
