import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import ProductDetailScreen from "../screens/Products/ProductDetailScreen";
import ProductOverviewScreen from "../screens/Products/ProductOverviewScreen";
import RegisterScreen from "../screens/RegisterScreen";
import SearchScreen from "../screens/SearchScreen";
import MySubscriptionsScreen from "../screens/Subscriptions/MySubscriptionsScreen";

const Stack = createStackNavigator();

const InitialNavigation = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Search" component={SearchScreen} />
    <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
    <Stack.Screen name="ProductOverview" component={ProductOverviewScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen
      name="SubscriptionWelcome"
      component={MySubscriptionsScreen}
    />
  </Stack.Navigator>
);

export default InitialNavigation;
