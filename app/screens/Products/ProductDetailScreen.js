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
import AddedToCartNotification from "../../components/AddedToCartNotification";

function ProductDetailScreen({ route, navigation }) {
  if (route.params.item == undefined || null) {
    route.params.item = {
      id: 4,
      title: "SodaStream Fruit Drops Mango Siroop",
      price: "€4,99",
      image:
        "https://image.sodastreamstore.nl/m/sodastream-fruit-drops-siroop-mango?sid=3&pid=3460647",
      images: [
        {
          image:
            "https://image.sodastreamstore.nl/m/sodastream-fruit-drops-siroop-mango?sid=3&pid=3460647",
        },
        {
          image:
            "https://image.sodastreamstore.nl/m/sodastream-fruit-drops-siroop-mango?sid=3&pid=3460647&sort=1",
        },
      ],
    };
  }

  const showNotification = () => {};

  return (
    <>
      <CustomHeader topPaddingAdjustment title={route.params.item.title} />
      <ScrollView style={styles.container}>
        <ProductShowcaseFold
          productImages={route.params.item.images}
          productTitle={route.params.item.title}
          productPrice={route.params.item.price}
          onPress={() => showNotification()}
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
