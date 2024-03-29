import React from "react";
import { View, StyleSheet } from "react-native";

import i18n from "i18n-js";

import SmallProductList from "../../components/lists/SmallProductList";
import defaultStyles from "../../config/styles";
import orderHistory from "../../../assets/placeholderData/orderHistory";
import CustomHeader from "../../components/CustomHeader";
import { AppTitle, AppText } from "../../components/fonts";
import AppButton from "../../components/AppButton";

function OrderHistoryScreen({ navigation }) {
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
        ListHeaderComponent={
          <View style={defaultStyles.screenContainer}>
            <AppText italic thin style={defaultStyles.textCenter}>
              {i18n.t("subscriptionSuggestion")}
            </AppText>

            <AppButton
              color="yellow"
              textColor="black"
              icon="calendar-repeat-outline"
              title="Abonnement beheren"
              bold
              onPress={() => navigation.navigate("Subscription")}
            />
          </View>
        }
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
