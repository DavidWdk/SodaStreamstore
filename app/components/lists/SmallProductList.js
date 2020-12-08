import React from "react";
import { StyleSheet, SectionList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import i18n from "i18n-js";

import SmallProductItem from "./SmallProductItem";
import ListItemSeperator from "./ListItemSeperator";
import { AppTitle } from "../fonts";
import AppButton from "../AppButton";
import defaultStyles from "../../config/styles";

function SmallProductList({ data, ...otherProps }) {
  const navigation = useNavigation();

  return (
    <SectionList
      sections={data}
      style={styles.list}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => (
        <SmallProductItem
          subtitle={item.price}
          title={item.product}
          imageUrl={item.imageUrl}
          onPress={() => navigation.navigate("OrderHistoryDetails")}
        />
      )}
      ItemSeparatorComponent={ListItemSeperator}
      renderSectionHeader={({ section: { title } }) => (
        <AppTitle style={[defaultStyles.screenContainer, styles.sectionHeader]}>
          {title}
        </AppTitle>
      )}
      renderSectionFooter={() => (
        <AppButton
          icon="repeat"
          title={i18n.t("repeatOrder")}
          style={styles.horizontalMargin}
        />
      )}
      {...otherProps}
    />
  );
}
const styles = StyleSheet.create({
  list: {
    overflow: "visible",
  },
  horizontalMargin: {
    marginHorizontal: 12,
  },
  sectionHeader: {
    backgroundColor: defaultStyles.colors.white,
    paddingBottom: 4,
  },
});

export default SmallProductList;
