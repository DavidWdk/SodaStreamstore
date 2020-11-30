import React from "react";
import { StyleSheet, FlatList } from "react-native";

import ListItem from "./ListItem";
import ListItemSeperator from "./ListItemSeperator";

function AppFlatlist({ data, itemKind = "flat", ...otherProps }) {
  return (
    <FlatList
      data={data}
      keyExtractor={(data) => data.id.toString()}
      style={styles.list}
      renderItem={({ item }) => (
        <ListItem
          itemKind
          title={item.title}
          icon={item.icon}
          designationScreen={item.designationScreen}
          itemKind={item.itemKind}
          textColor={item.textColor}
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
