import React from "react";
import { View, StyleSheet } from "react-native";

import i18n from "i18n-js";

import CustomHeader from "../components/CustomHeader";
import ProductOverviewList from "../components/lists/ProductOverviewList";
import onSale from "../../assets/placeholderData/onSale";

function PreviouslySeenScreen(props) {
  return (
    <View style={styles.container}>
      <CustomHeader title={i18n.t("prevSeenTitle")} topPaddingAdjustment />
      <ProductOverviewList data={onSale} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingBottom: 85,
  },
});

export default PreviouslySeenScreen;
