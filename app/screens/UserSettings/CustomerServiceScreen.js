import React from "react";

import i18n from "i18n-js";

import { WebView } from "react-native-webview";
import CustomHeader from "../../components/CustomHeader";

function CustomerServiceScreen(props) {
  return (
    <>
      <CustomHeader title={i18n.t("customerService")} topPaddingAdjustment />
      <WebView
        source={{
          uri: "https://www.sodastreamstore.nl/f/klantenservice",
        }}
      />
    </>
  );
}

export default CustomerServiceScreen;
