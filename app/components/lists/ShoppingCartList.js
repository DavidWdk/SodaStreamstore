import React, { useState } from "react";
import { FlatList, View } from "react-native";

import ShoppingCartItem from "./ShoppingCartItem";
import ListItemSeperatorFullLength from "./ListItemSeperatorFullLength";
import { AppTitle } from "../fonts";
import PriceSum from "../PriceSum";
import defaultStyles from "../../config/styles";

function ShoppingCartList({ data }) {
  // const [productAmount, setProductAmount] = useState(amount);

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ShoppingCartItem
          title={item.title}
          price={item.price}
          amount={item.amount}
          image={item.image}
          // onPressAdd={() => setProductAmount(productAmount + 1)}
          // onPressSubtract={() => {
          //   if (productAmount > 1) setProductAmount(productAmount - 1);
          // }}
        />
      )}
      ItemSeparatorComponent={ListItemSeperatorFullLength}
      ListFooterComponent={
        <View
          style={[
            defaultStyles.screenContainer,
            defaultStyles.topWhitespaceSmallest,
          ]}
        >
          <AppTitle>Totaal</AppTitle>
          <PriceSum title="Totaal producten" price="20" />
          <PriceSum title="Bezorging" price="2" />
          <PriceSum title="Totaal" price="22" />
        </View>
      }
    />
  );
}

export default ShoppingCartList;
