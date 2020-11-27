import React from "react";
import { View, StyleSheet } from "react-native";

import SmallProductList from "../../components/lists/SmallProductList";
import defaultStyles from "../../config/styles";
import orderHistory from "../../../assets/placeholderData/orderHistory";
import CustomHeader from "../../components/CustomHeader";
import { AppTitle, AppText } from "../../components/fonts";

function OrderHistoryScreen(props) {
  return (
    <>
      <CustomHeader
        topPaddingAdjustment
        style={[defaultStyles.screenContainer, styles.header]}
        title="Bestellingen"
      />
      <SmallProductList
        contentContainerStyle={{ flexGrow: 1 }}
        data={orderHistory}
        ListEmptyComponent={
          <View style={styles.emptyComponent}>
            <AppTitle>U heeft nog geen bestellingen gedaan</AppTitle>
            <AppText>Bezoek onze winkel om een bestelling te plaatsen</AppText>
          </View>
        }
      />
    </>
  );
}

const styles = StyleSheet.create({
  emptyComponent: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  header: {
    zIndex: 3,
  },
});

export default OrderHistoryScreen;
