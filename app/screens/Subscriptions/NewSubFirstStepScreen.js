import React, { useState } from "react";
import { StyleSheet } from "react-native";

import CustomHeader from "../../components/CustomHeader";
import Screen from "../../components/screenStyling/Screen";
import defaultStyles from "../../config/styles";
import subscriptionOptions from "../../../assets/placeholderData/subscriptionOptions";
import SubscriptionProductsList from "../../components/lists/SubscriptionProductsList";
import { AppTitle } from "../../components/fonts";
import AppTextInput from "../../components/AppTextInput";

function NewSubFirstStepScreen(props) {
  const [shownProducts, setShownProducts] = useState(subscriptionOptions);

  const searchItems = (textToSearch) => {
    // var len = shownProducts.length
    // for (var i = 0; i < len;)
    // }
    // setShownProducts.filter((products) =>
    //   products.label.toLowerCase().includes(textToSearch.toLowerCase())
    // );
  };

  return (
    <Screen style={[styles.container, defaultStyles.screenContainer]}>
      <CustomHeader title="Stap 1: kies je producten" />

      <SubscriptionProductsList
        newSubscriptionList
        ListHeaderComponent={
          <>
            <AppTextInput
              icon="magnify"
              placeholder="Zoek een product..."
              style={styles.search}
              onChangeText={(text) => searchItems(text)}
            />
            <AppTitle style={defaultStyles.botSpacing}>
              Jouw meest bestelde producten
            </AppTitle>
          </>
        }
        data={shownProducts}
        keyExtractor={(product) => product.id.toString()}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.blueBackground,
  },
  search: {
    marginBottom: 8,
  },
});

export default NewSubFirstStepScreen;
