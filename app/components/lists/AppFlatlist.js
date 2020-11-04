import React from "react";
import { StyleSheet, FlatList } from "react-native";

import ListItem from "./ListItem";
import ListItemSeperator from "./ListItemSeperator";

function AppFlatlist({ data, ...otherProps }) {
  return (
    <FlatList
      data={data}
      keyExtractor={(data) => data.id.toString()}
      style={styles.list}
      renderItem={({ item }) => (
        <ListItem
          title={item.title}
          icon={item.icon}
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
