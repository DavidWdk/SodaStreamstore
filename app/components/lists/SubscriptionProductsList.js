import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, Image, View } from "react-native";

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
  const subscriptionItemList = [];
  const [products, setProducts] = useState(data);
  const [totalPrice, setTotalprice] = useState(intialTotalPrice);
  const [deliveryCosts, setDeviveryCosts] = useState(0);
  const [subscriptionItems, setSubscriptionItems] = useState(
    subscriptionItemList
  );
  const [searchedProducts, setSearchedProducts] = useState([]);

  //AddItem: add item to subscriptionproducts array, if item is a duplicate,
  //don't add object to array again - instead increase the .amount value
  const addItem = (itemId) => {
    let len = products.length;
    for (let i = 0; i < len; i++) {
      if (products[i].id === itemId) {
        let lenSub = subscriptionItems.length;
        for (let j = 0; j < lenSub; j++) {
          if (subscriptionItems[j].id === products[i].id) {
            setSubscriptionItems((prevArray) => [...prevArray, products[i]]);
            console.log("First instance");
          } else {
            products[i].amount = products[i].amount + 1;
            console.log("Duplicate");
          }
        }
      }
    }
  };

  const subtractItem = (itemId) => {
    let len = products.length;
    for (let i = 0; i < len; i++) {
      if (products[i].id === itemId) {
        if (products[i].amount > 0) {
          setSubscriptionItems((prevArray) => [...prevArray]);

          products[i].amount = products[i].amount - 1;
          // console.log(subscriptionItems);
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
  image: {
    width: 150,
    height: 150,
  },
  list: {
    justifyContent: "space-between",
    width: "100%",
  },
});

export default SubscriptionProducts;
