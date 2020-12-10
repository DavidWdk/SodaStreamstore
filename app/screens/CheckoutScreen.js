import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import i18n from "i18n-js";

import CustomHeader from "../components/CustomHeader";
import { AppTitle } from "../components/fonts";
import defaultStyles from "../config/styles";
import MultipleChoiceSelection from "../components/MultipleChoiceSelection";
import ButtonOutline from "../components/ButtonOutline";
import Checkbox from "../components/forms/Checkbox";
import PriceSum from "../components/PriceSum";
import AppButton from "../components/AppButton";

const userDeliveryOptions = [
  {
    id: 0,
    title: "Op adres",
    name: "David Widlak",
    streetname: "Straatnaam 24",
    address: "6102LC Roermond",
  },
  {
    id: 1,
    title: "PostNL afhaalpunt",
    name: "Hubo Herten",
    streetname: "Maasweg 37",
    address: "6519VX Herten",
  },
];

const userPaymentOptions = [
  {
    id: 0,
    title: "iDeal",
    image: "https://cdn.chainels.com/image/311589987750911615",
  },
  {
    id: 1,
    title: "PayPal",
    image: "https://www.paypalobjects.com/webstatic/icon/pp258.png",
  },
  {
    id: 2,
    title: "MasterCard",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1200px-Mastercard_2019_logo.svg.png",
  },
];

const userLoyaltyPointsValue = 5.19;

function CheckoutScreen(props) {
  return (
    <ScrollView>
      <CustomHeader topPaddingAdjustment title={i18n.t("pay")} />
      <View style={[styles.titleSection, defaultStyles.screenContainer]}>
        <MaterialCommunityIcons
          name="map-marker-outline"
          size={24}
          color={defaultStyles.colors.black}
          style={styles.icon}
        />
        <AppTitle>{i18n.t("deliveryAddress")}</AppTitle>
      </View>

      <MultipleChoiceSelection options={userDeliveryOptions} />

      <View style={defaultStyles.screenContainer}>
        <ButtonOutline
          title="Ander adres toevoegen"
          icon="map-marker-outline"
          bold
          style={styles.additionOptionButton}
        />
      </View>

      <View style={styles.selectionSection}>
        <View style={[styles.titleSection, defaultStyles.screenContainer]}>
          <MaterialCommunityIcons
            name="coins"
            size={24}
            color={defaultStyles.colors.black}
            style={styles.icon}
          />
          <AppTitle>{i18n.t("paymentMethod")}</AppTitle>
        </View>

        <MultipleChoiceSelection options={userPaymentOptions} />

        <View
          style={[
            defaultStyles.screenContainer,
            defaultStyles.topWhitespaceMini,
          ]}
        >
          <Checkbox
            title={`${i18n.t("spendPointsDesc1")}${userLoyaltyPointsValue}${i18n.t("spendPointsDesc2")}`}
          />
        </View>
      </View>

      <View style={styles.selectionSection}>
        <View style={[styles.titleSection, defaultStyles.screenContainer]}>
          <MaterialCommunityIcons
            name="cart-outline"
            size={24}
            color={defaultStyles.colors.black}
            style={styles.icon}
          />
          <AppTitle>Overzicht</AppTitle>
        </View>

        <View style={defaultStyles.screenContainer}>
          <PriceSum title={i18n.t("totalAmount")} price={25.99} />
          <PriceSum title={i18n.t("totalProduct")} price={22.99} />
          <PriceSum title={i18n.t("deliveryCosts")} price={3.99} />

          <AppButton
            title={i18n.t("finishOrder")}
            icon="chevron-right"
            color="yellow"
            textColor="black"
            style={styles.payButton}
          />
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  additionOptionButton: {
    marginTop: 24,
  },
  container: {},
  icon: {
    marginRight: 6,
  },
  payButton: {
    marginBottom: 32,
  },
  selectionSection: {
    marginTop: 32,
  },
  titleSection: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    marginBottom: 12,
  },
});

export default CheckoutScreen;
