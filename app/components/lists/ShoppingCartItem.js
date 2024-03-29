import React from "react";
import {
  Pressable,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import MorgenInHuisCheck from "../MorgenInHuisCheck";
import { AppTitle, AppText } from "../fonts";
import defaultStyles from "../../config/styles";
import AddSubtractInput from "../AddSubtractInput";

import { useNavigation } from "@react-navigation/native";

function ShoppingCartItem({
  image,
  title,
  price,
  onPress,
  label,
  amount,
  onPressAdd,
  onPressDeleteItem,
  onPressSubtract,
  totalProductPrice,
  morgenInHuis = true,
}) {
  const navigation = useNavigation();
  const route = {};

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <TouchableOpacity style={styles.deleteIcon} onPress={onPressDeleteItem}>
        <MaterialCommunityIcons
          name="close"
          size={25}
          color={defaultStyles.colors.black}
        />
      </TouchableOpacity>

      <Pressable onPress={() => navigation.navigate("ProductDetails", route)}>
        <Image source={{ uri: image }} style={styles.productImage} />
      </Pressable>

      <View style={styles.productInfo}>
        <Pressable onPress={() => navigation.navigate("ProductDetails", route)}>
          <AppTitle numberOfLines={2}>{title ? title : label}</AppTitle>
        </Pressable>
        {morgenInHuis && <MorgenInHuisCheck style={styles.topMargin} />}

        <View style={styles.bottomRow}>
          <View style={styles.productAmountContainer}>
            <AddSubtractInput
              initialvalue={amount.toString()}
              style={styles.productAmount}
              styleInput={styles.productAmountInput}
              editable={false}
              textAlign="center"
              onPressAdd={onPressAdd}
              onPressSubtract={onPressSubtract}
              onPressDeleteItem={onPressDeleteItem}
            />
            <AppText thin style={styles.pricePerItem}>
              {price} p.s.
            </AppText>
          </View>
          <AppTitle style={styles.totalPrice}>{totalProductPrice}</AppTitle>
        </View>
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 16,
    paddingHorizontal: 12,
  },
  bottomRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 4,
  },
  deleteIcon: {
    position: "absolute",
    zIndex: 5,
    left: 8,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: 20,
  },
  pricePerItem: {
    color: defaultStyles.colors.grey,
    marginLeft: 8,
    alignSelf: "center",
  },
  productAmount: {
    width: 65,
  },
  productAmountInput: {
    paddingVertical: 2,
    paddingHorizontal: "auto",
  },
  productAmountContainer: {
    flexDirection: "row",
  },
  productImage: {
    width: 110,
    height: 110,
    resizeMode: "contain",
  },
  productInfo: {
    paddingLeft: 8,
    flex: 1,
  },
  topMargin: {
    marginTop: 8,
  },
  totalPrice: {
    alignSelf: "flex-end",
  },
});

export default ShoppingCartItem;
