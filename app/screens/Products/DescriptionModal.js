import React from "react";
import { ScrollView, View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Constants from "expo-constants";

import i18n from "i18n-js";

import { AppText, AppTitle } from "../../components/fonts";
import defaultStyles from "../../config/styles";

function DescriptionModal({ route, navigation: { goBack } }) {
  return (
    <ScrollView style={[styles.container, defaultStyles.screenContainer]}>
      <View style={styles.topBar}>
        <AppTitle style={defaultStyles.title}>{i18n.t("description")}</AppTitle>
        <TouchableOpacity onPress={() => goBack()}>
          <MaterialCommunityIcons
            name="close"
            color={defaultStyles.colors.black}
            size={24}
          />
        </TouchableOpacity>
      </View>
      <AppText style={defaultStyles.topWhitespaceMini}>
        {route.params.productInfo}
      </AppText>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {},
  topBar: {
    flexDirection: "row",
    paddingTop: Constants.statusBarHeight,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 4,
  },
});

export default DescriptionModal;
