import i18n from "i18n-js";

export default [
  {
    id: 1,
    title: `${i18n.t("invoiceData")}`,
    icon: "script-text-outline",
    designationScreen: "BillingInfo",
  },
  {
    id: 2,
    title: `${i18n.t("alternativeDeliveryAddress")}`,
    icon: "home-outline",
    designationScreen: "AltnernativeDeliveryAddress",
  },
  {
    id: 3,
    title: `${i18n.t("changePass")}`,
    icon: "lock",
    designationScreen: "ChangePassword",
  },
];
