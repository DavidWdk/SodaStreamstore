import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import AuthContext from "../auth/context";
import CheckoutScreen from "../screens/CheckoutScreen";
import ShoppingCartScreen from "../screens/ShoppingCartScreen";
import UserVerificationCheckScreen from "../screens/UserVerificationCheckScreen";
import LoginNavigation from "../navigation/LoginNavigation";

const ShoppingCartNavigation = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ShoppingCart" component={ShoppingCartScreen} />
      <Stack.Screen name="Login" component={LoginNavigation} />
      <Stack.Screen name="QuickCheck" component={UserVerificationCheckScreen} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
    </Stack.Navigator>
  );
};

export default ShoppingCartNavigation;
