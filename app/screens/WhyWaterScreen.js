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
        <ImgTextBlock
          title={i18n.t("whyTitle1")}
          image="https://i.ibb.co/Zgz4xgF/undraw-investing-7u74.png"
        >
          {i18n.t("whyDesc1")}
        </ImgTextBlock>

        <ImgTextBlock
          title={i18n.t("whyTitle2")}
          blueBackground
          image="https://i.ibb.co/P4tL4yX/undraw-medicine-b1ol.png"
        >
          {i18n.t("whyDesc2")}
        </ImgTextBlock>

        <ImgTextBlock
          title={i18n.t("whyTitle3")}
          image="https://i.ibb.co/ScSZv73/undraw-workout-gcgu.png"
        >
          {i18n.t("whyDesc3")}
        </ImgTextBlock>

        <ImgTextBlock
          title={i18n.t("whyTitle4")}
          blueBackground
          image="https://i.ibb.co/3SXc1Gr/undraw-ideas-s70l.png"
        >
          {i18n.t("whyDesc4")}
        </ImgTextBlock>

        <ImgTextBlock
          title={i18n.t("whyTitle5")}
          image="https://i.ibb.co/ScSZv73/undraw-workout-gcgu.png"
        >
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
