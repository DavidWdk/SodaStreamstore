import i18n from "i18n-js";

export default [
  {
    id: 1,
    title: `${i18n.t("ordersInvoices")}`,
    icon: "package-variant-closed",
    designationScreen: "OrderHistory",
  },
  {
    id: 2,
    title: `${i18n.t("appSettings")}`,
    icon: "settings-outline",
    designationScreen: "AppSettings",
  },
  {
    id: 3,
    title: `${i18n.t("accountSettings")}`,
    icon: "account-settings",
    designationScreen: "AccountSettings",
  },
  {
    id: 4,
    title: `${i18n.t("manageSub")}`,
    icon: "calendar-repeat-outline",
    designationScreen: "Subscription",
  },
  {
    id: 5,
    title: `${i18n.t("myLoyaltyPoints")}`,
    icon: "pig",
    designationScreen: "LoyaltyPoints",
  },
  {
    id: 6,
    title: `${i18n.t("previouslySeen")}`,
    icon: "clock-outline",
    designationScreen: "RecentlyViewed",
  },
  {
    id: 7,
    title: `${i18n.t("customerService")}`,
    icon: "phone",
    designationScreen: "CustomerService",
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
    designationScreen: "TermsConditions",
  },
];
