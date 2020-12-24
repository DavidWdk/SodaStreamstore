import React from "react";
import Constants from "expo-constants";

import i18n from "i18n-js";

import { StyleSheet, View } from "react-native";
import AppTextInput from "../components/AppTextInput";
import AccordionList from "../components/lists/AccordionList";
import defaultStyles from "../config/styles";
import searchOptions from "../../assets/placeholderData/searchOptions";

function SearchScreen(props) {
  return (
    <View>
      <AppTextInput
        icon="magnify"
        placeholder={i18n.t("searchPlaceholder")}
        style={styles.searchInput}
      />
      <AccordionList data={searchOptions} />
    </View>
  );
}
const styles = StyleSheet.create({
  searchInput: {
    borderWidth: 0,
    borderBottomWidth: 1,
    backgroundColor: defaultStyles.colors.white,
    zIndex: 10,
    paddingTop: Constants.statusBarHeight + 16,
    marginTop: -10,
    marginBottom: 4,
  },
});

export default SearchScreen;
