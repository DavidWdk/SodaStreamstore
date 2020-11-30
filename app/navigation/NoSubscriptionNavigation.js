import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import MySubscriptionsScreen from "../screens/Subscriptions/MySubscriptionsScreen";
import NewSubFirstStepScreen from "../screens/Subscriptions/NewSubFirstStepScreen";
import NewSubSecondStepScreen from "../screens/Subscriptions/NewSubSecondStepScreen";
import NoSubscriptionScreen from "../screens/Subscriptions/NoSubscriptionsScreen";
import SubscriptionItemsOverviewScreen from "../screens/Subscriptions/SubscriptionItemsOverviewScreen";

const Stack = createStackNavigator();

const NoSubscriptionNavigation = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="NoSubscriptionPage" component={NoSubscriptionScreen} />
    <Stack.Screen
      name="NewSubscriptionFirstStep"
      component={NewSubFirstStepScreen}
    />
    <Stack.Screen
      name="SubscriptionItemsOverview"
      component={SubscriptionItemsOverviewScreen}
    />
    <Stack.Screen
      name="NewSubscriptionSecondStep"
      component={NewSubSecondStepScreen}
    />
    <Stack.Screen name="MySubscriptions" component={MySubscriptionsScreen} />
  </Stack.Navigator>
);

export default NoSubscriptionNavigation;
