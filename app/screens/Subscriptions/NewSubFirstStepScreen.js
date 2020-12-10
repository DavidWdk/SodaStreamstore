import React from "react";
import { StyleSheet } from "react-native";

import i18n from "i18n-js";

import CustomHeader from "../../components/CustomHeader";
import Screen from "../../components/screenStyling/Screen";
import defaultStyles from "../../config/styles";
import subscriptionOptions from "../../../assets/placeholderData/subscriptionOptions";
import SubscriptionProductsList from "../../components/lists/SubscriptionProductsList";

function NewSubFirstStepScreen({ route }) {
  const handleHeaderTitle = () => {
    if (route.params?.addItem === true) {
      return i18n.t("addItems");
    } else {
      return i18n.t("step1");
    }
  };

  const title = handleHeaderTitle();

  return (
    <Screen style={[styles.container, defaultStyles.screenContainer]}>
      <CustomHeader title={title} style={styles.header} />

      <SubscriptionProductsList
        newSubscriptionList
        data={subscriptionOptions}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.white,
  },
  header: {
    marginBottom: 0,
    paddingBottom: 0,
  },
  search: {
    marginBottom: 8,
  },
});

export default NewSubFirstStepScreen;
