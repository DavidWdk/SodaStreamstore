import React from "react";
import { View, StyleSheet, TouchableHighlight, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { AppText, AppTitle } from "../fonts";
import defaultStyles from "../../config/styles";

function SmallProductItem({ imageUrl, title, subtitle, onPress }) {
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={defaultStyles.colors.lightGrey}
    >
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: imageUrl,
          }}
        />

        <View style={styles.detailContainer}>
          <AppTitle style={styles.title}>{title}</AppTitle>
          <AppText style={styles.subtitle}>{subtitle}</AppText>
        </View>
        <MaterialCommunityIcons
          colors={defaultStyles.colors.lightGrey}
          name="chevron-right"
          size={25}
        />
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 12,
    backgroundColor: defaultStyles.colors.white,
    alignItems: "center",
  },
  detailContainer: {
    flex: 1,
    marginLeft: 16,
  },
  image: {
    marginTop: 5,
    width: 70,
    height: 70,
  },
  title: {
    fontSize: 16,
  },
  subtitle: {
    color: defaultStyles.colors.grey,
    marginTop: 6,
  },
});

export default SmallProductItem;
