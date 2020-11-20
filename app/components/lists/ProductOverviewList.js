import React from "react";
import { FlatList } from "react-native";

import ProductOverviewItem from "./ProductOverviewItem";
import ListItemSeperatorFullLength from "./ListItemSeperatorFullLength";

function ProductOverviewList({ data, style }) {
  return (
    <FlatList
      data={data}
      style={style}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ProductOverviewItem
          title={item.title}
          subText1={item.subText1}
          subText2={item.subText2}
          subText3={item.subText3}
          image={item.image}
          // onPress={() => navigation.navigate(routes.PRODUCT_DETAILS, item)}
          price={item.price}
          prevPrice={item.prevPrice}
        />
      )}
      ItemSeparatorComponent={ListItemSeperatorFullLength}
    />
  );
}

export default ProductOverviewList;
