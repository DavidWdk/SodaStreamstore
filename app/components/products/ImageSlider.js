import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  Platform,
} from "react-native";

import { AppText, AppTitle } from "../fonts";
import defaultStyles from "../../config/styles";

const { width } = Dimensions.get("window");
const height = width * 0.6;

console.log(width, height);

function ImageSlider({ images, style }) {
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
      <View style={(style, { width, height })}>
        <ScrollView
          pagingEnabled
          horizontal
          onMomentumScrollEnd={change}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.bannerTextContainer}>
            <AppTitle style={styles.bannerText}>
              Haal de bruis in huis bij Albert Heijn
            </AppTitle>
            <AppText
              style={[styles.bannerText, defaultStyles.topWhitespaceMini]}
            >
              Bubbels op? Tegen inlevering van jouw lege cilinder betaal je
              alleen voor het koolzuur.
            </AppText>
          </View>

          {images.map((image, index) => (
            <Image
              overlayColor={defaultStyles.colors.black}
              key={index}
              source={{ uri: image }}
              style={styles.images}
            />
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
  bannerText: {
    color: defaultStyles.colors.white,
  },
  bannerTextContainer: {
    width: width / 2.2,
    position: "absolute",
    left: 16,
    zIndex: 1,
    alignSelf: "center",
  },
  paginationContainer: {
    flexDirection: "row",
    alignSelf: "center",
    position: "absolute",
    bottom: Platform.OS === "ios" ? 0 : 30,
  },
  paginationActiveText: {
    fontSize: width / 13,
    color: defaultStyles.colors.lightBlue,
    marginHorizontal: 2,
    zIndex: 1,
  },
  paginationText: {
    fontSize: width / 13,
    color: defaultStyles.colors.lightGrey,
    marginHorizontal: 2,
    zIndex: 1,
  },
  images: {
    resizeMode: "cover",
    width,
    height,
  },
  container: {
    width,
    height,
  },
});

export default ImageSlider;
