import React from "react";

import CustomHeader from "../components/CustomHeader";
import ShoppingCartData from "../../assets/placeholderData/ShoppingCartData";
import ShoppingCartList from "../components/lists/ShoppingCartList";

function ShoppingCartScreen({ navigation }) {
  return (
    <>
      <CustomHeader title="Winkelmand" topPaddingAdjustment noBackButton />
      <ShoppingCartList
        data={ShoppingCartData}
        onPressShoppingCart={() => navigation.navigate("QuickCheck")}
      />
    </>
  );
}

export default ShoppingCartScreen;
