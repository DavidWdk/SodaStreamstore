import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import relatedProducts from "../../../assets/placeholderData/popularProducts";

import CustomHeader from "../../components/CustomHeader";
import { AppTitle, AppText } from "../../components/fonts";
import ProductShowcaseFold from "../../components/products/ProductShowcaseFold";
import defaultStyles from "../../config/styles";
import SecondaryButton from "../../components/SecondaryButton";
import NutritionSchema from "../../components/products/NutritionSchema";
import SpecificationSchema from "../../components/products/SpecificationSchema";
import AppButton from "../../components/AppButton";
import HorizontalItemList from "../../components/lists/HorizontalItemList";

const productInfo = {
  price: 25.99,
  name: "SodaStream CO2 cilinder",
  images: [
    {
      image: "https://image.sodastreamstore.nl/m/sodastream?sid=3&pid=1716332",
    },
  ],
  description:
    "Let op: retourneer lege cilinders en voorkom een toeslag van €15 per cilinder. Met SodaStream koolzuur cilinders tover je kraanwater gemakelijk en snel om tot koolzuurhoudend water.",
  nutrition: [
    {
      nutritionTitle: "Light",
      nutritionInfo: "Nee",
    },
    {
      nutritionTitle: "Energie (kcal)",
      nutritionInfo: "0.80",
    },
    {
      nutritionTitle: "Koolhydraten",
      nutritionInfo: "0.00",
    },
    {
      nutritionTitle: "Calcium",
      nutritionInfo: "0.00",
    },
    {
      nutritionTitle: "Vetten",
      nutritionInfo: "0.00",
    },
  ],
  specifications: [
    {
      title: "Merk",
      specification: "SodaStream",
    },
    {
      title: "Accessoires",
      specification: "CO2 cilinder",
    },
    {
      title: "Geschikt voor",
      specification: "Alle apparaten",
    },
    {
      title: "Set inhoud",
      specification: "CO2 cilinder",
    },
    {
      title: "Goed voor",
      specification: "60 liter",
    },
    {
      title: "Aantal",
      specification: "1 stuk",
    },
  ],
};

console.log(productInfo.images);

function ProductDetailScreen(props) {
  return (
    <>
      <CustomHeader topPaddingAdjustment title="" />
      <ScrollView style={styles.container}>
        <ProductShowcaseFold
          productImages={productInfo.images}
          productTitle={productInfo.name}
          productPrice={4.99}
        />

        <View
          style={[
            defaultStyles.screenContainer,
            defaultStyles.topWhitespaceSmaller,
          ]}
        >
          <AppTitle>Omschrijving</AppTitle>
          <AppText
            numberOfLines={3}
            style={defaultStyles.topWhitespaceLinePadding}
          >
            {productInfo.description}
          </AppText>

          <SecondaryButton
            title="Bekijk de volledige omschrijving..."
            icon="chevron-right"
            style={styles.viewDescriptionButton}
          />

          {productInfo.nutrition && (
            <View style={defaultStyles.topWhitespaceSmaller}>
              <AppTitle>Voedingswaarde</AppTitle>
              <NutritionSchema
                data={productInfo.nutrition}
                style={styles.nutrition}
              />
            </View>
          )}
        </View>

        <View style={[defaultStyles.blueSection, styles.section]}>
          <AppTitle>Specificaties</AppTitle>
          <SpecificationSchema
            style={defaultStyles.topWhitespaceLinePadding}
            data={productInfo.specifications}
          />
        </View>

        <View style={defaultStyles.screenContainer}>
          <AppButton
            bold
            textColor="black"
            color="yellow"
            icon="cart-outline"
            title="In winkelwagentje"
          />

          <AppTitle>Gerelateerde producten</AppTitle>
        </View>
        <HorizontalItemList
          data={relatedProducts}
          style={styles.horizontalScrollView}
        />
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {},
  horizontalScrollView: {
    marginTop: 4,
    marginBottom: 16,
  },
  nutrition: {
    marginTop: 4,
  },
  viewDescriptionButton: {
    justifyContent: "flex-start",
  },
  section: {
    marginTop: 24,
    marginBottom: 12,
  },
});

export default ProductDetailScreen;
