import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import ProductDetailScreen from "../screens/Products/ProductDetailScreen";
import ProductOverviewScreen from "../screens/Products/ProductOverviewScreen";
import SearchScreen from "../screens/SearchScreen";

const Stack = createStackNavigator();

const SearchNavigation = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Search" component={SearchScreen} />
    <Stack.Screen name="ProductOverview" component={ProductOverviewScreen} />
    <Stack.Screen name="ProductDetails" component={ProductDetailScreen} />
  </Stack.Navigator>
);

export default SearchNavigation;
