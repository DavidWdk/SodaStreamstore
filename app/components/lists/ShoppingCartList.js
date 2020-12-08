import React, { useState, useEffect } from "react";
import { FlatList, View } from "react-native";

import i18n from "i18n-js";

import ShoppingCartItem from "./ShoppingCartItem";
import ListItemSeperatorFullLength from "./ListItemSeperatorFullLength";
import { AppTitle, AppText } from "../fonts";
import PriceSum from "../PriceSum";
import defaultStyles from "../../config/styles";
import EmptyShoppingCart from "./EmptyShoppingCart";
import AppButton from "../../components/AppButton";

function ShoppingCartList({
  data,
  subscriptionItemsOverview = false,
  onPressSubscription,
  onPressShoppingCart,
}) {
  const [shoppingCartData, setShoppingCartData] = useState(data);
  const [deliveryCosts, setDeliveryCosts] = useState();
  const [totalPrice, setTotalPrice] = useState();

  const getProductById = (itemID) => {
    for (let i in shoppingCartData) {
      if (shoppingCartData[i].id == itemID) {
        return shoppingCartData[i];
      }
    }
  };

  const formatPrice = (price) => {
    if (typeof price === "number") {
      price = price.toFixed(2);
      let priceStr = price.toString().replace(".", ",");
      priceStr = "€" + priceStr;
      return priceStr;
    }
  };

  const calculateTotalPricePerProduct = (itemID) => {
    const productById = getProductById(itemID);
    return formatPrice(productById.price * productById.amount);
  };

  const calculateInitialTotalPrice = () => {
    let total = 0;
    for (const i in shoppingCartData) {
      total += shoppingCartData[i].price * shoppingCartData[i].amount;
    }
    return total;
  };

  const [totalProductsPrice, setTotalProductsPrice] = useState(
    calculateInitialTotalPrice()
  );

  const calculateTotalProductsPrice = () => {
    let total = 0;
    for (const i in shoppingCartData) {
      total += shoppingCartData[i].price * shoppingCartData[i].amount;
    }
    setTotalProductsPrice(total);
  };

  const getInitialAmounts = (itemID) => {
    const productById = getProductById(itemID);
    return productById.amount;
  };

  useEffect(() => {
    setTotalPrice(deliveryCosts + totalProductsPrice);
  }, [totalProductsPrice, deliveryCosts]);

  useEffect(() => {
    if (totalProductsPrice < 50) {
      setDeliveryCosts(3.99);
    } else {
      setDeliveryCosts(0.0);
    }
  }, [totalProductsPrice]);

  useEffect(() => {
    calculateTotalProductsPrice();
  }, [shoppingCartData]);

  const increaseProductAmount = (itemID) => {
    let product = getProductById(itemID);
    increaseItem(product);
    setShoppingCartData((prevArray) => [...prevArray]);
    console.log(shoppingCartData);
  };

  const decreaseProductAmount = (itemID) => {
    let product = getProductById(itemID);
    let availableAmount = product.amount;
    if (availableAmount >= 2) {
      decreaseItem(product);
      setShoppingCartData((prevArray) => [...prevArray]);
    }
  };

  const decreaseItem = (product) => {
    product.amount = product.amount - 1;
    return product;
  };

  const increaseItem = (product) => {
    product.amount = product.amount + 1;
    return product;
  };

  const handleDelete = (item) => {
    setShoppingCartData(shoppingCartData.filter((p) => p.id !== item));
  };

  return (
    <FlatList
      data={shoppingCartData}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ flexGrow: 1 }}
      renderItem={({ item }) => (
        <ShoppingCartItem
          title={item.title}
          label={item.label}
          price={item.price}
          amount={getInitialAmounts(item.id)}
          image={item.image}
          price={formatPrice(item.price)}
          onPressAdd={() => increaseProductAmount(item.id)}
          onPressSubtract={() => decreaseProductAmount(item.id)}
          totalProductPrice={calculateTotalPricePerProduct(item.id)}
          onPressDeleteItem={() => handleDelete(item.id)}
        />
      )}
      ItemSeparatorComponent={ListItemSeperatorFullLength}
      ListEmptyComponent={EmptyShoppingCart}
      ListFooterComponent={
        shoppingCartData.length > 0 && (
          <View
            style={[
              defaultStyles.screenContainer,
              defaultStyles.topWhitespaceSmallest,
            ]}
          >
            <AppText style={[defaultStyles.textCenter]} thin>
              {i18n.t("freeDeliveryNotice")}
            </AppText>
            <AppTitle>Totaal</AppTitle>
            <PriceSum
              title={i18n.t("totalProduct")}
              noFormatting
              price={formatPrice(totalProductsPrice)}
            />
            <PriceSum
              title={i18n.t("delivery")}
              noFormatting
              price={formatPrice(deliveryCosts)}
            />
            <PriceSum
              title={i18n.t("total")}
              noFormatting
              price={formatPrice(totalPrice)}
            />

            {subscriptionItemsOverview ? (
              <AppButton
                color="yellow"
                textColor="black"
                icon="chevron-right"
                title={i18n.t("chooseQuantity")}
                onPress={onPressSubscription}
              />
            ) : (
              <AppButton
                color="yellow"
                textColor="black"
                icon="chevron-right"
                title={i18n.t("proceedOrder")}
                onPress={onPressShoppingCart}
              />
            )}
          </View>
        )
      }
    />
  );
}

export default ShoppingCartList;
