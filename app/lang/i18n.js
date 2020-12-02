import * as Localization from "expo-localization";
import i18n from "i18n-js";

i18n.locale = Localization.locale;
i18n.defaultLocale = "nl";
i18n.fallbacks = true;
i18n.fallbacks = "nl";

i18n.translations = {
  nl: {
    //HOMESCREEN
    searchPlaceholder: "Waar ben je naar op zoek?",
    subscription: "Abonnement",
    login: "Inloggen",
    productRange: "Assortiment",
    previouslySeen: "Eerder bekeken door jou",
    dailyHydration: "Dagelijkse hydratatie",
    statistics: "Jouw statistieken",
    ourProductRange: "Bekijk ons assortiment",
    cilinders: "Cilinders",
    syrups: "Smaken",
    accessories: "Accessoires",
    devices: "Toestellen",
    seeDiscounts: "Bekijk onze",
    seeDiscountsTitle: "Kortingen",
    popularProducts: "Populaire producten",
    previouslyBought: "Laatst gekochte artikelen",

    //SEARCH
    yourOrderHistory: "Jouw bestelgeschiedenis",
    allArticlesOnDiscount: "Alle artikelen met korting",

    //ProductDetail
    description: "Omschrijving",
  },
  en: {
    // searchHome: "What are you looking for?",
  },
};
