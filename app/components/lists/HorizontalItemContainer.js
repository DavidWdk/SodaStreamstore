import React from "react";
import { Pressable, StyleSheet, Image } from "react-native";

import { AppText, AppTitle } from "../fonts";

function HorizontalItemContainer({ onPress, image, price, title }) {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <AppText numberOfLines={2} thin>
        {title}
      </AppText>
      <AppTitle style={styles.price}>{price}</AppTitle>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 125,
    marginHorizontal: 16,
    marginVertical: 12,
  },
  image: {
    width: 110,
    height: 110,
    alignSelf: "center",
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    marginTop: 4,
  },
});

export default HorizontalItemContainer;
