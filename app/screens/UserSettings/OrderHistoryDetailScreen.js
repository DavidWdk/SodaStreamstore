import React from "react";
import { View, StyleSheet } from "react-native";

import { AppText, AppTitle } from "../../components/fonts";
import defaultStyles from "../../config/styles";
import ScrollScreen from "../../components/screenStyling/ScrollScreen";
import CustomHeader from "../../components/CustomHeader";
import ProductShowcaseFold from "../../components/products/ProductShowcaseFold";
import ButtonOutline from "../../components/ButtonOutline";
import Screen from "../../components/screenStyling/Screen";

//COLLECT THE ITEMS BELOW VIA NAVIGATION
const orderNo = 120249123;
const orderDate = "2 juni 2020";
const arrivalDate = "3 juni 2020";
const deliveryAddress = "Kalverstraat 93";
const billingAddress = "Gelijk aan bezorgadres";
const billingMethod = "iDeal *************2246";
const billingStatus = "Betaald";
const images = [
  {
    image:
      "https://image.sodastreamstore.nl/m/sodastream-fruit-drops-siroop-mango?sid=3&pid=3460647",
  },
  {
    image:
      "https://image.sodastreamstore.nl/m/sodastream-fruit-drops-siroop-mango?sid=3&pid=3460647&sort=1",
  },
];

function OrderHistoryDetailScreen(props) {
  return (
    <>
      <CustomHeader
        style={[defaultStyles.screenContainer]}
        title={`Bestelnr. ${orderNo}`}
        topPaddingAdjustment
      />
      <ScrollScreen style={styles.container}>
        <ProductShowcaseFold
          productImages={images}
          productTitle={"SodaStream Fruit drops - siroop mango"}
          productPrice={4.99}
          isProductHistory
          productHistoryArrivalDate={arrivalDate}
        />

        <View style={[defaultStyles.screenContainer, styles.detailsSection]}>
          <AppTitle>Bestel details</AppTitle>

          <AppText bold style={defaultStyles.lineWhitespace}>
            Bestelnummer
          </AppText>
          <AppText>{orderNo}</AppText>

          <AppText bold style={defaultStyles.lineWhitespace}>
            Besteld op
          </AppText>
          <AppText>{orderDate}</AppText>

          <AppText bold style={defaultStyles.lineWhitespace}>
            Bezorgadres
          </AppText>
          <AppText>{deliveryAddress}</AppText>

          <AppText bold style={defaultStyles.lineWhitespace}>
            Factuuradres
          </AppText>
          <AppText>{billingAddress}</AppText>

          <AppText bold style={defaultStyles.lineWhitespace}>
            Kostenoverzicht (totaal bestelling)
          </AppText>
          <AppText>{orderNo}</AppText>

          <AppText bold style={defaultStyles.lineWhitespace}>
            Betaalwijze
          </AppText>
          <AppText>{billingMethod}</AppText>

          <AppText bold style={defaultStyles.lineWhitespace}>
            Betaalstatus
          </AppText>
          <AppText>{billingStatus}</AppText>

          <ButtonOutline
            style={styles.buttonSection}
            icon="phone"
            title="Klantenservice"
          />
          <ButtonOutline icon="script-text-outline" title="Factuur bekijken" />
          <ButtonOutline icon="undo" title="Retouneren" />
        </View>
        <View style={{ paddingBottom: 40 }}></View>
      </ScrollScreen>
    </>
  );
}
const styles = StyleSheet.create({
  buttonSection: {
    marginTop: 24,
  },
  container: {
    paddingTop: 12,
  },
  detailsSection: {
    paddingTop: 24,
  },
});

export default OrderHistoryDetailScreen;
