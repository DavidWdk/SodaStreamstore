import React from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import HorizontalItemContainer from "./HorizontalItemContainer";
import ListItemSeperatorVertical from "./ListItemSeperatorVertical";

function HorizontalItemList({ data, ...otherProps }) {
  const navigation = useNavigation();

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
          onPress={() => navigation.navigate("ProductDetails", { item })}
        />
      )}
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={ListItemSeperatorVertical}
      {...otherProps}
    />
  );
}

export default HorizontalItemList;
