import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import LoyaltyPointsNavigation from "../navigation/LoyaltyPointsNavigation";
import NoSubscriptionNavigation from "./NoSubscriptionNavigation";
import SearchNavigation from "./SearchNavigator";
import ShoppingCartNavigation from "./ShoppingCartNavigation";
import SettingsNavigation from "./SettingsNavigation";
import defaultStyles from "../config/styles";
import InitialNavigation from "./InitialNavigation";

const Tab = createBottomTabNavigator();

const BottomNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: defaultStyles.colors.lightBlue,
      inactiveTintColor: defaultStyles.colors.lightGrey,
      showLabel: false,
    }}
  >
    <Tab.Screen
      name="Home"
      component={InitialNavigation}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name="home-outline"
            size={size}
            color={color}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Search"
      component={SearchNavigation}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="magnify" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="ShoppingCart"
      component={ShoppingCartNavigation}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name="cart-outline"
            size={size}
            color={color}
          />
        ),
      }}
    />
    <Tab.Screen
      name="NoActiveSubscription"
      component={NoSubscriptionNavigation}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name="calendar-repeat-outline"
            size={size}
            color={color}
          />
        ),
      }}
    />
    <Tab.Screen
      name="LoyaltyPoints"
      component={LoyaltyPointsNavigation}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="pig" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="ProfileSettings"
      component={SettingsNavigation}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name="account-settings"
            size={size}
            color={color}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default BottomNavigator;
