import { createStackNavigator } from "@react-navigation/stack";
import React, { useContext, useEffect } from "react";

import MySubscriptionsScreen from "../screens/Subscriptions/MySubscriptionsScreen";
import NewSubFirstStepScreen from "../screens/Subscriptions/NewSubFirstStepScreen";
import NewSubSecondStepScreen from "../screens/Subscriptions/NewSubSecondStepScreen";
import NoSubscriptionScreen from "../screens/Subscriptions/NoSubscriptionsScreen";
import SubscriptionItemsOverviewScreen from "../screens/Subscriptions/SubscriptionItemsOverviewScreen";
import ManageSubscriptionScreen from "../screens/Subscriptions/ManageSubscriptionScreen";
import LoggedOutSubScreen from "../screens/Subscriptions/LoggedOutSubScreen";
import AuthContext from "../auth/context";
import LoginNavigation from "./LoginNavigation";

const Stack = createStackNavigator();

const NoSubscriptionNavigation = () => {
  let authContext = useContext(AuthContext);

  const checkForLoggedUser = () => {
    if (authContext.user) {
      return true;
    } else {
      return false;
    }
  };

  let isLoggedIn = checkForLoggedUser();

  const checkForSubscription = () => {
    if (authContext.user !== undefined || null) {
      if (authContext.user.activeSubscription !== null || undefined) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  let currentlySubscribedCheck = checkForSubscription();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isLoggedIn ? (
        <>
          {currentlySubscribedCheck ? (
            <>
              <Stack.Screen
                name="ManageSub"
                component={ManageSubscriptionScreen}
              />
              <Stack.Screen
                name="NewSubscriptionFirstStep"
                component={NewSubFirstStepScreen}
              />
              <Stack.Screen
                name="SubscriptionItemsOverview"
                component={SubscriptionItemsOverviewScreen}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name="NoSubscriptionPage"
                component={NoSubscriptionScreen}
              />
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
            </>
          )}
        </>
      ) : (
        <>
          <Stack.Screen name="LoggedOut" component={LoggedOutSubScreen} />
          <Stack.Screen name="Login" component={LoginNavigation} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default NoSubscriptionNavigation;
