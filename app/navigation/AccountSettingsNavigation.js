import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import AlternativeDeliveryAddressScreen from "../screens/UserSettings/AlternativeDeliveryAddressScreen";
import ChangePassScreen from "../screens/UserSettings/ChangePassScreen";
import BillingInfoScreen from "../screens/UserSettings/BillingInfoScreen";
import AccountSettingsScreen from "../screens/UserSettings/AccountSettingsScreen";
import OrderHistoryDetailScreen from "../screens/UserSettings/OrderHistoryDetailScreen";
import LoginNavigation from "./LoginNavigation";

const Stack = createStackNavigator();

const SettingsNavigation = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="AccountSettings" component={AccountSettingsScreen} />
    <Stack.Screen name="BillingInfo" component={BillingInfoScreen} />
    <Stack.Screen name="ChangePassword" component={ChangePassScreen} />
    <Stack.Screen
      name="AltnernativeDeliveryAddress"
      component={AlternativeDeliveryAddressScreen}
    />
    <Stack.Screen
      name="OrderHistoryDetails"
      component={OrderHistoryDetailScreen}
    />
    <Stack.Screen name="Login" component={LoginNavigation} />
  </Stack.Navigator>
);

export default SettingsNavigation;
