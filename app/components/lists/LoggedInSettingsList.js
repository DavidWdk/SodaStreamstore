import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import BottleCounter from "../BottleCounter";
import { AppText, AppTitle } from "../fonts";
import AppFlatlist from "./AppFlatlist";
import defaultStyles from "../../config/styles";

function LoggedInSettingsList({ data, userData }) {
  const navigation = useNavigation();

  return (
    <AppFlatlist
      data={data}
      ListHeaderComponent={
        <View style={defaultStyles.screenContainer}>
          <AppTitle style={defaultStyles.title}>
            {userData.voornaam} {userData.achternaam}
          </AppTitle>
          <AppText style={defaultStyles.subtitle}>{userData.email}</AppText>
        </View>
      }
      ListFooterComponent={
        <View
          style={[
            defaultStyles.screenContainer,
            defaultStyles.topWhitespaceSmallest,
            defaultStyles.botSpacing16,
          ]}
        >
          <BottleCounter
            bottleAmounth={192}
            onPress={() => navigation.navigate("BottleCount")}
          />
        </View>
      }
    />
  );
}

export default LoggedInSettingsList;
