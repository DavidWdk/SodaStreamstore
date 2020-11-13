import React from "react";
import { View, StyleSheet, ScrollView, Image } from "react-native";
import Constants from "expo-constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { AppTitle, AppText } from "../components/fonts";
import AppButton from "../components/AppButton";
import defaultStyles from "../config/styles";
import HugeButton from "../components/HugeButton";
import ImgTextBlock from "../components/ImgTextBlock";

const points = 2550;
const availablePoints = points
  .toString()
  .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");

const pointsInEuros = (Math.round(points * 5) / 5000).toFixed(2);
pointsInEuros.toString();
const euro = pointsInEuros.replace(".", ",");

function LoyaltyPointsScreen(props) {
  return (
    <ScrollView>
      <View style={[styles.upperSection, defaultStyles.screenContainer]}>
        <AppTitle style={defaultStyles.textCenter}>Jouw spaarpunten:</AppTitle>
        <AppTitle style={styles.fatHeader}>
          {availablePoints}
          <MaterialCommunityIcons name="pig" size={38} style={styles.icon} />
        </AppTitle>

        <AppText style={defaultStyles.textCenter}>
          ter waarde van €{euro}
        </AppText>
        <AppText
          italic
          style={[defaultStyles.textCenter, defaultStyles.lineWhitespace]}
        >
          {" "}
          Deze punten kun je uitgeven als korting op je volgende bestelling, of
          doneren aan het goede doel.{" "}
        </AppText>
      </View>

      <View style={defaultStyles.screenContainer}>
        <HugeButton title="Doneer uw punten" boldTitle="aan het goede doel" />
      </View>

      {/* <View style={[defaultStyles.screenContainer]}> */}
      <AppTitle style={[defaultStyles.textCenter, defaultStyles.title]}>
        Hoe werkt het spaarprogramma?
      </AppTitle>

      <ImgTextBlock
        style={defaultStyles.lineWhitespace}
        title="Sparen van punten"
      >
        Per euro die je uitgeeft krijg je 50 spaarpunten
      </ImgTextBlock>

      <ImgTextBlock
        blueBackground
        style={defaultStyles.lineWhitespace}
        title="Uitgeven van punten"
      >
        De spaarpunten kan je aan alle producten in de winkel uitgeven, dit kan
        je selecteren bij het afrekenen van een bestelling
      </ImgTextBlock>

      <View style={defaultStyles.lineWhitespace}>
        <ImgTextBlock title="Extra spaarpunten">
          Door abonnementen kan je voor eenzelfde bedrag meer spaarpunten
          verdienen. Abonnementen zijn erg flexibel en ten alle tijden
          opzegbaar.
        </ImgTextBlock>

        <View style={defaultStyles.screenContainer}>
          <AppButton
            title="Stel een abonnement in"
            icon="calendar-repeat"
            textColor="black"
            color="yellow"
            style={styles.btn}
          />
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  btn: {
    marginBottom: 32,
  },
  fatHeader: {
    fontSize: 50,
    paddingLeft: 10,
  },
  image: {
    alignSelf: "center",
    marginVertical: 16,
    width: 150,
    height: 150,
  },
  inlineIcon: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: 24,
  },
  upperSection: {
    backgroundColor: defaultStyles.colors.blueBackground,
    flex: 1,
    paddingTop: Constants.statusBarHeight + 12,
    paddingBottom: 24,
    alignItems: "center",
  },
  whitespace: {
    paddingTop: 32,
  },
});

export default LoyaltyPointsScreen;
