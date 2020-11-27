import React from "react";
import { View, StyleSheet, Image } from "react-native";
import defaultStyles from "../../config/styles";
import ButtonOutline from "../ButtonOutline";

import { AppTitle, AppText } from "../fonts";

//FIXME: Werkt niet goed op Android
function EmptyShoppingCart(props) {
  return (
    <View style={[styles.container, defaultStyles.screenContainer]}>
      <View style={styles.verticalAlign}>
        <Image
          source={{ uri: "https://via.placeholder.com/200" }}
          styles={styles.image}
        />
        <AppTitle style={defaultStyles.textCenter}>
          Je winkelwagen is leeg
        </AppTitle>
        <AppText style={styles.text}>
          Zoek door ons assortiment {"\n"}
          óf doe een herhaalaankoop
        </AppText>

        <ButtonOutline title="Doe een herhaalaankoop" icon="repeat" />
        <ButtonOutline title="Zoek naar een product" icon="magnify" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
    backgroundColor: defaultStyles.colors.white,
    flexGrow: 1,
  },
  image: {
    width: 200,
    aspectRatio: 1,
    marginBottom: 16,
  },
  verticalAlign: {
    alignItems: "center",
  },
});

export default EmptyShoppingCart;
