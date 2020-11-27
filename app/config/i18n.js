export const fallback = "nl";

export const supportedLocales = {
  nl: {
    name: "Nederlands",
    translationFileLoader: () => require("../lang/nl.json"),
  },
  fr: {
    name: "French",
    translationFileLoader: () => require("../lang/fr.json"),
  },
};

export const defaultNameSpace = "common";

export const namespaces = [];
