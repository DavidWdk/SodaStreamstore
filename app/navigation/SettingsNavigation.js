import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import AccountSettingsNavigation from "../navigation/AccountSettingsNavigation";
import PreviouslySeenScreen from "../screens/PreviouslySeenScreen";
import ProductDetailScreen from "../screens/Products/ProductDetailScreen";
import AppSettingsScreen from "../screens/UserSettings/AppSettingsScreen";
import BottleCountSettings from "../screens/UserSettings/BottleCountSettingsScreen";
import CustomerServiceScreen from "../screens/UserSettings/CustomerServiceScreen";
import OrderHistoryDetailScreen from "../screens/UserSettings/OrderHistoryDetailScreen";
import OrderHistoryScreen from "../screens/UserSettings/OrderHistoryScreen";
import TermsConditionsScreen from "../screens/UserSettings/TermsConditionsScreen";
import UserSettingsScreen from "../screens/UserSettings/UserSettingsScreen";
import LoginNavigation from "./LoginNavigation";

const Stack = createStackNavigator();

const SettingsNavigation = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="SettingsOverview" component={UserSettingsScreen} />
    <Stack.Screen name="OrderHistory" component={OrderHistoryScreen} />
    <Stack.Screen
      name="OrderHistoryDetails"
      component={OrderHistoryDetailScreen}
    />
    <Stack.Screen name="AppSettings" component={AppSettingsScreen} />
    <Stack.Screen
      name="AccountSettings"
      component={AccountSettingsNavigation}
    />
    <Stack.Screen name="BottleCount" component={BottleCountSettings} />
    <Stack.Screen name="Login" component={LoginNavigation} />
    <Stack.Screen name="RecentlyViewed" component={PreviouslySeenScreen} />
    <Stack.Screen name="ProductDetails" component={ProductDetailScreen} />
    <Stack.Screen name="TermsConditions" component={TermsConditionsScreen} />
    <Stack.Screen name="CustomerService" component={CustomerServiceScreen} />
  </Stack.Navigator>
);

export default SettingsNavigation;
