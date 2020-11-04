import React from "react";
import { StyleSheet, FlatList } from "react-native";

import SmallProductItem from "./SmallProductItem";
import ListItemSeperator from "./ListItemSeperator";

function AppFlatlist({ data, ...otherProps }) {
  return (
    <FlatList
      data={data}
      keyExtractor={(data) => data.id.toString()}
      style={styles.list}
      renderItem={({ item }) => (
        <SmallProductItem
          subtitle={item.price}
          title={item.product}
          image={item.imageUrl}
          onPress={() => console.log("Selected", item)}
        />
      )}
      ItemSeparatorComponent={ListItemSeperator}
      {...otherProps}
    />
  );
}
const styles = StyleSheet.create({
  list: {
    overflow: "visible",
  },
});

export default AppFlatlist;
