import React, { useState } from "react";
import { View, StyleSheet, Image, ScrollView, Dimensions } from "react-native";

import { AppText, AppTitle } from "../fonts";
import defaultStyles from "../../config/styles";
import AppButton from "../AppButton";

const { width } = Dimensions.get("window");
const height = width * 0.6;

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
          {images.map((banner, index) => (
            <View key={index} style={styles.bannerContainer}>
              <Image
                overlayColor={defaultStyles.colors.black}
                source={{ uri: banner.image }}
                style={styles.images}
              />

              <View style={styles.bannerTextContainer}>
                {banner.textTitle && (
                  <AppTitle
                    style={[
                      styles.bannerText,
                      { color: defaultStyles.colors[banner.textColor] },
                    ]}
                  >
                    {banner.textTitle}
                  </AppTitle>
                )}

                {banner.textBody && (
                  <AppText
                    style={[
                      styles.bannerText,
                      defaultStyles.topWhitespaceMini,
                      { color: defaultStyles.colors[banner.textColor] },
                    ]}
                  >
                    {banner.textBody}
                  </AppText>
                )}

                {banner.btnText && (
                  <AppButton title={banner.btnText} style={styles.button} />
                )}
              </View>
            </View>
          ))}
        </ScrollView>
      </View>

      {images.length >= 2 ? (
        <View style={styles.paginationContainer}>
          {images.map((i, k) => (
            <AppText
              key={k}
              style={
                k === active
                  ? styles.paginationActiveText
                  : styles.paginationText
              }
            >
              •
            </AppText>
          ))}
        </View>
      ) : (
        <View style={styles.paginationReplacer}></View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  bannerContainer: {
    position: "relative",
    justifyContent: "center",
  },
  bannerText: {
    color: defaultStyles.colors.white,
  },
  bannerTextContainer: {
    width: width / 2,
    position: "absolute",
    left: 16,
    zIndex: 1,
    alignSelf: "center",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 24,
    marginBottom: 0,
    alignSelf: "flex-start",
  },
  paginationContainer: {
    flexDirection: "row",
    alignSelf: "center",
    bottom: 40,
  },
  paginationActiveText: {
    // position: "absolute",
    fontSize: width / 13,
    color: defaultStyles.colors.lightBlue,
    marginHorizontal: 2,
    zIndex: 1,
  },
  paginationText: {
    // position: "absolute",
    fontSize: width / 13,
    color: defaultStyles.colors.lightGrey,
    marginHorizontal: 2,
    zIndex: 1,
  },
  paginationReplacer: {
    paddingBottom: 16,
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
