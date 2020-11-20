import React, { useState } from "react";
import { StyleSheet, Platform } from "react-native";

import CustomHeader from "../../components/CustomHeader";
import Screen from "../../components/screenStyling/Screen";
import defaultStyles from "../../config/styles";
import subscriptionOptions from "../../../assets/placeholderData/subscriptionOptions";
import SubscriptionProductsList from "../../components/lists/SubscriptionProductsList";
import { AppTitle } from "../../components/fonts";
import AppTextInput from "../../components/AppTextInput";
import AppButton from "../../components/AppButton";

function NewSubFirstStepScreen(props) {
  const [shownProducts, setShownProducts] = useState(subscriptionOptions);

  const searchItems = (textToSearch) => {};

  return (
    <Screen style={[styles.container, defaultStyles.screenContainer]}>
      <CustomHeader title="Stap 1: kies je producten" style={styles.header} />

      <SubscriptionProductsList
        newSubscriptionList
        // ListHeaderComponent={
        //   <>
        //     <AppTextInput
        //       icon="magnify"
        //       placeholder="Zoek een product..."
        //       style={styles.search}
        //       onChangeText={(text) => searchItems(text)}
        //     />
        //     <AppTitle style={defaultStyles.botSpacing}>
        //       Jouw meest bestelde producten
        //     </AppTitle>
        //   </>
        // }
        data={shownProducts}
      />
      <AppButton
        icon="arrow-right"
        title="Door naar volgende stap"
        style={styles.nextButton}
        color="yellow"
        textColor="black"
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
    marginVertical: 0,
    marginBottom: Platform.OS == "ios" ? 0 : 24,
    // marginBottom: 8,
    elevation: 4,
    shadowColor: defaultStyles.colors.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 4,
    shadowOpacity: 0.15,
    // position: "absolute",
    // bottom: 0,
    // alignSelf: "center",
    // width: "80%",
  },
  search: {
    marginBottom: 8,
  },
});

export default NewSubFirstStepScreen;
