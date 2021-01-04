import React from "react";
import { Pressable, StyleSheet, Image } from "react-native";

import defaultStyles from "../../config/styles";
import { AppTitle } from "../fonts";

function ProductTile({ image, title, onPress }) {
  return (
    <Pressable
      style={[defaultStyles.shadowBlock, styles.container]}
      onPress={onPress}
    >
      <Image source={{ uri: image }} style={styles.image} />
      <AppTitle style={styles.title}>{title}</AppTitle>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "48%",
    alignItems: "center",
  },
  image: {
    width: 120,
    height: 110,
    resizeMode: "contain",
  },
  title: {
    textAlign: "center",
    marginTop: 12,
  },
});

export default ProductTile;
