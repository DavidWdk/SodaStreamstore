import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import relatedProducts from "../../../assets/placeholderData/popularProducts";
import i18n from "i18n-js";

import CustomHeader from "../../components/CustomHeader";
import { AppTitle, AppText } from "../../components/fonts";
import ProductShowcaseFold from "../../components/products/ProductShowcaseFold";
import defaultStyles from "../../config/styles";
import SecondaryButton from "../../components/SecondaryButton";
import NutritionSchema from "../../components/products/NutritionSchema";
import SpecificationSchema from "../../components/products/SpecificationSchema";
import AppButton from "../../components/AppButton";
import HorizontalItemList from "../../components/lists/HorizontalItemList";
import productInfo from "../../../assets/placeholderData/productDetailExample";

function ProductDetailScreen({ route, navigation }) {
  return (
    <>
      <CustomHeader topPaddingAdjustment title="" />
      <ScrollView style={styles.container}>
        <ProductShowcaseFold
          productImages={route.params.item.images}
          productTitle={route.params.item.title}
          productPrice={route.params.item.price}
        />

        <View
          style={[
            defaultStyles.screenContainer,
            defaultStyles.topWhitespaceSmaller,
          ]}
        >
          <AppTitle>{i18n.t("description")}</AppTitle>
          <AppText
            numberOfLines={3}
            style={defaultStyles.topWhitespaceLinePadding}
          >
            {productInfo.description}
          </AppText>

          <SecondaryButton
            title={i18n.t("seeFullDesc")}
            icon="chevron-right"
            style={styles.viewDescriptionButton}
            onPress={() =>
              navigation.navigate("Description", {
                productInfo: productInfo.description,
              })
            }
          />

          {productInfo.nutrition && (
            <View style={defaultStyles.topWhitespaceSmaller}>
              <AppTitle>{i18n.t("nutrition")}</AppTitle>
              <NutritionSchema
                data={productInfo.nutrition}
                style={styles.nutrition}
              />
            </View>
          )}
        </View>

        <View style={[defaultStyles.blueSection, styles.section]}>
          <AppTitle>{i18n.t("specs")}</AppTitle>
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
            title={i18n.t("addToCart")}
          />

          <AppTitle>{i18n.t("relatedProducts")}</AppTitle>
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
