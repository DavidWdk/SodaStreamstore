import React from "react";
import { FlatList, StyleSheet } from "react-native";

import AccordionListItem from "./AccordionListItem";
import HorizontalItemList from "./HorizontalItemList";
import PreviouslyViewed from "../../../assets/placeholderData/previouslyViewed";
import { AppTitle } from "../fonts";
import defaultStyles from "../../config/styles";

function AccordionList({ data, ...otherProps }) {
  return (
    <FlatList
      data={data}
      keyExtractor={(data) => data.id.toString()}
      renderItem={({ item }) => (
        <AccordionListItem
          title={item.title}
          onPress={item.onPress}
          childrenItems={item.data}
        />
      )}
      ListFooterComponent={
        <>
          <AppTitle style={styles.footerTitle}>
            Jouw bestelgeschiedenis
          </AppTitle>
          <HorizontalItemList data={PreviouslyViewed} />
        </>
      }
      ListFooterComponentStyle={styles.footerComponent}
      {...otherProps}
    />
  );
}

const styles = StyleSheet.create({
  footerComponent: {
    marginTop: 40,
  },
  footerTitle: {
    paddingLeft: 16,
  },
});

export default AccordionList;
