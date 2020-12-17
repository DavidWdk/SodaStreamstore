import React from "react";
import { View, StyleSheet, ScrollView, Image } from "react-native";
import Constants from "expo-constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import i18n from "i18n-js";

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

function LoyaltyPointsScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={[styles.upperSection, defaultStyles.screenContainer]}>
        <AppTitle style={defaultStyles.textCenter}>
          {i18n.t("yourPoints")}
        </AppTitle>
        <AppTitle style={styles.fatHeader}>
          {availablePoints}
          <MaterialCommunityIcons name="pig" size={38} style={styles.icon} />
        </AppTitle>

        <AppText style={defaultStyles.textCenter}>
          {i18n.t("pointsValue")}
          {euro}
        </AppText>
        <AppText
          italic
          style={[defaultStyles.textCenter, defaultStyles.lineWhitespace]}
        >
          {i18n.t("pointsDesc")}
        </AppText>
      </View>

      <View style={defaultStyles.screenContainer}>
        <HugeButton
          title={i18n.t("donateBtnTitle")}
          boldTitle={i18n.t("donateBtnDesc")}
          onPress={() => navigation.navigate("Donate")}
        />
      </View>

      {/* <View style={[defaultStyles.screenContainer]}> */}
      <AppTitle style={[defaultStyles.textCenter, defaultStyles.title]}>
        {i18n.t("explanationTitle")}
      </AppTitle>

      <ImgTextBlock
        image="https://i.ibb.co/6vQdWWH/undraw-Savings-re-eq4w.png"
        style={defaultStyles.lineWhitespace}
        title={i18n.t("savingPoints")}
      >
        {i18n.t("savingPointsDesc")}
      </ImgTextBlock>

      <ImgTextBlock
        blueBackground
        image="https://i.ibb.co/N2bSDMV/undraw-happy-birthday-s72n.png"
        style={defaultStyles.lineWhitespace}
        title={i18n.t("spendingPoints")}
      >
        {i18n.t("spendingPointsDesc")}
      </ImgTextBlock>

      <View style={defaultStyles.lineWhitespace}>
        <ImgTextBlock
          image="https://i.ibb.co/Zgz4xgF/undraw-investing-7u74.png"
          title={i18n.t("extraPoints")}
        >
          {i18n.t("extraPointsDesc")}
        </ImgTextBlock>

        <View style={defaultStyles.screenContainer}>
          <AppButton
            title={i18n.t("getSubscriptionBtn")}
            icon="calendar-repeat"
            textColor="black"
            color="yellow"
            style={styles.btn}
            onPress={() => navigation.navigate("Subscription")}
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
