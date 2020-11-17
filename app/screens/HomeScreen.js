import React from "react";
import { View, StyleSheet, Image } from "react-native";

import ScrollScreen from "../components/screenStyling/ScrollScreen";
import { AppText, AppTitle } from "../components/fonts";
import AppTextInput from "../components/AppTextInput";
import defaultStyles from "../config/styles";
import ImageSlider from "../components/products/ImageSlider";

const images = [
  "https://www.sodastream.nl/wp-content/uploads/2020/10/12770-SodaStream-Homepage-banner-neon-2-2880x1600px_v2-scaled.jpg",
  "https://www.sodastream.nl/wp-content/uploads/2020/03/12548-Homepage-banner-omruilen-2880x1600px_NL_03.jpg",
  "https://www.sodastream.nl/wp-content/uploads/2020/02/Sodastream-banner-one-touch-3.jpg",
];

function HomeScreen(props) {
  return (
    <ScrollScreen>
      <View style={defaultStyles.screenContainer}>
        <Image
          source={require("../../assets/SodaStreamStore_logo_300.png")}
          style={styles.logoHeader}
          resizeMode="contain"
        />

        <AppTextInput icon="magnify" placeholder="Waar ben je naar op zoek?" />
      </View>

      <ImageSlider images={images} />
    </ScrollScreen>
  );
}
const styles = StyleSheet.create({
  container: {},
  logoHeader: {
    alignSelf: "center",
    height: 40,
    width: "65%",
  },
});

export default HomeScreen;
