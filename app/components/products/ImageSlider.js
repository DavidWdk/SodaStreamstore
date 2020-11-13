import React, { useState } from "react";
import { View, StyleSheet, Image, ScrollView, Dimensions } from "react-native";

import { AppText } from "../fonts";
import defaultStyles from "../../config/styles";

const { width } = Dimensions.get("window");
const height = width * 0.6;

function ImageSlider({ images }) {
  const [active, setActive] = useState(0);

  const change = ({ nativeEvent }) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (slide !== active) {
      setActive(slide);
    }
  };

  return (
    <>
      <View style={{ width, height }}>
        <ScrollView
          pagingEnabled
          horizontal
          onMomentumScrollEnd={change}
          showsHorizontalScrollIndicator={false}
          style={styles.container}
        >
          {images.map((image, index) => (
            <Image key={index} source={{ uri: image }} style={styles.images} />
          ))}
        </ScrollView>
      </View>
      <View style={styles.paginationContainer}>
        {images.map((i, k) => (
          <AppText
            key={k}
            style={
              k == active ? styles.paginationActiveText : styles.paginationText
            }
          >
            •
          </AppText>
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: "row",
    alignSelf: "center",
  },
  paginationActiveText: {
    fontSize: width / 13,
    color: defaultStyles.colors.lightBlue,
    marginBottom: 4,
    marginHorizontal: 2,
  },
  paginationText: {
    fontSize: width / 13,
    color: defaultStyles.colors.grey,
    marginBottom: 4,
    marginHorizontal: 2,
  },
  images: {
    resizeMode: "contain",
    width,
    height,
  },
  container: {
    width,
    height,
  },
});

export default ImageSlider;
