import React from "react";

import i18n from "i18n-js";

import { WebView } from "react-native-webview";
import CustomHeader from "../components/CustomHeader";

function ForgotPasswordScreen(props) {
  return (
    <>
      <CustomHeader title={i18n.t("forgotPass")} topPaddingAdjustment />
      <WebView
        source={{
          uri: "https://www.sodastreamstore.nl/x/wachtwoordvergeten",
        }}
      />
    </>
  );
}

export default ForgotPasswordScreen;
