import React, { useState, useEffect, useContext } from "react";
import { View, StyleSheet } from "react-native";

import i18n from "i18n-js";

import CustomHeader from "../../components/CustomHeader";
import Screen from "../../components/screenStyling/Screen";
import defaultStyles from "../../config/styles";
import { AppText, AppTitle } from "../../components/fonts";
import SquareSelectionItems from "../../components/SquareSelectionItems";
import SubscriptionProductsList from "../../components/lists/SubscriptionProductsList";
import subscriptionQuantityOptions from "../../../assets/placeholderData/subscriptionQuantityOptions";
import ButtonOutline from "../../components/ButtonOutline";
import products from "../../../assets/placeholderData/products";
import AuthContext from "../../auth/context";

function ManageSubscriptionScreen(props) {
  const priceArray = products.map(({ price }) => price);
  const totalPriceArticles = priceArray.reduce((a, c) => a + c);
  const [deliveryCosts, setDeliveryCosts] = useState(0);

  const authContext = useContext(AuthContext);

  useEffect(() => {
    if (deliveryCosts < 50) {
      setDeliveryCosts(3.99);
    }
  }, []);

  return (
    <Screen style={defaultStyles.screenContainer}>
      <CustomHeader
        style={styles.header}
        title={i18n.t("manageSubscription")}
      />
      <SubscriptionProductsList
        style={styles.container}
        data={products}
        keyExtractor={(index, item) => item.toString()}
        ListHeaderComponent={
          <>
            <AppText italic style={defaultStyles.textCenter}>
              {i18n.t("dayBeforeNotice")}
            </AppText>

            <AppTitle style={defaultStyles.topWhitespaceSmaller}>
              {i18n.t("deliveryFreq")}
            </AppTitle>

            <SquareSelectionItems
              items={subscriptionQuantityOptions}
              style={styles.item}
            />
            <AppTitle style={styles.title}>{i18n.t("products")}</AppTitle>
          </>
        }
        additionalFooterComponent={
          <View style={styles.footer}>
            <AppTitle>Overige opties</AppTitle>
            <ButtonOutline title={i18n.t("skipNextDelivery")} />
            <ButtonOutline
              textColor="red"
              style={styles.stopSubBtn}
              title={i18n.t("cancelSubscription")}
            />
          </View>
        }
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {},
  item: {
    marginTop: 4,
  },
  footer: {
    paddingTop: 24,
    paddingBottom: 16,
  },
  header: {
    marginTop: 16,
  },
  products: {
    paddingHorizontal: 12,
  },
  stopSubBtn: {
    borderColor: defaultStyles.colors.red,
  },
  title: {
    paddingBottom: 8,
    paddingTop: 24,
    marginTop: 12,
  },
});

export default ManageSubscriptionScreen;
