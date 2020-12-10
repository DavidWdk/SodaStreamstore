import React from "react";

import i18n from "i18n-js";

import CustomHeader from "../../components/CustomHeader";
import ShoppingCartList from "../../components/lists/ShoppingCartList";

function SubscriptionItemsOverview({ navigation, route }) {
  return (
    <>
      <CustomHeader title={i18n.t("chosenProds")} topPaddingAdjustment />
      <ShoppingCartList
        data={route.params.subscriptionItems}
        subscriptionItemsOverview
        onPressSubscription={() =>
          navigation.navigate("NewSubscriptionSecondStep")
        }
      />
    </>
  );
}

export default SubscriptionItemsOverview;
