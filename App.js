import React, { useState } from "react";
import { LogBox } from "react-native";
LogBox.ignoreAllLogs(true);
import { AppLoading } from "expo";

//NAVIGATION
import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "./app/navigation/navigationTheme";
import BottomNavigation from "./app/navigation/BottomNavigation";

//needed for language localization
import lan from "./app/lang/i18n";

//persisting user authentication over multiple app restarts
import AuthContext from "./app/auth/context";
import userData from "./assets/placeholderData/userData";
import authStorage from "./app/auth/storage";

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreToken = async () => {
    const token = await authStorage.getToken();
    if (!token) return;
    setUser(userData);
  };

  if (!isReady)
    return (
      <AppLoading startAsync={restoreToken} onFinish={() => setIsReady(true)} />
    );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={navigationTheme}>
        <BottomNavigation />
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
