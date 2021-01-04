import React from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import i18n from "i18n-js";

import ImageSlider from "../products/ImageSlider";
import defaultStyles from "../../config/styles";
import { AppTitle } from "../fonts";
import AppButton from "../AppButton";
import Check from "./Check";

function productShowcaseFold({
  productImages,
  productTitle,
  productPrice,
  isProductHistory = false,
  productHistoryArrivalDate = "Date",
}) {
  const priceFormatter = (price) => {
    const string = price.toString();
    const fullPrice = `${string}`;
    return fullPrice.split(".");
  };

  const navigation = useNavigation();
  const [euros, cents] = priceFormatter(productPrice);

  const route = {};

  return (
    <View style={styles.container}>
      <ImageSlider images={productImages} />
      <View style={[defaultStyles.screenContainer, styles.mainInfoSection]}>
        <View style={styles.priceContainer}>
          <AppTitle style={defaultStyles.title}>{euros}</AppTitle>
          <AppTitle style={styles.cents}>{cents}</AppTitle>
        </View>
        <AppTitle style={defaultStyles.title}>{productTitle}</AppTitle>
        {isProductHistory ? (
          <AppButton
            bold
            fontSize={18}
            icon="chevron-right"
            textColor="black"
            title={i18n.t("goToProduct")}
            color={"yellow"}
            onPress={() => navigation.navigate("ProductDetails", route)}
          />
        ) : (
          <AppButton
            bold
            fontSize={18}
            icon="cart-outline"
            textColor="black"
            title={i18n.t("addToCart")}
            color={"yellow"}
          />
        )}

        {isProductHistory ? (
          <Check
            title={`${i18n.t("wasDeliveredDate")} ${productHistoryArrivalDate}`}
          />
        ) : (
          <>
            <Check />
            <Check title={i18n.t("freeDeliveryNotice")} />
          </>
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mainInfoSection: {
    paddingVertical: 16,
    backgroundColor: defaultStyles.colors.blueBackground,
  },
  priceContainer: {
    flexDirection: "row",
  },
  cents: {
    fontSize: 16,
    paddingTop: 2,
  },
});

export default productShowcaseFold;
