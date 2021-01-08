import React, { useContext } from "react";
import { StyleSheet } from "react-native";

import defaultStyles from "../../config/styles";
import optionsData from "../../../assets/placeholderData/options";
import optionsDataLoggedOut from "../../../assets/placeholderData/optionsDataLoggedOut";
import Screen from "../../components/screenStyling/Screen";
import AuthContext from "../../auth/context";
import LoggedInSettingsList from "../../components/lists/LoggedInSettingsList";
import LoggedOutSettingsList from "../../components/lists/LoggedOutSettingsList";

function UserSettingsScreen({ navigation }) {
  const authContext = useContext(AuthContext);

  const checkForLoggedUser = () => {
    if (authContext.user) {
      return true;
    } else {
      return false;
    }
  };

  let isLoggedIn = checkForLoggedUser();

  return (
    <Screen>
      {isLoggedIn ? (
        <LoggedInSettingsList data={optionsData} userData={authContext.user} />
      ) : (
        <LoggedOutSettingsList data={optionsDataLoggedOut} />
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  titleText: {
    fontSize: 24,
    color: defaultStyles.colors.black,
  },
  bottleCount: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default UserSettingsScreen;
