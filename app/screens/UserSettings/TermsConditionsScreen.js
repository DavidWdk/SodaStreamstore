import React from "react";

import i18n from "i18n-js";

import { WebView } from "react-native-webview";
import CustomHeader from "../../components/CustomHeader";

function TermsConditionsScreen(props) {
  return (
    <>
      <CustomHeader title={i18n.t("termsConditions")} topPaddingAdjustment />
      <WebView
        source={{
          uri: "https://www.sodastreamstore.nl/f/algemene-voorwaarden",
        }}
      />
    </>
  );
}

export default TermsConditionsScreen;
