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
    seeDiscountsTitle: "aanbiedingen",
    popularProducts: "Populaire producten",
    previouslyBought: "Laatst gekochte artikelen",

    //SEARCH
    yourOrderHistory: "Jouw bestelgeschiedenis",
    allArticlesOnDiscount: "Alle artikelen met korting",
    search: "Zoeken",

    //PRODUCTDETAIL
    description: "Omschrijving",

    //SHOPPING CART
    shoppingCart: "Winkelmand",

    //SHOPPING CART LIST
    totalProduct: "Totaal producten",
    delivery: "Bezorging",
    total: "Totaal",
    proceedOrder: "Door naar bestellen",
    chooseQuantity: "Bezorgkwantiteit bepalen",
    freeDeliveryNotice: "Gratis verzending vanaf €50",

    //MORGENINHUISCHECK
    nextDayDelivery: "Morgen in huis",

    //NOSUBSCRIPTIONSSCREEN
    youHaveNoSub: "Je hebt nog geen abonnement",
    activateTitle: "Stel een",
    activateSub: "Abonnement in",
    extraRewards: "Krijg extra beloningen",
    extraRewardsDesc:
      "Abonnementhouders verdienen extra spaarpunten bij iedere bestelling.",
    alwaysStacked: "Altijd je favoriete producten in huis",
    alwaysStackedDesc:
      "Je bepaald zelf hoe vaak je producten bezorgd worden. Ook kan je altijd een bezorging aanpassen, overslaan óf het abonnement opzeggen",

    //LOYALTYPOINTSSCREEN
    yourPoints: `Jouw spaarpunten:`,
    pointsValue: "ter waarde van €",
    pointsDesc:
      "Deze punten kun je uitgeven als korting op je volgende bestelling, of doneren aan het goede doel.",
    donateBtnTitle: "Doneer uw punten",
    donateBtnDesc: "aan het goede doel",
    explanationTitle: "Hoe werkt het spaarprogramma?",
    savingPoints: "Sparen van punten",
    savingPointsDesc: "Per euro die je uitgeeft krijg je 50 spaarpunten",
    spendingPoints: "Uitgeven van punten",
    spendingPointsDesc:
      "De spaarpunten kan je aan alle producten in de winkel uitgeven, dit kan je selecteren bij het afrekenen van een bestelling",
    extraPoints: "Extra spaarpunten",
    extraPointsDesc:
      "Door abonnementen kan je voor eenzelfde bedrag meer spaarpunten verdienen. Abonnementen zijn erg flexibel en ten alle tijden opzegbaar.",
    getSubscriptionBtn: "Stel een abonnement in",

    //OPTIONSDATA
    ordersInvoices: "Bestellingen & facturen",
    appSettings: "App instellingen",
    accountSettings: "Account instellingen",
    manageSub: "Abonnement beheren",
    myLoyaltyPoints: "Mijn spaarpunten",
    customerService: "Klantenservice",
    giveFeedback: "Feedback over de app",
    termsConditions: "Voorwaarden",

    //LOGGEDOUTSETTINGSLIST
    hello: "Hallo!",
    loginDescription:
      "Als je inlogt kun je gebruik maken van alle functies in de app, zoals spaarpunten uitgeven, bestelling zien en nog veel meer!",

    //BOTTLECOUNTER
    bottlesSaved: "Flessen bespaard",
    withSodaStream: "met SodaStream",

    //BOTTLECOUNTSETTINGSSCREEN
    bottleCountHeader: "Flessenteller",
    counterWorkings: "Hoe werkt het?",
    counterWorkingsDesc:
      "De flessenteller berekent het aantal bespaarde plastic flessen op basis van hoeveel liter bruiswater je maakt met een CO2-cilinder. Het aantal CO2-cilinders dat je hebt gebruikt worden berekend aan de hand van je bestelgeschiedenis.",
    amount: "Hoeveelheid",
    amountDesc: "Hoeveel liter bruiswater haal je uit een CO2-cilinder?",
    liter: "liter",

    //ORDERHISTORYSCREEN
    orders: "Bestellingen",
    emptyOrderHistory: "U heeft nog geen bestellingen gedaan",
    emptyOrderHistoryDesc: "Bezoek onze winkel om een bestelling te plaatsen",

    //ORDERHISTORYDETAILS
    orderNum: "Bestelnummer",
    orderedAt: "Besteld op",
    invoiceAddress: "Factuuradres",
    totalCostOrder: "Kostenoverzicht (totaal bestelling)",
    paymentStatus: "Betaalstatus",
    orderDetails: "Bestel details",

    //SMALLPRODUCTLIST
    repeatOrder: "Herhaal deze bestelling",

    //APPSETTINGSSCREEN
    settings: "Instellingen",

    //APPSETTINGSDATA
    notifications: "Meldingen",
    language: "Taal keuze",
    cookies: "Cookiebeleid",
    version: "Versie",
    copyright: "Copyright",
    deleteHistory: "Geschiedenis wissen",
    deleteCache: "Tijdelijke bestanden wissen",
    backToDefaultSettings: "Terug naar standaardinstellingen",

    //ACCOUNTSETTINGSSCREEN
    logout: "Uitloggen",

    //ACCOUNTOPTIONSDATA
    invoiceData: "Factuurgegevens",
    alternativeDeliveryAddress: "Alternatief afleveradres",
    changePass: "Wachtwoord veranderen",

    //BILLINGINFOSCREEN
    firstName: "Voornaam",
    lastName: "Achternaam",
    yourReference1: "Jouw eigen refentie 1",
    yourReference2: "Jouw eigen refentie 2",
    zipCode: "Postcode",
    houseNum: "Huisnummer",
    addition: "Toevoeging",
    street: "Straatnaam",
    city: "Woonplaats",
    country: "Land",
    selectCountry: "Selecteer een land",
    email: "E-mailadres",
    phoneNum: "Telefoonnummer",
    companyDetails: "Bedrijfsgegevens",
    businessOrderDesc:
      "Vul de onderstaande gegevens in voor zakelijke bestellingen.",
    companyName: "Bedrijfsnaam",
    accountNum: "IBAN rekeningnummer",
    btwNum: "BTW nummer",
    kvkNum: "KVK Nummer",
    invoiceEmail: "E-mailadres facturatie",
    saveChanges: "Wijzigingen opslaan",

    //ALTERNATIVEDELIVERYADDRESSSCREEN
    alternativeDeliveryAddress: "Alternatief afleveradres",
    useAltAddress: "Ander afleveradres gebruiken?",
    deliveryRef1: "Verzendreferentie 1",
    deliveryRef2: "Verzendreferentie 2",

    //CHANGEPASSSCREEN
    confirmPass: "Bevestig wachtwoord",
    changePassBtn: "Wachtwoord wijzigen",
    password: "Wachtwoord",
    notIdentical: "Wachtwoorden komen niet overeen",

    //LOGINSCREEN
    existingUsers: "Bestaande gebruikers",
    newUsers: "Nieuwe gebruikers",
    useValidEmail: "Gebruik een geldig e-mailadres",
    forgotPass: "Wachtwoord vergeten",
    createAcc: "Maak een account aan",
    requiredField: "Dit is een verplicht veld",
    validMail: "Voer een geldig e-mailadres in",

    //REGISTERSCREEN
    ifBusinessCustomer: "Indien u zakelijke klant bent",
    loginData: "Inloggegevens",
    loginDataDesc:
      "Het e-mailadres en wachtwoord zijn nodig om toegang te krijgen tot uw account. Ook zullen we je e-mail gebruiken om contact met je op te nemen na een bestelling",
    minLength: "Dit voldoet niet aan de minimale lengte",
    maxLength: "Dit is te lang",
    numberNotice: "Alleen nummers toegestaan",

    //PRODUCTOVERVIEWSCREEN
    syrups: "Siropen",
    filter: "Filteren",

    //PRODUCTDETAILSCREEN

    //PRODUCTSHOWCASEFOLD
    addToCart: "In winkelwagentje",
    wasDeliveredDate: "Dit product is bezorgd op",
    seeFullDesc: "Bekijk de volledige omschrijving...",
    nutrition: "Voedingswaarde",
    specs: "Specificaties",
    relatedProducts: "Gerelateerde producten",
    goToProduct: "Meer over dit product",

    //USERVERIFICATIONSCREEN
    quickCheck: "Korte controle",
    isItYou: "Ben jij het nog, ",
    verificationDesc:
      "Om er zeker van te zijn dat jij de gebruiker bent die gekoppeld is aan het huidig ingelogde account dien je jouw wachtwoord in te voeren",
    switchAcc: "Wissel account",
    proceed: "Verder",

    //SUBSCRIPTIONLISTITEM
    addProdToSub: "Voeg een product aan uw abonnement toe",

    //SUBSCRIPTIONPRODUCTSLIST
    searchProd: "Zoek naar een product",
    confirmProd: "Zie gekozen producten",
    deliveryCosts: "Bezorgkosten",
    deliveryFreq: "Bezorgingfrequentie",
    eachMonth: "Elke maand",
    noProductsNoticeTitle: "Geen producten",
    noProductsNoticeBody:
      "Je moet producten kiezen om een abonnement aan te schaffe.",

    //LOGGEDOUTSUBSCREEN
    youreNotLoggedIn: "Je bent niet ingelogd",
    loginForSub: "Login om abonnementen te beheren of aan te maken",

    //LOGGEDOUTLOYALTYSCREEN
    loginForLoyalty: "Login om spaarpunten te verzamelen of uit te geven",

    //NEWSUBFIRSTSTEP
    step1: "Stap 1: kies je producten",
    addItems: "Voeg items toe",

    //SUBSCRIPTIONITEMSOVERVIEWSCREEN
    chosenProds: "Jouw producten",

    //SUBSCRIPTIONQUANTITYOPTIONS
    eachTwoMonths: "Elke twee maanden",
    eachFourMonths: "Elke vier maanden",

    //FILTERSCREEN
    deleteFilter: "Filter wissen",
    sort: "Sorteren op",
    applyFilter: "Filter toepassen",

    //SORTOPTIONS
    price: "Prijs",
    lowHigh: "Laag naar hoog",
    highLow: "Hoog naar laag",
    popularity: "Populariteit",

    //NEWSUBSECONDSTEPSCREEN
    step2: "Stap 2: frequentie",
    startDate: "Startdatum",
    subscriptionDisclaimer:
      "Het abonnement zal elk aantal gekozen maanden automatisch worden geïncasseerd voor €23,99. We sturen een herinnering voor elke bezorging zodat je genoeg tijd hebt je bestelling aan te passen of te annuleren. Het abonnement kan je ten allen tijden opzeggen.",
    buySubscription: "Abonnement aanschaffen",

    //DONATESCREEN
    donateTitle: "Doneer aan The Plastic Soup Foundation",
    donateDesc1:
      "De tsunami van plasticsoep zo snel mogelijk stoppen! Dát is kort gezegd de missie van Plastic Soup Foundation. Lukt dat niet, dan zadelen we toekomstige generaties op met de gevolgen van een verschrikkelijke plaag. Plastic Soup Foundation is daarmee een ‘single issue’-milieuorganisatie. We houden ons met één ding bezig: het stoppen van de plasticvervuiling bij de bron.",
    donateDesc2:
      "De bron van die plasticvervuiling zijn we trouwens vaak zelf; de plasticsoep begint al voor je eigen deur op de stoep. Met SodaStream zet je al een flinke stap in de goede richting - hiermee verminder je jouw eigen plastic voetafdruk. Echter is dit voor ons niet genoeg, help The Plastic Soup Foundation daarom door jouw spaarpunten te doneren.",
    donateBtn1: "Doneer uw tegoed aan",
    donateBtn2: "Plastic Soup Foundation",

    //PREVIOUSLYSEENSCREEN
    prevSeenTitle: "Eerder bekeken",

    //CHECKOUTSCREEN
    addAddress: "Ander adres toevoegen",
    deliveryAddress: "Bezorgadres",
    paymentMethod: "Betaalmethode",
    pay: "Afrekenen",
    spendPointsDesc1: "Gebruik jouw spaarpunten en krijg €",
    spendPointsDesc2: " korting",
    finishOrder: "Bestelling afronden",
    totalAmount: "Totaalbedrag",

    //MANAGESUBSCRIPTIONSCREEN
    manageSubscription: "Abonnement beheren",
    dayBeforeNotice:
      "Abonnementen kunnen tot een dag voor bezorging gewijzigd worden",
    products: "Producten",
    skipNextDelivery: "Aankomende bestelling overslaan",
    cancelSubscription: "Abonnement opzeggen",

    //GLASCOUNTER
    glassCounterNote:
      "Het is aangeraden voor vrouwen om 2 liter water per dag te drinken. Voor mannen geldt 2,5 liter per dag. Wil je weten waarom?",
    readMoreBtn: "Lees meer...",
    volGlass: "Volume per glas",
    dailyTarget: "Dagelijks doel",

    //WHYWATERSCREEN
    headerTitle: "Waarom water?",
    whyTitle1: "Water maakt je alerter en productiever",
    whyDesc1:
      "Water drinken helpt om je te concenteren en deze contratie vast te houden gedurende de dag.",
    whyTitle2: "Water verbeterd je spijsvertering",
    whyDesc2:
      "Water helpt bij het afbreken van voedsel, zodat je lichaam de voedingsstoffen makkelijker kan opnemen",
    whyTitle3: "Verbeterd de bloedsomloop",
    whyDesc3:
      "Door water te drinken blijft je bloed lekker stromen en komen toxines vrij",
    whyTitle4: "Essentieel voor het brein",
    whyDesc4:
      "Je hersenen bestaan voor 70% uit water, water drinken helpt om je begrip te verbeteren, emoties in balans te houden en geheugenfuncties te behouden.",
    whyTitle5: "Je spieren bestaan voor meer dan 70% uit water",
    whyDesc5:
      "Met water houd je je spieren in topconditie, waardoor je maximale kracht kunt  uitoefenen. Blijf gehydrateerd om vermoeide spieren te voorkomen.",
  },

  // en: {
  //   // searchHome: "What are you looking for?",
  // },
};
