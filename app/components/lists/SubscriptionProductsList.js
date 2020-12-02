import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, View } from "react-native";

import { AppTitle } from "../fonts";
import AddSubscriptionItem from "./AddSubscriptionItem";
import PriceSum from "../PriceSum";
import SubscriptionListItem from "./SubscriptionListItem";
import AppTextInput from "../AppTextInput";
import defaultStyles from "../../config/styles";

function SubscriptionProducts({
  data,
  additionalFooterComponent,
  newSubscriptionList = false,
  ...otherProps
}) {
  //initial subscriptionlist
  const intialTotalPrice = 0;
  const initialSubscriptionProducts = [];
  const [products, setProducts] = useState(data);
  const [totalPrice, setTotalprice] = useState(intialTotalPrice);
  const [deliveryCosts, setDeviveryCosts] = useState(0);
  const [subscriptionItems, setSubscriptionItems] = useState(
    initialSubscriptionProducts
  );
  const [searchedProducts, setSearchedProducts] = useState(data);

  const subtractItem = (itemID) => {
    let index = productIndex(itemID);
    let subtractProduct = subscriptionItems[index];
    if (subtractProduct.amount >= 2) {
      decreaseItem(subscriptionItems[index]);
      setSubscriptionItems((prevArray) => [...prevArray]);
    } else {
      decreaseItem(subscriptionItems[index]);
      const newList = subscriptionItems.filter((item) => item.id !== itemID);
      setSubscriptionItems(newList);
    }
  };

  const addItem = (itemID) => {
    let index = productIndex(itemID);
    if (index != null) {
      increaseItem(subscriptionItems[index]);
      setSubscriptionItems((prevArray) => [...prevArray]);
    } else {
      let product = getProductByID(itemID);
      increaseItem(product);
      setSubscriptionItems((prevArray) => [...prevArray, product]);
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

  const productIndex = (itemID) => {
    let l = subscriptionItems.length;
    for (let i = 0; i < l; i++) {
      if (subscriptionItems[i].id == itemID) {
        return i;
      }
    }
    return null;
  };

  const getProductByID = (itemID) => {
    for (let i = 0; i <= products.length; i++) {
      if (products[i].id == itemID) {
        return products[i];
      }
    }
  };

  const handleSearch = (text) => {
    const searchedProducts = products.filter((item) =>
      item.label.toLowerCase().includes(text)
    );
    setSearchedProducts(searchedProducts);
  };

  let sum = 0;
  const calculateTotalPrice = () => {
    let len = products.length;
    for (let i = 0; i < len; i++) {
      sum += parseFloat(products[i].price);
      setTotalprice(sum);
    }
  };

  const handleDelete = (item) => {
    setProducts(products.filter((p) => p.id !== item.id));
  };

  useEffect(() => {
    calculateTotalPrice();

    if (totalPrice < 50) {
      setDeviveryCosts(3.99);
    } else {
      setDeviveryCosts(0);
    }
  }, [products]);

  const onViewRef = React.useRef((viewableItems) => {});

  const viewConfigRef = React.useRef({
    viewAreaCoveragePercentThreshold: 50,
  });

  if (newSubscriptionList === false) {
    //Returns list for adding items to the subscription
    return (
      <FlatList
        data={[...products, { addItem: true }]}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={styles.list}
        numColumns={2}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        renderItem={({ item }) => {
          if (item.addItem) {
            return <SubscriptionListItem addItemBlock />;
          }
          return (
            <SubscriptionListItem
              item={item}
              onDelete={() => handleDelete(item.toNumber())}
              buttonId={item.id}
              initialvalue={item.amount}
              onPressAdd={() => (item.amount = item.amount + 1)}
              onPressSubtract={() => {
                if (item.amount > 0) {
                  item.amount = item.amount - 1;
                }
              }}
            />
          );
        }}
        ListFooterComponent={
          <View>
            <AppTitle>Totaal</AppTitle>
            <PriceSum title="Totaal artikelen" price={totalPrice} />
            <PriceSum title="Verzendkosten" price={deliveryCosts} />
            <PriceSum
              title="Bezorginingfrequentie"
              noFormatting
              price="Elke maand"
            />
            <PriceSum title="Extra spaarpunten" noFormatting price="20%" />
            {additionalFooterComponent}
          </View>
        }
        {...otherProps}
      />
    );
  } else if (newSubscriptionList === true) {
    //Returns list for managing the subscription
    return (
      <>
        <AppTextInput
          icon="magnify"
          placeholder="Zoek naar een product"
          style={styles.search}
          onChangeText={(text) => handleSearch(text)}
          autoCapitalize="none"
        />

        <FlatList
          data={searchedProducts}
          keyExtractor={(item) => item.id}
          columnWrapperStyle={styles.list}
          numColumns={2}
          style={styles.listContainer}
          onViewableItemsChanged={onViewRef.current}
          viewabilityConfig={viewConfigRef.current}
          renderItem={({ item }) => (
            <AddSubscriptionItem
              item={item}
              buttonId={item.id}
              onPress={() => addItem(item.id)}
              onPressSecondary={() => subtractItem(item.id)}
              amount={item.amount}
            />
          )}
          {...otherProps}
        />
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  list: {
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 8,
  },
  search: {
    elevation: 4,
    shadowColor: defaultStyles.colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    shadowOpacity: 0.15,
    zIndex: 10,
  },
});

export default SubscriptionProducts;
