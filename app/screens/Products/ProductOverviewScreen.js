import React from "react";
import { StyleSheet, View } from "react-native";

import i18n from "i18n-js";
import syrups from "../../../assets/placeholderData/syrups";
// import onSale from "../../../assets/placeholderData/onSale";

import CustomHeader from "../../components/CustomHeader";
import ProductOverviewList from "../../components/lists/ProductOverviewList";

function ProductOverviewScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <CustomHeader
        // title={route.params.headerTitle}
        title={i18n.t("syrups")}
        topPaddingAdjustment
        secondaryTitle={i18n.t("filter")}
        secondaryIcon="filter-outline"
        secondaryHeaderItem
        onPressSecondary={() => navigation.replace("Filter")}
      />
      <ProductOverviewList
        // data={(route.params.payload = "onSale" ? onSale : syrups)}
        data={syrups}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 85,
  },
});

export default ProductOverviewScreen;
