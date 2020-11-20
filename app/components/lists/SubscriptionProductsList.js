import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, View } from "react-native";

import { AppTitle } from "../fonts";
import AddSubscriptionItem from "./AddSubscriptionItem";
import PriceSum from "../PriceSum";
import SubscriptionListItem from "./SubscriptionListItem";
import AppTextInput from "../AppTextInput";

function SubscriptionProducts({
  data,
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
  const [searchedProducts, setSearchedProducts] = useState([]);

  const addItem = (itemID) => {
    const index = productIndex(itemID);
    if (index != null) {
      setSubscriptionItems(
        (subscriptionItems[index].amount = subscriptionItems[index].amount + 1)
      );
    } else {
      const product = getProductByID(itemID);
      setSubscriptionItems((prevArray) => [...prevArray, product]);
    }
    console.log(subscriptionItems);
  };

  const getProductByID = (itemID) => {
    for (let i = 0; i <= products.length; i++) {
      if (products.id === itemID) {
        return products;
      }
    }
  };

  const productIndex = (itemID) => {
    for (let i = 0; i < subscriptionItems.length; i++) {
      // console.log(subscriptionItems);
      if (subscriptionItems[i].id === itemID) {
        return i;
      }
    }
    return null;
  };

  const subtractItem = (itemId) => {
    let len = products.length;
    for (let i = 0; i < len; i++) {
      if (products[i].id === itemId) {
        if (products[i].amount > 0) {
          setSubscriptionItems((prevArray) => [...prevArray]);
          products[i].amount = products[i].amount - 1;
        } else {
          const obj = itemId.target.getAttribute("");
        }
      }
    }
  };

  const handleSearch = (text) => {
    console.log(text);
    // const formatSearchInput = text.toLowerCase();
  };

  var sum = 0;
  const calculateTotalPrice = () => {
    let len = products.length;
    for (let i = 0; i < len; i++) {
      sum += parseFloat(products[i].price);
      setTotalprice(sum);
    }
  };

  const handleDelete = (item) => {
    setProducts(products.filter((p) => p.id !== item.id));
    // console.log(products);
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
              onDelete={() => handleDelete(item)}
              buttonId={item.id}
              initialvalue={item.amount}
              // onPress={() => console.log()}
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
          placeholder="Zoek een product..."
          style={styles.search}
          onChangeText={(text) => handleSearch(text)}
        />

        <FlatList
          data={products}
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
  listContainer: {
    // marginVertical: 16,
  },
  search: {},
});

export default SubscriptionProducts;
