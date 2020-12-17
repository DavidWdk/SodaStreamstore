import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import lan from "../lang/i18n";

import LoyaltyPointsNavigation from "../navigation/LoyaltyPointsNavigation";
import SubscriptionNavigation from "./SubscriptionNavigation";
import SearchNavigation from "./SearchNavigator";
import ShoppingCartNavigation from "./ShoppingCartNavigation";
import SettingsNavigation from "./SettingsNavigation";
import defaultStyles from "../config/styles";
import InitialNavigation from "./InitialNavigation";

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  const getTabBarVisibility = (route) => {
    const routeName = route.state
      ? route.state.routes[route.state.index].name
      : "";

    if (routeName === "Login") {
      return false;
    }

    return true;
  };

  return (
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
        options={({ route }) => ({
          tabBarVisible: getTabBarVisibility(route),
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="home-outline"
              size={size}
              color={color}
            />
          ),
        })}
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
        options={({ route }) => ({
          tabBarVisible: getTabBarVisibility(route),
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="cart-outline"
              size={size}
              color={color}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Subscription"
        component={SubscriptionNavigation}
        options={({ route }) => ({
          tabBarVisible: getTabBarVisibility(route),
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="calendar-repeat-outline"
              size={size}
              color={color}
            />
          ),
        })}
      />
      <Tab.Screen
        name="LoyaltyPoints"
        component={LoyaltyPointsNavigation}
        options={({ route }) => ({
          tabBarVisible: getTabBarVisibility(route),
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="pig" size={size} color={color} />
          ),
        })}
      />
      <Tab.Screen
        name="ProfileSettings"
        component={SettingsNavigation}
        options={({ route }) => ({
          tabBarVisible: getTabBarVisibility(route),
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="account-settings"
              size={size}
              color={color}
            />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
