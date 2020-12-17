import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import i18n from "i18n-js";

import CustomHeader from "../components/CustomHeader";
import ImgTextBlock from "../components/ImgTextBlock";

function WhyWaterScreen(props) {
  return (
    <>
      <CustomHeader title={i18n.t("headerTitle")} topPaddingAdjustment />
      <ScrollView style={styles.container}>
        <ImgTextBlock title={i18n.t("whyTitle1")}>
          {i18n.t("whyDesc1")}
        </ImgTextBlock>

        <ImgTextBlock title={i18n.t("whyTitle2")} blueBackground>
          {i18n.t("whyDesc2")}
        </ImgTextBlock>

        <ImgTextBlock title={i18n.t("whyTitle3")}>
          {i18n.t("whyDesc3")}
        </ImgTextBlock>

        <ImgTextBlock title={i18n.t("whyTitle4")} blueBackground>
          {i18n.t("whyDesc4")}
        </ImgTextBlock>

        <ImgTextBlock title={i18n.t("whyTitle5")}>
          {i18n.t("whyDesc5")}
        </ImgTextBlock>
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {},
});

export default WhyWaterScreen;
