import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import CustomHeader from "../../components/CustomHeader";
import { AppTitle } from "../../components/fonts";
import SquareSelectionItems from "../../components/SquareSelectionItems";
import CheckBox from "../../components/forms/Checkbox";

import i18n from "i18n-js";

import defaultStyles from "../../config/styles";
import AppButton from "../../components/AppButton";
import sortOptions from "../../../assets/placeholderData/sortOptions";

function FilterScreen({ navigation }) {
  return (
    <>
      <CustomHeader
        title={i18n.t("filter")}
        secondaryHeaderItem
        secondaryTitle={i18n.t("deleteFilter")}
        secondaryTextColor="darkBlue"
        onPressSecondary={() => console.log("Reset filter")}
        topPaddingAdjustment
      />
      <ScrollView style={defaultStyles.screenContainer}>
        <AppTitle>{i18n.t("sort")}</AppTitle>
        <SquareSelectionItems
          items={sortOptions}
          style={defaultStyles.topWhitespaceMini}
        />

        <View style={defaultStyles.topWhitespaceSmaller}>
          <AppTitle>Toestelkleur</AppTitle>
          <CheckBox title="Zwart" checked />
          <CheckBox title="Wit" />
        </View>

        <View style={defaultStyles.topWhitespaceSmaller}>
          <AppTitle>Siropen</AppTitle>
          <CheckBox title="Light" checked />
          <CheckBox title="Mocktails" checked />
          <CheckBox title="Suikervrij" />
          <CheckBox title="Fruit Drops" checked />
          <CheckBox title="Classic Siropen" />
        </View>

        <View style={defaultStyles.topWhitespaceSmaller}>
          <AppTitle>Set Inhoud</AppTitle>
          <CheckBox title="Glazen Karaf" />
          <CheckBox title="Kunststof vulfles" checked />
          <CheckBox title="My Only Bottle" checked />
        </View>

        <View
          style={[
            defaultStyles.topWhitespaceSmaller,
            defaultStyles.botSpacing16,
          ]}
        >
          <AppTitle>Geschikt voor toestel</AppTitle>
          <CheckBox title="Source" checked />
          <CheckBox title="Spirit" checked />
          <CheckBox title="Crystal" />
        </View>
      </ScrollView>

      <View style={defaultStyles.screenContainer}>
        <AppButton
          title={i18n.t("applyFilter")}
          icon="filter-outline"
          style={styles.applyBtn}
          onPress={() => navigation.replace("ProductOverview")}
        />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  applyBtn: {
    marginBottom: 8,
    marginTop: 0,
  },
  container: {},
});

export default FilterScreen;
