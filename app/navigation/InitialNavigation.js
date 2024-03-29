import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import HomeScreen from "../screens/HomeScreen";
import ProductDetailScreen from "../screens/Products/ProductDetailScreen";
import ProductOverviewScreen from "../screens/Products/ProductOverviewScreen";
import SearchScreen from "../screens/SearchScreen";
import LoginNavigation from "./LoginNavigation";
import DescriptionModal from "../screens/Products/DescriptionModal";
import WhyWaterScreen from "../screens/WhyWaterScreen";

const Stack = createStackNavigator();

const InitialNavigation = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Search" component={SearchScreen} />
    <Stack.Screen name="ProductDetails" component={ProductDetailScreen} />
    <Stack.Screen name="ProductOverview" component={ProductOverviewScreen} />
    <Stack.Screen name="Login" component={LoginNavigation} />
    <Stack.Screen name="Description" component={DescriptionModal} />
    <Stack.Screen name="WhyWater" component={WhyWaterScreen} />
  </Stack.Navigator>
);

export default InitialNavigation;
