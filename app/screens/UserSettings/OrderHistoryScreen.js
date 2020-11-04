import React from "react";
import { View, StyleSheet } from "react-native";

import { AppText, AppTitle } from "../../components/fonts";
import SmallProductItem from "../../components/lists/SmallProductItem";
import SmallProductList from "../../components/lists/SmallProductList";
import ListItemSeperator from "../../components/lists/ListItemSeperator";
import AppButton from "../../components/AppButton";
import defaultStyles from "../../config/styles";
import Screen from "../../components/screenStyling/Screen";
import orderHistory from "../../../assets/placeholderData/orderHistory";

// const orders = [
//   {
//     order1: {
//       date: "2 juni",
//       product: {
//         id: 1,
//         product: "Classic Lemon Lime Siroop",
//         price: "€4,99",
//         imageUrl:
//           "https://image.sodastreamstore.nl/m/sodastream-classic-siroop-lemon-lime?sid=3&pid=1393549",
//       },
//       product: {
//         id: 2,
//         product: "Fruit Drops Mango",
//         price: "€4,99",
//         imageUrl:
//           "https://image.sodastreamstore.nl/m/sodastream-fruit-drops-siroop-mango?sid=3&pid=3460647",
//       },
//       product: {
//         id: 3,
//         product: "2 pack CO2-cilinders",
//         price: "€29,99",
//         imageUrl:
//           "https://image.sodastreamstore.nl/m/sodastream?sid=3&pid=1716332",
//       },
//     },
//     order2: {
//       date: "24 februari",
//       product: {
//         id: 4,
//         product: "Classic Orange Siroop",
//         price: "€4,99",
//         imageUrl:
//           "https://image.sodastreamstore.nl/m/sodastream-classic-siroop-orange?sid=3&pid=1393546",
//       },
//       product: {
//         id: 5,
//         product: "Classic Cola Siroop",
//         price: "€4,99",
//         imageUrl:
//           "https://image.sodastreamstore.nl/m/sodastream-classic-siroop-cola?sid=3&pid=1393545",
//       },
//       product: {
//         id: 6,
//         product: "2 pack CO2-cilinders",
//         price: "€29,99",
//         imageUrl:
//           "https://image.sodastreamstore.nl/m/sodastream?sid=3&pid=1716332",
//       },
//     },
//   },
// ];

const orders = [
  {
    id: 1,
    product: "Classic Lemon Lime Siroop",
    price: "€4,99",
    imageUrl:
      "https://image.sodastreamstore.nl/m/sodastream-classic-siroop-lemon-lime?sid=3&pid=1393549",
  },
  {
    id: 2,
    product: "Fruit Drops Mango",
    price: "€4,99",
    imageUrl:
      "https://image.sodastreamstore.nl/m/sodastream-fruit-drops-siroop-mango?sid=3&pid=3460647",
  },
  {
    id: 3,
    product: "2 pack CO2-cilinders",
    price: "€29,99",
    imageUrl: "https://image.sodastreamstore.nl/m/sodastream?sid=3&pid=1716332",
  },
  {
    id: 4,
    product: "Classic Orange Siroop",
    price: "€4,99",
    imageUrl:
      "https://image.sodastreamstore.nl/m/sodastream-classic-siroop-orange?sid=3&pid=1393546",
  },
  {
    id: 5,
    product: "Classic Cola Siroop",
    price: "€4,99",
    imageUrl:
      "https://image.sodastreamstore.nl/m/sodastream-classic-siroop-cola?sid=3&pid=1393545",
  },
  {
    id: 6,
    product: "2 pack CO2-cilinders",
    price: "€29,99",
    imageUrl:
      "https://image.sodastreamstore.nl/m/sodastream-classic-siroop-cola?sid=3&pid=1393545",
  },
];

// const dataObj = orders[0];

// const dataArray = Object.keys(dataObj).map((key) => {
//   const obj = dataObj[key];
//   obj.keyName = key;
//   return obj;
// });

// console.log(dataArray);

function OrderHistoryScreen(props) {
  return (
    <Screen>
      <SmallProductList data={orders} />
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {},
});

export default OrderHistoryScreen;
