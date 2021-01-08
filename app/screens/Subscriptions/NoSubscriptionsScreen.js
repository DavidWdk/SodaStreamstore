import React from "react";
import { View, StyleSheet } from "react-native";

import i18n from "i18n-js";

import { AppTitle } from "../../components/fonts";
import ScrollScreen from "../../components/screenStyling/ScrollScreen";
import defaultstyles from "../../config/styles";
import ImgTextBlock from "../../components/ImgTextBlock";
import HugeButton from "../../components/HugeButton";

function NoSubscriptionScreen({ navigation }) {
  return (
    <ScrollScreen>
      <AppTitle style={[styles.title, defaultstyles.textCenter]}>
        {i18n.t("youHaveNoSub")}
      </AppTitle>

      <View style={defaultstyles.screenContainer}>
        <HugeButton
          title={i18n.t("activateTitle")}
          boldTitle={i18n.t("activateSub")}
          onPress={() => navigation.navigate("NewSubscriptionFirstStep")}
        />
      </View>

      <ImgTextBlock
        style={defaultstyles.lineWhitespace}
        title={i18n.t("extraRewards")}
        image="https://i.ibb.co/N2bSDMV/undraw-happy-birthday-s72n.png"
      >
        {i18n.t("extraRewardsDesc")}
      </ImgTextBlock>

      <ImgTextBlock
        blueBackground
        image="https://i.ibb.co/dQ35zfK/undraw-advanced-customization-58j6.png"
        title={i18n.t("alwaysStacked")}
      >
        {i18n.t("alwaysStackedDesc")}
      </ImgTextBlock>
    </ScrollScreen>
  );
}

const styles = StyleSheet.create({
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
