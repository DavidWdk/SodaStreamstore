import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import CheckoutScreen from "../screens/CheckoutScreen";
import ShoppingCartScreen from "../screens/ShoppingCartScreen";
import UserVerificationCheckScreen from "../screens/UserVerificationCheckScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const ShoppingCartNavigation = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ShoppingCart" component={ShoppingCartScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="QuickCheck" component={UserVerificationCheckScreen} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
    </Stack.Navigator>
  );
};

export default ShoppingCartNavigation;
