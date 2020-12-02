import { createStackNavigator } from "@react-navigation/stack";
import React, { useContext, useEffect } from "react";

import MySubscriptionsScreen from "../screens/Subscriptions/MySubscriptionsScreen";
import NewSubFirstStepScreen from "../screens/Subscriptions/NewSubFirstStepScreen";
import NewSubSecondStepScreen from "../screens/Subscriptions/NewSubSecondStepScreen";
import NoSubscriptionScreen from "../screens/Subscriptions/NoSubscriptionsScreen";
import SubscriptionItemsOverviewScreen from "../screens/Subscriptions/SubscriptionItemsOverviewScreen";
import ManageSubscriptionScreen from "../screens/Subscriptions/ManageSubscriptionScreen";
import AuthContext from "../auth/context";

const Stack = createStackNavigator();

const NoSubscriptionNavigation = () => {
  const authContext = useContext(AuthContext);

  // console.log(authContext.user.activeSubscription);

  // const checkForSubscription = () => {
  //   if (authContext.user.activeSubscription == true) {
  //     return true;
  //   } else if (authContext.user.activeSubscription == undefined) {
  //     return false;
  //   }
  // };

  // let check = checkForSubscription();

  // useEffect(() => {
  //   console.log("Been going thru it");
  //   check = checkForSubscription();
  // }, [authContext]);

  // let check = true;

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* {check ? ( */}
      <Stack.Screen
        name="ManageSubscription"
        component={ManageSubscriptionScreen}
      />
      {/* ) : ( */}
      {/* <> */}
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
      <Stack.Screen name="MySubscriptions" component={MySubscriptionsScreen} />
      {/* </> */}
      {/* )} */}
    </Stack.Navigator>
  );
};

export default NoSubscriptionNavigation;
