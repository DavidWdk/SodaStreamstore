import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { StackActions } from "@react-navigation/native";

import i18n from "i18n-js";

import Screen from "../../components/screenStyling/Screen";
import CustomHeader from "../../components/CustomHeader";
import AppFlatlist from "../../components/lists/AppFlatlist";
import accountOptionsData from "../../../assets/placeholderData/accountOptionsData";
import ButtonOutline from "../../components/ButtonOutline";
import defaultStyles from "../../config/styles";
import AuthContext from "../../auth/context";
import authStorage from "../../auth/storage";

function AccountSettingsScreen({ navigation }) {
  const { user, setUser } = useContext(AuthContext);

  //Empties user state & redirect to home
  //while deleting stack navigation
  const handleLogout = () => {
    setUser();
    authStorage.removeToken();
    navigation.navigate("Home");
    const popAction = StackActions.pop(1);
    navigation.dispatch(popAction);
  };

  return (
    <Screen>
      <AppFlatlist
        data={accountOptionsData}
        ListHeaderComponent={
          <CustomHeader
            style={styles.header}
            title={i18n.t("accountSettings")}
          />
        }
        ListFooterComponent={
          <View
            style={[
              defaultStyles.screenContainer,
              defaultStyles.topWhitespaceMini,
            ]}
          >
            {user && (
              <ButtonOutline
                title={i18n.t("logout")}
                style={styles.logoutBtn}
                onPress={handleLogout}
                textColor="red"
              />
            )}
          </View>
        }
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  header: {
    paddingLeft: 8,
  },
  logoutBtn: {
    borderColor: defaultStyles.colors.red,
  },
});

export default AccountSettingsScreen;
