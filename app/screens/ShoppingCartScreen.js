import React from "react";
import {} from "react-native";

import CustomHeader from "../components/CustomHeader";
import ShoppingCartData from "../../assets/placeholderData/ShoppingCartData";
import ShoppingCartList from "../components/lists/ShoppingCartList";

function ShoppingCartScreen(props) {
  return (
    <>
      <CustomHeader title="Winkelmand" topPaddingAdjustment noBackButton />
      <ShoppingCartList data={ShoppingCartData} />
    </>
  );
}

export default ShoppingCartScreen;
