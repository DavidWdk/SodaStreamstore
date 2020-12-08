import React from "react";
import { Pressable, View, StyleSheet, Image } from "react-native";

import defaultStyles from "../../config/styles";
import { AppTitle, AppText } from "../fonts";
import CartButton from "../CartButton";
import MorgenInHuisCheck from "../MorgenInHuisCheck";

function ProductOverviewItem({
  onPress,
  title,
  subText1,
  subText2,
  subText3,
  price,
  image,
  prevPrice,
  nextDayDelivery = true,
}) {
  return (
    <Pressable
      style={[styles.container, defaultStyles.screenContainer]}
      onPress={onPress}
    >
      <Image source={{ uri: image }} style={styles.productImage} />

      <View style={styles.infoContainer}>
        <AppTitle numberOfLines={2}>{title}</AppTitle>

        <View style={styles.subText}>
          <AppText thin numberOfLines={1}>
            {subText1}
          </AppText>
          <AppText thin numberOfLines={1}>
            {subText2}
          </AppText>
          <AppText thin numberOfLines={1}>
            {subText3}
          </AppText>
        </View>

        <View style={styles.bottomDetails}>
          <View style={styles.leftBottom}>
            <View style={styles.priceLine}>
              <AppTitle style={styles.price}>{price}</AppTitle>
              {prevPrice && (
                <AppTitle style={styles.prevPrice}>{prevPrice}</AppTitle>
              )}
            </View>

            {nextDayDelivery && <MorgenInHuisCheck />}
          </View>
          <CartButton />
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  bottomDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    flexDirection: "row",
    marginVertical: 16,
  },
  infoContainer: {
    flex: 1,
  },
  price: {
    marginTop: 4,
    color: defaultStyles.colors.lightBlue,
  },
  priceLine: {
    flexDirection: "row",
  },
  prevPrice: {
    color: defaultStyles.colors.black,
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    marginLeft: 4,
    fontSize: 14,
    marginTop: 4,
  },
  productImage: {
    height: 110,
    width: 110,
    marginRight: 8,
  },
  subText: {
    marginTop: 4,
  },
});

export default ProductOverviewItem;
