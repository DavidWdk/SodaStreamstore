import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";

import Screen from "../../components/screenStyling/Screen";
import CustomHeader from "../../components/CustomHeader";
import AppFlatlist from "../../components/lists/AppFlatlist";
import accountOptionsData from "../../../assets/placeholderData/accountOptionsData";
import ButtonOutline from "../../components/ButtonOutline";
import defaultStyles from "../../config/styles";
import AuthContext from "../../auth/context";

function AccountSettingsScreen({ navigation }) {
  const authContext = useContext(AuthContext);

  const handleLogout = () => {
    authContext.setUser();
    navigation.navigate("Home");
  };

  return (
    <Screen>
      <AppFlatlist
        data={accountOptionsData}
        ListHeaderComponent={
          <CustomHeader style={styles.header} title="Accountinstellingen" />
        }
        ListFooterComponent={
          <View
            style={[
              defaultStyles.screenContainer,
              defaultStyles.topWhitespaceMini,
            ]}
          >
            {authContext.user && (
              <ButtonOutline
                textColor="red"
                title="Uitloggen"
                borderColor="red"
                onPress={handleLogout}
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
});

export default AccountSettingsScreen;
