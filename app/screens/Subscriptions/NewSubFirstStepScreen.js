import React from "react";
import { StyleSheet } from "react-native";

import CustomHeader from "../../components/CustomHeader";
import Screen from "../../components/screenStyling/Screen";
import defaultStyles from "../../config/styles";
import subscriptionOptions from "../../../assets/placeholderData/subscriptionOptions";
import SubscriptionProductsList from "../../components/lists/SubscriptionProductsList";
import AppButton from "../../components/AppButton";

function NewSubFirstStepScreen({ navigation }) {
  return (
    <Screen style={[styles.container, defaultStyles.screenContainer]}>
      <CustomHeader title="Stap 1: kies je producten" style={styles.header} />

      <SubscriptionProductsList
        newSubscriptionList
        data={subscriptionOptions}
      />
      <AppButton
        icon="arrow-right"
        title="Bevestig gekozen producten"
        style={styles.nextButton}
        color="yellow"
        textColor="black"
        onPress={() => navigation.navigate("SubscriptionItemsOverview")}
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
  nextButton: {
    marginTop: 0,
    marginBottom: 12,
    elevation: 4,
    shadowColor: defaultStyles.colors.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 4,
    shadowOpacity: 0.15,
  },
  search: {
    marginBottom: 8,
  },
});

export default NewSubFirstStepScreen;
