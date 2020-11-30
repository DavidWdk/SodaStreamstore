import React from "react";

import CustomHeader from "../../components/CustomHeader";
import ShoppingCartData from "../../../assets/placeholderData/ShoppingCartData";
import ShoppingCartList from "../../components/lists/ShoppingCartList";

function SubscriptionItemsOverview({ navigation }) {
  return (
    <>
      <CustomHeader title="Gekozen producten" topPaddingAdjustment />
      <ShoppingCartList
        data={ShoppingCartData}
        subscriptionItemsOverview
        onPressSubscription={() =>
          navigation.navigate("NewSubscriptionSecondStep")
        }
      />
    </>
  );
}

export default SubscriptionItemsOverview;
