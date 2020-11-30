import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import AlternativeDeliveryAddressScreen from "../screens/UserSettings/AlternativeDeliveryAddressScreen";
import ChangePassScreen from "../screens/UserSettings/ChangePassScreen";
import BillingInfoScreen from "../screens/UserSettings/BillingInfoScreen";
import AccountSettingsScreen from "../screens/UserSettings/AccountSettingsScreen";

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
  </Stack.Navigator>
);

export default SettingsNavigation;
