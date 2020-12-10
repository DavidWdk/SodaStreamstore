import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
// import InitialNavigation from "./InitialNavigation";

const Stack = createStackNavigator();

const LoginNavigation = ({ navigation }) => {
  // const navigation = useNavigation();
  navigation.setOptions({ tabBarVisible: false });

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default LoginNavigation;
