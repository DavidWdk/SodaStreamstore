import React from "react"
import i18n from "i18n-js";

export default [
  {
    id: 2,
    title: `${i18n.t("appSettings")}`,
    icon: "settings-outline",
    designationScreen: "AppSettings",
  },
  {
    id: 6,
    title: `${i18n.t("previouslySeen")}`,
    icon: "clock-outline",
    designationScreen: "OrderHistory",
  },
  {
    id: 7,
    title: `${i18n.t("customerService")}`,
    icon: "phone",
  },
  {
    id: 8,
    title: `${i18n.t("giveFeedback")}`,
    icon: "chat-outline",
  },
  {
    id: 9,
    title: `${i18n.t("termsConditions")}`,
    icon: "text-subject",
  },
];
