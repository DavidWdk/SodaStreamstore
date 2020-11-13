import React from "react";
import { View, StyleSheet } from "react-native";

import ImageSlider from "../products/ImageSlider";
import defaultStyles from "../../config/styles";
import { AppTitle, AppText } from "../fonts";
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
    const fullPrice = `€${string}`;
    return fullPrice.split(".");
  };

  const [euros, cents] = priceFormatter(productPrice);
  // console.log(priceFormatter("€4,99"));

  return (
    <View style={styles.container}>
      <ImageSlider images={productImages} />
      <View style={[defaultStyles.screenContainer, styles.mainInfoSection]}>
        <View style={styles.priceContainer}>
          <AppTitle style={defaultStyles.title}>{euros}</AppTitle>
          <AppTitle style={styles.cents}>{cents}</AppTitle>
        </View>
        <AppTitle style={defaultStyles.title}>{productTitle}</AppTitle>
        <AppButton
          bold
          fontSize={18}
          icon="cart"
          textColor="black"
          title="In winkelwagentje"
          color={"yellow"}
          onPress={() => console.log("Added to cart")}
        />
        {isProductHistory ? (
          <Check title={`Dit product is bezorgd op ${productHistoryArrivalDate}`} />
        )
          :
          (
            <>
              <Check />
              <Check title="Gratis verzending vanaf 50 euro" />
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
