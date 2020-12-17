import React, { useState } from "react";
import { View, StyleSheet, Image, ScrollView, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { AppText, AppTitle } from "../fonts";
import defaultStyles from "../../config/styles";
import AppButton from "../AppButton";

const { width } = Dimensions.get("window");
const height = width * 0.6;

function ImageSlider({ images, style, bottomSpacePagination = 0 }) {
  const [active, setActive] = useState(0);
  const navigation = useNavigation();

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
      <View style={[style, { width, height }]}>
        <ScrollView
          pagingEnabled
          horizontal
          onMomentumScrollEnd={change}
          showsHorizontalScrollIndicator={false}
        >
          {images.map((item, index) => (
            <View key={index} style={styles.itemContainer}>
              <Image
                overlayColor={defaultStyles.colors.black}
                source={{ uri: item.image }}
                style={styles.images}
              />

              <View style={styles.itemTextContainer}>
                {item.textTitle && (
                  <AppTitle
                    style={[
                      styles.itemText,
                      { color: defaultStyles.colors[item.textColor] },
                    ]}
                  >
                    {item.textTitle}
                  </AppTitle>
                )}

                {item.textBody && (
                  <AppText
                    style={[
                      styles.itemText,
                      defaultStyles.topWhitespaceMini,
                      { color: defaultStyles.colors[item.textColor] },
                    ]}
                  >
                    {item.textBody}
                  </AppText>
                )}

                {item.btnText && (
                  <AppButton
                    title={item.btnText}
                    style={styles.button}
                    onPress={
                      () =>
                        navigation.navigate("ProductDetails", {
                          item: item.routeObject,
                        })
                      // console.log(item.routeObject)
                    }
                  />
                )}
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
      {images.length >= 2 ? (
        <View
          style={[
            styles.paginationContainer,
            { bottom: bottomSpacePagination },
          ]}
        >
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
  itemContainer: {
    position: "relative",
    justifyContent: "center",
  },
  itemText: {
    color: defaultStyles.colors.white,
  },
  itemTextContainer: {
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
    bottom: 35,
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
