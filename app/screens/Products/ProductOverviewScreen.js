import React from "react";
import { View, StyleSheet } from "react-native";

import syrups from "../../../assets/placeholderData/syrups";

import CustomHeader from "../../components/CustomHeader";
import ProductOverviewList from "../../components/lists/ProductOverviewList";

function ProductOverviewScreen(props) {
  return (
    <>
      <CustomHeader title="Siropen" topPaddingAdjustment />
      <ProductOverviewList data={syrups} />
      <View style={styles.container}></View>
    </>
  );
}
const styles = StyleSheet.create({
  container: { paddingBottom: 20 },
});

export default ProductOverviewScreen;
