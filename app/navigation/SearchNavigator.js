import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import FilterScreen from "../screens/Products/FilterScreen";
import ProductDetailScreen from "../screens/Products/ProductDetailScreen";
import ProductOverviewScreen from "../screens/Products/ProductOverviewScreen";
import SearchScreen from "../screens/SearchScreen";
import DescriptionModal from "../screens/Products/DescriptionModal";
import OrderHistoryScreen from "../screens/UserSettings/OrderHistoryScreen";
import OrderHistoryDetailScreen from "../screens/UserSettings/OrderHistoryDetailScreen";
import PreviouslySeenScreen from "../screens/PreviouslySeenScreen";

const Stack = createStackNavigator();

const SearchNavigation = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Search" component={SearchScreen} />
    <Stack.Screen name="ProductOverview" component={ProductOverviewScreen} />
    <Stack.Screen name="ProductDetails" component={ProductDetailScreen} />
    <Stack.Screen name="Filter" component={FilterScreen} />
    <Stack.Screen name="Description" component={DescriptionModal} />
    <Stack.Screen name="OrderHistory" component={OrderHistoryScreen} />
    <Stack.Screen
      name="OrderHistoryDetails"
      component={OrderHistoryDetailScreen}
    />
    <Stack.Screen name="PreviouslySeen" component={PreviouslySeenScreen} />
  </Stack.Navigator>
);

export default SearchNavigation;
