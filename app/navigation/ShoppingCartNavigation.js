import { createStackNavigator } from "@react-navigation/stack";
import React, { useContext } from "react";

import CheckoutScreen from "../screens/CheckoutScreen";
import ShoppingCartScreen from "../screens/ShoppingCartScreen";
import ProductDetailScreen from "../screens/Products/ProductDetailScreen";
//UNCOMMENT THE LINE BELOW AND IN LOGGEDINNAVIGATION FOR AN EXTRA AUTHENTICATION LAYER FOR LOGGED IN USERS
// import UserVerificationCheckScreen from "../screens/UserVerificationCheckScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import AuthContext from "../auth/context";

const ShoppingCartNavigation = () => {
  const Stack = createStackNavigator();
  const authContext = useContext(AuthContext);

  const checkForLoggedUser = () => {
    if (authContext.user) {
      return true;
    } else {
      return false;
    }
  };

  let isLoggedIn = checkForLoggedUser();

  const loggedInNavigation = () => (
    <>
      <Stack.Screen name="ShoppingCart" component={ShoppingCartScreen} />
      <Stack.Screen name="ProductDetails" component={ProductDetailScreen} />
      {/*  UNCOMMENT THE LINE BELOW FOR AN EXTRA AUTHENTICATION LAYER FOR LOGGED IN USERS
      <Stack.Screen name="QuickCheck" component={UserVerificationCheckScreen} /> */}
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
    </>
  );

  const loggedOutNavigation = () => (
    <>
      <Stack.Screen name="ShoppingCart" component={ShoppingCartScreen} />
      <Stack.Screen name="ProductDetails" component={ProductDetailScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    </>
  );

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isLoggedIn ? loggedOutNavigation() : loggedInNavigation()}
    </Stack.Navigator>
  );
};

export default ShoppingCartNavigation;
