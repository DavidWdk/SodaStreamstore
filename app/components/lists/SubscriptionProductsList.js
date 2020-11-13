import React, { useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import AddSubscriptionItem from "./AddSubscriptionItem";

import MySubscriptionItems from "./MySubscriptionItems";

function SubscriptionProducts({
  data,
  newSubscriptionList = false,
  ...otherProps
}) {
  //initial subscriptionlist
  const subscriptionItemList = [];

  // const [productAmount, setProductAmounth] = useState()

  //Used to search (filter) through product list
  const [products, setProducts] = useState(data);

  //Meant to add subscription items
  const [subscriptionItems, setSubscriptionItems] = useState(
    subscriptionItemList
  );

  const addItem = (itemId) => {
    //Optimalisation
    let len = products.length;
    for (let i = 0; i < len; i++) {
      if (products[i].id == itemId) {
        setSubscriptionItems((prevArray) => [...prevArray, products[i]]);
        products[i].amounth = products[i].amounth + 1;
        console.log(subscriptionItems);
      }
    }
  };

  const subtractItem = (itemId) => {
    let len = products.length;
    for (let i = 0; i < len; i++) {
      if (products[i].id == itemId) {
        if (products[i].amounth >= 0) {
          setSubscriptionItems((prevArray) => [...prevArray, -products[i]]);
          products[i].amounth = products[i].amounth - 1;
          console.log(subscriptionItems);
        }
      }
    }
  };

  const handleDelete = (item) => {
    setProducts(products.filter((p) => p.id !== item.id));
  };

  const onViewRef = React.useRef((viewableItems) => {
    // console.log(viewableItems);
  });

  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 });

  if (newSubscriptionList === false) {
    return (
      <FlatList
        data={products}
        columnWrapperStyle={styles.list}
        numColumns={2}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        renderItem={({ item }) => (
          <MySubscriptionItems
            item={item}
            onDelete={() => handleDelete(item)}
            buttonId={products.id}
            onPress={() => console.log()}
          />
        )}
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
            amounth={item.amounth}
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
