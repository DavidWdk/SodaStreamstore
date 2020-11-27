import React from "react";
import { StyleSheet, View } from "react-native";

import syrups from "../../../assets/placeholderData/syrups";

import CustomHeader from "../../components/CustomHeader";
import ProductOverviewList from "../../components/lists/ProductOverviewList";

function ProductOverviewScreen(props) {
  return (
    <View style={styles.container}>
      <CustomHeader
        title="Siropen"
        topPaddingAdjustment
        secondaryTitle="Filteren"
        secondaryIcon="filter-outline"
        secondaryHeaderItem
      />
      <ProductOverviewList data={syrups} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 100,
  },
});

export default ProductOverviewScreen;
