import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import AccountSettingsNavigation from "../navigation/AccountSettingsNavigation";
import AppSettingsScreen from "../screens/UserSettings/AppSettingsScreen";
import BottleCountSettings from "../screens/UserSettings/BottleCountSettingsScreen";
import OrderHistoryDetailScreen from "../screens/UserSettings/OrderHistoryDetailScreen";
import OrderHistoryScreen from "../screens/UserSettings/OrderHistoryScreen";
import UserSettingsScreen from "../screens/UserSettings/UserSettingsScreen";
import LoyaltyPointsNavigation from "./LoyaltyPointsNavigation";
import NoSubscriptionNavigation from "./NoSubscriptionNavigation";

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
    {/* Make subscription component dynamic based on whether subscription is active or not */}
    <Stack.Screen name="Subscription" component={NoSubscriptionNavigation} />
    <Stack.Screen name="LoyaltyPoints" component={LoyaltyPointsNavigation} />
    <Stack.Screen name="BottleCount" component={BottleCountSettings} />
    {/* Create recently viewed screen */}
    {/* Link to story feedback link */}
    {/* Link to webpage for customer service */}
    {/* Terms & conditions webpage link */}
  </Stack.Navigator>
);

export default SettingsNavigation;
