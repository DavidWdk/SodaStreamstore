import React, { useState, useEffect } from "react";
import { LogBox } from "react-native";
LogBox.ignoreAllLogs(true);
LogBox.ignoreLogs(["Unhandled promise rejection: Error: Nat"]);

//needed for language localization
import lan from "./app/lang/i18n";

import userData from "./assets/placeholderData/userData";

//AUTH
import AuthContext from "./app/auth/context";

//NAVIGATION
import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "./app/navigation/navigationTheme";
import BottomNavigation from "./app/navigation/BottomNavigation";
import authStorage from "./app/auth/storage";

export default function App() {
  const [user, setUser] = useState();

  const restoreToken = async () => {
    const token = await authStorage.getToken();
    if (!token) return;
    setUser(userData);
  };

  useEffect(() => {
    restoreToken();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={navigationTheme}>
        <BottomNavigation />
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
