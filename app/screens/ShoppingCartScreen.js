import React, { useContext } from "react";
import i18n from "i18n-js";

import AuthContext from "../auth/context";
import CustomHeader from "../components/CustomHeader";
import ShoppingCartData from "../../assets/placeholderData/ShoppingCartData";
import ShoppingCartList from "../components/lists/ShoppingCartList";

function ShoppingCartScreen({ navigation }) {
  const authContext = useContext(AuthContext);

  const checkForLoggedUser = () => {
    if (authContext.user) {
      return true;
    } else {
      return false;
    }
  };

  let isLoggedIn = checkForLoggedUser();

  return (
    <>
      <CustomHeader
        title={i18n.t("shoppingCart")}
        topPaddingAdjustment
        noBackButton
      />
      <ShoppingCartList
        data={ShoppingCartData}
        onPressShoppingCart={() => {
          isLoggedIn
            ? navigation.navigate("QuickCheck")
            : navigation.navigate("Login", { checkout: true });
        }}
      />
    </>
  );
}

export default ShoppingCartScreen;
