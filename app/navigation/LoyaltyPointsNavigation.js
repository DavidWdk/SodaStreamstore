import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import DonateScreen from "../screens/DonateScreen";
import LoyaltyPointsScreen from "../screens/LoyaltyPointsScreen";

const Stack = createStackNavigator();

const LoyaltyPointsNavigation = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen
      name="LoyaltyPointsOverview"
      component={LoyaltyPointsScreen}
    />
    <Stack.Screen name="Donate" component={DonateScreen} />
    {/* Entire subscription stack below */}
    {/* <Stack.Screen name="Donate" component={DonateScreen} /> */}
  </Stack.Navigator>
);

export default LoyaltyPointsNavigation;
