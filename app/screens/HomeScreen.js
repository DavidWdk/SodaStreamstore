import React from "react";
import { View, StyleSheet, Image, ScrollView, Keyboard } from "react-native";
import Constants from "expo-constants";

import previouslyViewed from "../../assets/placeholderData/previouslyViewed";
import popularProducts from "../../assets/placeholderData/popularProducts";

import AppTextInput from "../components/AppTextInput";
import defaultStyles from "../config/styles";
import ImageSlider from "../components/products/ImageSlider";
import AppButton from "../components/AppButton";
import { AppTitle, AppText } from "../components/fonts";
import HorizontalItemList from "../components/lists/HorizontalItemList";
import ProductTile from "../components/products/ProductTile";
import HugeButton from "../components/HugeButton";

const images = [
  {
    image:
      "https://www.sodastream.nl/wp-content/uploads/2020/10/12770-SodaStream-Homepage-banner-neon-2-2880x1600px_v2-scaled.jpg",
    textTitle: "Lever uw lege cilinders in voor korting!",
    textColor: "white",
    btnText: "Ruil uw cilinder in",
  },
  {
    image:
      "https://www.sodastream.nl/wp-content/uploads/2020/03/12548-Homepage-banner-omruilen-2880x1600px_NL_03.jpg",
    textTitle: "Lekker lijnen",
    textBody:
      "Wist je dat onze Fruit Drop siropen suikervrij zijn? Dat is gezond genieten",
    textColor: "white",
  },
  {
    image:
      "https://www.sodastream.nl/wp-content/uploads/2020/02/Sodastream-banner-one-touch-3.jpg",
    textTitle: "SodaStream Crystal",
    textBody:
      "Koop nu een SodaStream Crystal en krijg 20% korting met glazen karaffen",
    textColor: "black",
    btnText: "Die wil ik",
  },
];

function HomeScreen(props) {
  return (
    //Search bar to be found after the </ScrollScreen> closing tag
    <ScrollView
      style={styles.container}
      stickyHeaderIndices={[1]}
      showsVerticalScrollIndicator={false}
      onPress={Keyboard.dismiss}
    >
      {/* <View style={{ paddingBottom: 80 }}> */}
      <Image
        source={require("../../assets/SodaStreamStore_logo_300.png")}
        style={styles.logoHeader}
        resizeMode="contain"
      />

      <View style={[defaultStyles.screenContainer, styles.searchContainer]}>
        <AppTextInput
          icon="magnify"
          style={styles.search}
          placeholder="Waar ben je naar op zoek?"
        />
      </View>

      <ImageSlider images={images} />

      <View style={[styles.rowButtonsContainer, defaultStyles.screenContainer]}>
        <AppButton
          style={styles.topRowButton}
          title="Abonnement"
          icon="calendar-repeat-outline"
          fontSize={17}
        />
        <AppButton
          style={styles.topRowButton}
          title="Assortiment"
          icon="magnify"
          fontSize={17}
        />
      </View>

      <View style={defaultStyles.screenContainer}>
        <AppTitle style={defaultStyles.topWhitespaceSmallest}>
          Eerder bekeken door jou
        </AppTitle>
      </View>
      <HorizontalItemList data={previouslyViewed} />

      <View style={[defaultStyles.blueSection, styles.hydrationSection]}>
        <AppTitle>Dagelijkse hydratatie</AppTitle>

        <View style={[defaultStyles.shadowBlock, styles.glassCounter]}>
          <AppText thin style={defaultStyles.subtitle}>
            Jouw statistieken
          </AppText>
        </View>
      </View>

      <View style={defaultStyles.screenContainer}>
        <AppTitle>Bekijk ons assortiment</AppTitle>
        <View style={styles.productRange}>
          <ProductTile
            title="Cilinders"
            image="https://image.sodastreamstore.nl/m/sodastream?sid=3&pid=3538692"
          />
          <ProductTile
            title="Smaken"
            image="https://image.sodastreamstore.nl/m/sodastream-fruit-drops-siroop-orange?sid=3&pid=2932156"
          />
        </View>
        <View style={styles.productRange}>
          <ProductTile
            title="Accessoires"
            image="https://image.sodastreamstore.nl/m/sodastream-metal-fuse-bottle?sid=3&pid=1531398"
          />
          <ProductTile
            title="Toestellen"
            image="https://image.sodastreamstore.nl/m/sodastream-crystal-white?sid=3&pid=1635464"
          />
        </View>
        <HugeButton
          title="Bekijk onze"
          boldTitle="Kortingen"
          style={styles.hugeButton}
        />
      </View>

      <View style={defaultStyles.screenContainer}>
        <AppTitle style={defaultStyles.topWhitespaceSmallest}>
          Populaire producten
        </AppTitle>
      </View>
      <HorizontalItemList data={popularProducts} />

      <View style={{ paddingBottom: 100 }}></View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  glassCounter: {
    marginTop: 16,
  },
  hugeButton: {
    width: "10%",
  },
  hydrationSection: {
    marginVertical: 32,
  },
  logoHeader: {
    alignSelf: "center",
    height: 40,
    width: "65%",
    marginBottom: 10,
  },
  productRange: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  search: {
    zIndex: 40,
    position: "absolute",
    top: -16,
    elevation: 8,
    shadowColor: defaultStyles.colors.black,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 6,
    shadowOpacity: 0.15,
    paddingVertical: 12,
    alignSelf: "center",
  },
  searchContainer: {
    zIndex: 5,
    paddingTop: 16,
  },
  topRowButton: {
    width: "48%",
    marginTop: -16,
  },
});

export default HomeScreen;
