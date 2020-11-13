import React from "react";
import { View, StyleSheet, Pressable, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../../config/styles";
import { AppTitle, AppText } from "../fonts";
import ButtonOutline from "../ButtonOutline";

function AddSubscriptionItem({
  onPress,
  onPressSecondary,
  buttonId,
  redButtonId,
  item,
  amounth = 0,
}) {
  return (
    <Pressable
      style={styles.productContainer}
      onPress={() => console.log(item.label)}
    >
      {amounth > 0 && (
        <View style={styles.amounth}>
          <AppText bold style={styles.amounthText}>
            {amounth}
          </AppText>
        </View>
      )}

      <Image source={{ uri: item.image }} style={styles.image} />
      <AppTitle numberOfLines={2} style={styles.label}>
        {item.label}
      </AppTitle>
      <View style={styles.manageItem}>
        {amounth > 0 && (
          <ButtonOutline
            title={"- 1"}
            style={styles.subtractBtn}
            textColor={"red"}
            onPress={onPressSecondary}
            bold
            key={redButtonId}
          />
        )}

        <ButtonOutline
          title={`+ €${item.price}`}
          style={styles.button}
          textColor={"lightBlue"}
          onPress={onPress}
          bold
          key={buttonId}
        />
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  amounth: {
    position: "absolute",
    top: 8,
    left: 8,
    zIndex: 1,
    backgroundColor: defaultStyles.colors.lightBlue,
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  amounthText: {
    color: defaultStyles.colors.white,
    padding: 2,
  },
  button: {
    borderColor: defaultStyles.colors.lightBlue,
    padding: -4,
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginTop: 8,
  },
  label: {
    textAlign: "center",
    paddingBottom: 4,
    paddingTop: 8,
    fontSize: 16,
  },
  manageItem: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 4,
  },
  productContainer: {
    borderColor: defaultStyles.colors.lightGrey,
    width: "48%",
    marginBottom: 16,
    backgroundColor: defaultStyles.colors.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 8,
  },
  subtractBtn: {
    // backgroundColor: defaultStyles.colors.red,
    borderColor: defaultStyles.colors.red,
    marginRight: 4,
  },
});

export default AddSubscriptionItem;
