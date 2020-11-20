import React from "react";
import { FlatList } from "react-native";

import HorizontalItemContainer from "./HorizontalItemContainer";
import ListItemSeperatorVertical from "./ListItemSeperatorVertical";

function HorizontalItemList({ data, ...otherProps }) {
  return (
    <FlatList
      data={data}
      keyExtractor={(data) => data.id.toString()}
      horizontal={true}
      renderItem={({ item }) => (
        <HorizontalItemContainer
          image={item.image}
          title={item.title}
          price={item.price}
          onPress={() => console.log("Selected", item.title)}
        />
      )}
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={ListItemSeperatorVertical}
      {...otherProps}
    />
  );
}

export default HorizontalItemList;
