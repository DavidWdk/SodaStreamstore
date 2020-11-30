import React from "react";
import { View, StyleSheet } from "react-native";

import { AppTitle } from "../../components/fonts";
import ScrollScreen from "../../components/screenStyling/ScrollScreen";
import defaultstyles from "../../config/styles";
import ImgTextBlock from "../../components/ImgTextBlock";
import HugeButton from "../../components/HugeButton";

function NoSubscriptionScreen({ navigation }) {
  return (
    <ScrollScreen>
      <AppTitle style={[styles.title, defaultstyles.textCenter]}>
        Je hebt nog geen abonnement
      </AppTitle>

      <View style={defaultstyles.screenContainer}>
        <HugeButton
          title="Stel een"
          boldTitle="Abonnement in"
          onPress={() => navigation.navigate("NewSubscriptionFirstStep")}
        />
      </View>

      <ImgTextBlock
        style={defaultstyles.lineWhitespace}
        title="Krijg extra beloningen"
      >
        Abonnementhouders verdienen extra spaarpunten bij iedere bestelling.
      </ImgTextBlock>

      <ImgTextBlock
        blueBackground
        title="Altijd je favoriete producten in huis"
      >
        Je bepaald zelf hoe vaak je producten bezorgd worden. Ook kan je altijd
        een bezorging aanpassen, overslaan óf het abonnement opzeggen
      </ImgTextBlock>
    </ScrollScreen>
  );
}
const styles = StyleSheet.create({
  btn: {
    width: 280,
    alignSelf: "center",
  },
  title: {
    fontSize: 24,
    marginTop: 24,
    color: defaultstyles.colors.black,
  },
  topWhitespace: {
    paddingTop: 48,
  },
});

export default NoSubscriptionScreen;
