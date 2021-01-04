import i18n from "i18n-js";

export default [
  {
    id: 0,
    title: "Kies een categorie",
    data: [
      { title: `${i18n.t("cilinders")}` },
      { title: `${i18n.t("syrups")}` },
      { title: `${i18n.t("accessories")}` },
      { title: `${i18n.t("devices")}` },
    ],
  },
  {
    id: 1,
    title: "Artikelen met korting",
    data: [
      {
        title: `${i18n.t("allArticlesOnDiscount")}`,
        payload: "onSale",
        headerTitle: "Korting",
        payload: {
          payload: "onSale",
        },
      },
      {
        title: `${i18n.t("cilinders")}`,
        headerTitle: "Korting",
        payload: {
          payload: "onSale",
        },
      },
      {
        title: `${i18n.t("syrups")}`,
        payload: "onSale",
        headerTitle: "Korting",
        payload: {
          payload: "onSale",
        },
      },
      {
        title: `${i18n.t("accessories")}`,
        payload: "onSale",
        headerTitle: "Korting",
        payload: {
          payload: "onSale",
        },
      },
      {
        title: `${i18n.t("devices")}`,
        payload: "onSale",
        headerTitle: "Korting",
        payload: {
          payload: "onSale",
        },
      },
    ],
  },
  {
    id: 2,
    title: `${i18n.t("previouslyBought")}`,
    destinationScreen: "OrderHistory",
  },
  {
    id: 3,
    title: `${i18n.t("previouslySeen")}`,
    destinationScreen: "PreviouslySeen",
  },
];
