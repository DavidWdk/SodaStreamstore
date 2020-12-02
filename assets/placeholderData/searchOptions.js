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
      { title: `${i18n.t("allArticlesOnDiscount")}` },
      { title: `${i18n.t("cilinders")}` },
      { title: `${i18n.t("syrups")}` },
      { title: `${i18n.t("accessories")}` },
      { title: `${i18n.t("devices")}` },
    ],
  },
  {
    id: 2,
    title: `${i18n.t("previouslyBought")}`,
  },
  {
    id: 3,
    title: `${i18n.t("previouslySeen")}`,
  },
];
