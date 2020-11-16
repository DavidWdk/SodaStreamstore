import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";

import CustomHeader from "../../components/CustomHeader";
import Screen from "../../components/screenStyling/Screen";
import defaultStyles from "../../config/styles";
import { AppText, AppTitle } from "../../components/fonts";
import SquareSelectionItems from "../../components/SquareSelectionItems";
import SubscriptionProductsList from "../../components/lists/SubscriptionProductsList";
import PriceSum from "../../components/PriceSum";

function ManageSubscriptionScreen(props) {
  const options = ["Elke maand", "Elke twee maanden", "Elke drie maanden"];

  const products = [
    {
      id: 1,
      label: "2 pack CO2-cilinders",
      image: "https://image.sodastreamstore.nl/m/sodastream?sid=3&pid=1716332",
      price: 29.99,
      amount: "1",
    },
    {
      id: 2,
      label: "Fruit Drops Mango",
      image:
        "https://image.sodastreamstore.nl/m/sodastream-fruit-drops-siroop-mango?sid=3&pid=3460647",
      price: 4.99,
      amount: "3",
    },
    {
      id: 3,
      label: "Mocktail siroop Bahamas Pina Colada",
      image:
        "https://image.sodastreamstore.nl/m/sodastream-mocktail-siroop-bahamas-pina-colada?sid=3&pid=2306900",
      price: 6.99,
      amount: "3",
    },
  ];

  const priceArray = products.map(({ price }) => price);
  const totalPriceArticles = priceArray.reduce((a, c) => a + c);
  const [deliveryCosts, setDeliveryCosts] = useState(0);

  useEffect(() => {
    if (deliveryCosts < 50) {
      setDeliveryCosts(3.99);
    }
  }, []);

  return (
    <Screen style={defaultStyles.screenContainer}>
      <CustomHeader style={styles.header} title="Abonnement beheren" />
      <SubscriptionProductsList
        data={products}
        keyExtractor={(product) => product.id.toString()}
        ListHeaderComponent={
          <>
            <AppText italic style={defaultStyles.textCenter}>
              Abonnementen kunnen tot een dag voor bezorging gewijzigd worden
            </AppText>

            <AppTitle style={defaultStyles.topWhitespaceSmaller}>
              Bezorgkwantiteit
            </AppTitle>

            <SquareSelectionItems items={options} style={styles.item} />
            <AppTitle style={styles.title}>Producten</AppTitle>
          </>
        }
        ListFooterComponent={
          <View>
            <AppTitle>Totaal</AppTitle>
            <PriceSum title="Totaal artikelen" price={totalPriceArticles} />
            <PriceSum title="Verzendkosten" price={deliveryCosts} />
          </View>
        }
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {},
  item: {
    marginTop: 4,
  },
  header: {
    marginTop: 16,
  },
  products: {
    paddingHorizontal: 12,
    // backgroundColor: defaultStyles.colors.blueBackground,
    // marginVertical: 24,
    // paddingVertical: 24,
  },
  title: {
    paddingBottom: 8,
    paddingTop: 24,
    marginTop: 12,
  },
});

export default ManageSubscriptionScreen;
