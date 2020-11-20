import React, { useState } from "react";
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

function ShoppingCartItem({
  image,
  title,
  price,
  onPress,
  amount,
  onPressAdd,
  onPressSubtract,
  morgenInHuis = true,
}) {
  const [productAmount, setProductAmount] = useState(amount);

  const formatPrice = (price) => {
    price = price.toFixed(2);
    let priceStr = price.toString().replace(".", ",");
    priceStr = "€" + priceStr;
    return priceStr;
  };

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <TouchableOpacity style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="close"
          size={25}
          color={defaultStyles.colors.black}
        />
      </TouchableOpacity>
      <Image source={{ uri: image }} style={styles.productImage} />

      <View style={styles.productInfo}>
        <AppTitle>{title}</AppTitle>
        {morgenInHuis && <MorgenInHuisCheck style={styles.topMargin} />}

        <View style={styles.bottomRow}>
          <View style={styles.productAmountContainer}>
            <AddSubtractInput
              initialvalue={productAmount.toString()}
              style={styles.productAmount}
              styleInput={styles.productAmountInput}
              onChangeText={(text) => setProductAmount(text)}
              textAlign="center"
              onPressAdd={onPressAdd}
              onPressSubtract={onPressSubtract}
              onPressAdd={() => setProductAmount(productAmount + 1)}
              onPressSubtract={() => {
                if (productAmount > 1) setProductAmount(productAmount - 1);
              }}
            />
            <AppText style={styles.pricePerItem}>
              {formatPrice(price)} p.s.
            </AppText>
          </View>
          <AppTitle style={styles.totalPrice}>
            {formatPrice(price * productAmount)}
          </AppTitle>
        </View>
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // flex: 1,
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
    marginLeft: 4,
    alignSelf: "flex-end",
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
    // justifyContent: "space-between",
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
