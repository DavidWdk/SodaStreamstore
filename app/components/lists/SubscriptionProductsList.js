import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, Image, View } from "react-native";
import AddSubscriptionItem from "./AddSubscriptionItem";

import MySubscriptionItems from "./MySubscriptionItems";

function SubscriptionProducts({
  data,
  newSubscriptionList = false,
  ...otherProps
}) {
  //initial subscriptionlist
  const subscriptionItemList = [];

  // const [productAmount, setProductamount] = useState()

  //Used to search (filter) through product list
  const [products, setProducts] = useState(data);

  var totalPrice = 0;

  //Meant to add subscription items
  const [subscriptionItems, setSubscriptionItems] = useState(
    subscriptionItemList
  );

  //AddItem: add item to subscriptionproducts array, if item is a duplicate,
  //don't add object to array again - instead increase the .amount value
  const addItem = (itemId) => {
    //Optimalisation
    let len = products.length;
    for (let i = 0; i < len; i++) {
      if (products[i].id == itemId) {
        setSubscriptionItems((prevArray) => [...prevArray, products[i]]);
        products[i].amount = products[i].amount + 1;
        console.log(subscriptionItems);
      }
    }
  };

  const subtractItem = (itemId) => {
    let len = products.length;
    for (let i = 0; i < len; i++) {
      if (products[i].id == itemId) {
        if (products[i].amount > 0) {
          setSubscriptionItems((prevArray) => [...prevArray, products[i]]);
          products[i].amount = products[i].amount - 1;
          console.log(subscriptionItems);
        }
      }
    }
  };

  const calculateTotalPrice = () => {
    let len = products.length;
    for (let i = 0; i < len; i++) {
      totalPrice += parseFloat(products[i].price);
    }
  };

  const handleDelete = (item) => {
    setProducts(products.filter((p) => p.id !== item.id));
    // console.log(products);
  };

  //TO DO, calculate whole price after products array changes
  useEffect(() => {
    calculateTotalPrice();
    console.log(totalPrice);
  }, [products]);

  const onViewRef = React.useRef((viewableItems) => {});

  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 });

  if (newSubscriptionList === false) {
    return (
      <FlatList
        data={[...products, { addItem: true }]}
        columnWrapperStyle={styles.list}
        numColumns={2}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        renderItem={({ item }) => {
          if (item.addItem) {
            return (
              <Image
                item={item}
                source={{
                  uri:
                    "https://www.plus.nl/INTERSHOP/static/WFS/PLUS-website-Site/-/-/nl_NL/images/icon/default_img_store.png",
                }}
                style={{ width: 150, height: 150 }}
              />
            );
          }
          return (
            <MySubscriptionItems
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
        {...otherProps}
      />
    );
  } else if (newSubscriptionList === true) {
    return (
      <FlatList
        data={products}
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
