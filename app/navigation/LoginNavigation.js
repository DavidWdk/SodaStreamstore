import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import InitialNavigation from "./InitialNavigation";

const Stack = createStackNavigator();

const LoginNavigation = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="Home" component={InitialNavigation} />
  </Stack.Navigator>
);

export default LoginNavigation;
