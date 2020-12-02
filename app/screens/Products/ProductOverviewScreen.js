import React from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import syrups from "../../../assets/placeholderData/syrups";

import CustomHeader from "../../components/CustomHeader";
import ProductOverviewList from "../../components/lists/ProductOverviewList";

function ProductOverviewScreen(props) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <CustomHeader
        title="Siropen"
        topPaddingAdjustment
        secondaryTitle="Filteren"
        secondaryIcon="filter-outline"
        secondaryHeaderItem
        onPressSecondary={() => navigation.navigate("Filter")}
      />
      <ProductOverviewList data={syrups} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 85,
  },
});

export default ProductOverviewScreen;
