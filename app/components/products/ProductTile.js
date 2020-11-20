import React from "react";
import { Pressable, StyleSheet, Image, Dimensions } from "react-native";

import defaultStyles from "../../config/styles";
import { AppTitle } from "../fonts";

function ProductTile({ image, title }) {
  return (
    <Pressable style={[defaultStyles.shadowBlock, styles.container]}>
      <Image source={{ uri: image }} style={styles.image} />
      <AppTitle style={styles.title}>{title}</AppTitle>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "48%",
    alignItems: "center",
    // aspectRatio: 1,
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
