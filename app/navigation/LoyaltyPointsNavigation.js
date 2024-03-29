import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import DonateScreen from "../screens/DonateScreen";
import LoyaltyPointsScreen from "../screens/LoyaltyPointsScreen";
import LoggedoutLoyaltyScreen from "../screens/LoggedOutLoyaltyScreen";
import AuthContext from "../auth/context";
import LoginNavigation from "./LoginNavigation";

const Stack = createStackNavigator();

const LoyaltyPointsNavigation = () => {
  let authContext = useContext(AuthContext);

  const checkForLoggedUser = () => {
    if (authContext.user) {
      return true;
    } else {
      return false;
    }
  };

  let isLoggedIn = checkForLoggedUser();

  const loggedInNavigation = () => (
    <>
      <Stack.Screen
        name="LoyaltyPointsOverview"
        component={LoyaltyPointsScreen}
      />
      <Stack.Screen name="Donate" component={DonateScreen} />
    </>
  );

  const loggedOutNavigation = () => (
    <>
      <Stack.Screen
        name="LoggedOutLoyalty"
        component={LoggedoutLoyaltyScreen}
      />
      <Stack.Screen name="Login" component={LoginNavigation} />
    </>
  );

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isLoggedIn ? loggedOutNavigation() : loggedInNavigation()}
    </Stack.Navigator>
  );
};

export default LoyaltyPointsNavigation;
