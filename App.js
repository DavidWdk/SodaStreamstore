//MANAGESUBSCRIPTIONSCREEN WERKEND KRIJGEN

import React from "react";
import { LogBox } from "react-native";
LogBox.ignoreAllLogs(true);
LogBox.ignoreLogs(["Warning: ..."]);

import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import UserSettingsScreen from "./app/screens/UserSettings/UserSettingsScreen";
import BottleCountSettings from "./app/screens/UserSettings/BottleCountSettingsScreen";
import OrderHistoryScreen from "./app/screens/UserSettings/OrderHistoryScreen";
import OrderHistoryDetailScreen from "./app/screens/UserSettings/OrderHistoryDetailScreen";
import AccountSettingsScreen from "./app/screens/UserSettings/AccountSettingsScreen";
import BillingInfoScreen from "./app/screens/UserSettings/BillingInfoScreen";
import AlternativeDeliveryAddressScreen from "./app/screens/UserSettings/AlternativeDeliveryAddressScreen";
import ChangePassScreen from "./app/screens/UserSettings/ChangePassScreen";
import AppSettingsScreen from "./app/screens/UserSettings/AppSettingsScreen";
import LoyaltyPointsScreen from "./app/screens/LoyaltyPointsScreen";
import DonateScreen from "./app/screens/DonateScreen";
import NoSubscriptionsScreen from "./app/screens/Subscriptions/NoSubscriptionsScreen";
import MySubscriptionsScreen from "./app/screens/Subscriptions/MySubscriptionsScreen";
import ManageSubscriptionScreen from "./app/screens/Subscriptions/ManageSubscriptionScreen";
import NewSubFirstStepScreen from "./app/screens/Subscriptions/NewSubFirstStepScreen";
import NewSubSecondStepScreen from "./app/screens/Subscriptions/NewSubSecondStepScreen";
import HomeScreen from "./app/screens/HomeScreen";
import ProductOverviewScreen from "./app/screens/Products/ProductOverviewScreen";
import ShoppingCartScreen from "./app/screens/ShoppingCartScreen";
import FilterScreen from "./app/screens/Products/FilterScreen";
import UserVerificationCheckScreen from "./app/screens/UserVerificationCheckScreen";
import CheckoutScreen from "./app/screens/CheckoutScreen";
import ProductDetailScreen from "./app/screens/Products/ProductDetailScreen";
import DescriptionModal from "./app/screens/Products/DescriptionModal";
import SearchScreen from "./app/screens/SearchScreen";

//TODO: When confirming subscription, show shoppingcartscreen with the selected
//items as an validition from the user.
export default function App() {
  return <NewSubSecondStepScreen />;
}
