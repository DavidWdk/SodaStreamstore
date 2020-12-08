import React from "react";
import { View, StyleSheet } from "react-native";

import i18n from "i18n-js";

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
        title={i18n.t("orders")}
        backgroundColor="white"
      />
      <SmallProductList
        contentContainerStyle={{ flexGrow: 1 }}
        data={orderHistory}
        ListEmptyComponent={
          <View style={styles.emptyComponent}>
            <AppTitle>{i18n.t("emptyOrderHistory")}</AppTitle>
            <AppText>{i18n.t("emptyOrderHistoryDesc")}</AppText>
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
