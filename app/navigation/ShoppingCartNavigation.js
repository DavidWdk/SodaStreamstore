import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import CheckoutScreen from "../screens/CheckoutScreen";
import ShoppingCartScreen from "../screens/ShoppingCartScreen";
import UserVerificationCheckScreen from "../screens/UserVerificationCheckScreen";

const Stack = createStackNavigator();

const ShoppingCartNavigation = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="ShoppingCart" component={ShoppingCartScreen} />
    <Stack.Screen name="QuickCheck" component={UserVerificationCheckScreen} />
    <Stack.Screen name="Checkout" component={CheckoutScreen} />
  </Stack.Navigator>
);

export default ShoppingCartNavigation;
