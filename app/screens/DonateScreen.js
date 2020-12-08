import React from "react";
import { StyleSheet, Image, View } from "react-native";

import i18n from "i18n-js";

import { AppText, AppTitle } from "../components/fonts";
import ScrollScreen from "../components/screenStyling/ScrollScreen";
import CustomHeader from "../components/CustomHeader";
import HugeButton from "../components/HugeButton";
import defaultStyles from "../config/styles";

function DonateScreen(props) {
  return (
    <ScrollScreen style={[defaultStyles.screenContainer]}>
      <CustomHeader title="Doneren" />

      <AppTitle>{i18n.t("donateTitle")}</AppTitle>
      <AppText style={defaultStyles.lineWhitespace}>
        {i18n.t("donateDesc1")}
      </AppText>
      <Image
        style={styles.image}
        source={{
          uri:
            "https://www.europarl.europa.eu/resources/library/images/20181008PHT15277/20181008PHT15277_original.jpg",
        }}
      />
      <AppText>{i18n.t("donateDesc2")}</AppText>
      <HugeButton
        style={styles.hugeBtn}
        title={i18n.t("donateBtn1")}
        boldTitle={i18n.t("donateBtn2")}
      />
      <View style={styles.paddingBot} />
    </ScrollScreen>
  );
}
const styles = StyleSheet.create({
  paddingBot: {
    paddingBottom: 50,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginVertical: 16,
  },
});

export default DonateScreen;
