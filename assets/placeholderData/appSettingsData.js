import i18n from "i18n-js";

export default [
  {
    id: 1,
    title: `${i18n.t("notifications")}`,
    itemKind: "switch",
  },
  {
    id: 2,
    title: `${i18n.t("language")}`,
  },
  {
    id: 3,
    title: `${i18n.t("cookies")}`,
  },
  {
    id: 4,
    title: `${i18n.t("version")}`,
  },
  {
    id: 5,
    title: `${i18n.t("copyright")}`,
  },
  {
    id: 6,
    title: `${i18n.t("deleteHistory")}`,
    textColor: "red",
  },
  {
    id: 7,
    title: `${i18n.t("deleteCache")}`,
    textColor: "red",
  },
  {
    id: 8,
    title: `${i18n.t("backToDefaultSettings")}`,
    textColor: "red",
  },
];
