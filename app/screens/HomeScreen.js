import React, { useContext } from "react";
import { View, StyleSheet, Image, ScrollView, Keyboard } from "react-native";
import Constants from "expo-constants";

//localisation - both files required
import i18n from "i18n-js";

//data
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
import AuthContext from "../auth/context";
import homeImageSliderData from "../../assets/placeholderData/homeImageSliderData";
import userData from "../../assets/placeholderData/userData";

function HomeScreen({ navigation }) {
  const authContext = useContext(AuthContext);

  const Login = () => {
    authContext.setUser(userData);
  };

  return (
    <ScrollView
      style={styles.container}
      stickyHeaderIndices={[1]}
      showsVerticalScrollIndicator={false}
      onPress={Keyboard.dismiss}
    >
      <Image
        source={require("../../assets/SodaStreamStore_logo_300.png")}
        style={styles.logoHeader}
        resizeMode="contain"
      />
      <View style={[defaultStyles.screenContainer, styles.searchContainer]}>
        <AppTextInput
          icon="magnify"
          style={styles.search}
          placeholder={i18n.t("searchPlaceholder")}
        />
      </View>
      <ImageSlider images={homeImageSliderData} bottomSpacePagination={40} />
      <View style={[styles.rowButtonsContainer, defaultStyles.screenContainer]}>
        {authContext.user ? (
          <AppButton
            style={styles.topRowButton}
            title={i18n.t("subscription")}
            icon="calendar-repeat-outline"
            fontSize={17}
            onPress={() => navigation.navigate("NoActiveSubscription")}
          />
        ) : (
          <AppButton
            style={styles.topRowButton}
            title={i18n.t("login")}
            icon="login"
            fontSize={17}
            onPress={Login}
            // onPress={() => navigation.navigate("Login")}
          />
        )}
        <AppButton
          style={styles.topRowButton}
          title={i18n.t("productRange")}
          icon="magnify"
          fontSize={17}
          onPress={() => navigation.navigate("Search")}
        />
      </View>
      <View style={defaultStyles.screenContainer}>
        <AppTitle style={defaultStyles.topWhitespaceSmallest}>
          {i18n.t("previouslySeen")}
        </AppTitle>
      </View>
      <HorizontalItemList data={previouslyViewed} />
      <View style={[defaultStyles.blueSection, styles.hydrationSection]}>
        <AppTitle>{i18n.t("dailyHydration")}</AppTitle>

        <View style={[defaultStyles.shadowBlock, styles.glassCounter]}>
          <AppText thin style={defaultStyles.subtitle}>
            {i18n.t("statistics")}
          </AppText>
        </View>
      </View>
      <View style={defaultStyles.screenContainer}>
        <AppTitle>{i18n.t("ourProductRange")}</AppTitle>
        <View style={styles.productRange}>
          <ProductTile
            title={i18n.t("cilinders")}
            image="https://image.sodastreamstore.nl/m/sodastream?sid=3&pid=3538692"
            onPress={() => navigation.navigate("ProductOverview")}
          />
          <ProductTile
            title={i18n.t("syrups")}
            image="https://image.sodastreamstore.nl/m/sodastream-fruit-drops-siroop-orange?sid=3&pid=2932156"
            onPress={() => navigation.navigate("ProductOverview")}
          />
        </View>
        <View style={styles.productRange}>
          <ProductTile
            title={i18n.t("accessories")}
            image="https://image.sodastreamstore.nl/m/sodastream-metal-fuse-bottle?sid=3&pid=1531398"
            onPress={() => navigation.navigate("ProductOverview")}
          />
          <ProductTile
            title={i18n.t("devices")}
            image="https://image.sodastreamstore.nl/m/sodastream-crystal-white?sid=3&pid=1635464"
            onPress={() => navigation.navigate("ProductOverview")}
          />
        </View>
        <HugeButton
          title={i18n.t("seeDiscounts")}
          boldTitle={i18n.t("seeDiscountsTitle")}
          style={styles.hugeButton}
        />
      </View>
      <View style={defaultStyles.screenContainer}>
        <AppTitle style={defaultStyles.topWhitespaceSmallest}>
          {i18n.t("popularProducts")}
        </AppTitle>
      </View>
      <HorizontalItemList data={popularProducts} />
      <View style={{ paddingBottom: 70 }}></View>
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
