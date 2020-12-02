import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import AccordionListItem from "./AccordionListItem";
import HorizontalItemList from "./HorizontalItemList";
import PreviouslyViewed from "../../../assets/placeholderData/previouslyViewed";
import { AppTitle } from "../fonts";

function AccordionList({ data, destinationScreen, ...otherProps }) {
  const navigation = useNavigation();

  return (
    <FlatList
      style={styles.list}
      data={data}
      keyExtractor={(data) => data.id.toString()}
      renderItem={({ item }) => (
        <AccordionListItem
          title={item.title}
          onPress={() => {
            navigation.navigate("ProductOverview");
            console.log("onPress");
          }}
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
  list: {
    overflow: "visible",
  },
  footerComponent: {
    marginTop: 40,
  },
  footerTitle: {
    paddingLeft: 16,
  },
});

export default AccordionList;
