import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import i18n from "i18n-js";

import { AppText, AppTitle } from "../fonts";
import defaultStyles from "../../config/styles";
import AddSubtractInput from "../AddSubtractInput";

function SubscriptionListItem({
  item,
  onDelete,
  initialvalue,
  onPressAdd,
  onPressSubtract,
  addItemBlock = false,
}) {
  const navigation = useNavigation();

  ////////////////////
  // ADD ITEM BLOCK //
  ////////////////////
  if (addItemBlock) {
    return (
      <TouchableOpacity
        style={[styles.productContainer, styles.addItemBlock]}
        onPress={() =>
          navigation.navigate("NewSubscriptionFirstStep", { addItem: true })
        }
      >
        <AntDesign
          name="pluscircleo"
          color={defaultStyles.colors.lightBlue}
          size={80}
        />
        <AppText bold style={[defaultStyles.textCenter, styles.addItemText]}>
          {i18n.t("addProdToSub")}
        </AppText>
      </TouchableOpacity>
    );
  }

  ///////////////////////////////////////
  // REGULAR MANAGE SUBSCRIPTION BLOCK //
  ///////////////////////////////////////
  return (
    <Pressable
      style={styles.productContainer}
      onPress={() => console.log(item.label)}
    >
      <TouchableOpacity style={styles.delete} onPress={onDelete}>
        <AntDesign name="close" size={25} />
      </TouchableOpacity>

      <Image source={{ uri: item.image }} style={styles.image} />

      <AppTitle numberOfLines={2} style={styles.label}>
        {item.label}
      </AppTitle>

      <View style={styles.manageItem}>
        <AddSubtractInput
          initialvalue={initialvalue}
          onPressAdd={onPressAdd}
          onPressSubtract={onPressSubtract}
          textAlign="center"
          style={styles.productAmount}
          styleInput={styles.productAmountInput}
        />
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  addItemBlock: {
    justifyContent: "center",
    alignItems: "center",
  },
  addItemText: {
    marginTop: 12,
    color: defaultStyles.colors.lightBlue,
  },
  amount: {
    margin: -4,
    marginVertical: -8,
    alignSelf: "center",
  },
  container: {},
  delete: {
    position: "absolute",
    top: 8,
    left: 8,
    zIndex: 1,
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginTop: 8,
  },
  inputAmth: {},
  label: {
    textAlign: "center",
    paddingBottom: 4,
    paddingTop: 8,
  },
  manageItem: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
  },
  productAmount: {
    width: 65,
  },
  productAmountInput: {
    paddingVertical: 2,
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
    elevation: 100,
    padding: 8,
  },
});

export default SubscriptionListItem;
