import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import Screen from "../../components/screenStyling/Screen";
import CustomHeader from "../../components/CustomHeader";
import defaultstyles from "../../config/styles";
import { AppTitle, AppText } from "../../components/fonts";

const nextDelivery = "27 oktober 2020";
const items = [
  "2 pack ruilcilinders",
  "Fruit Drops Mango",
  "2 pack reiniginstabletten",
];
const loyaltyPoints = 20;
const price = "53,22";

function MySubscriptionsScreen(props) {
  const navigation = useNavigation();

  return (
    <Screen>
      <CustomHeader
        style={defaultstyles.screenContainer}
        title="Mijn abonnement"
      />
      <TouchableOpacity
        underlayColor={defaultstyles.colors.lightestGrey}
        style={styles.container}
        onPress={() => navigation.navigate("")}
      >
        <View>
          <View style={styles.subscriptionHeader}>
            <AppTitle>Per twee maanden </AppTitle>
            <AppTitle thin style={styles.price}>
              €{price}
            </AppTitle>
          </View>
          <AppText>Volgende bezorging: {nextDelivery}</AppText>
          {items.map((item) => (
            <AppText thin>{item}</AppText>
          ))}
        </View>
        <View style={styles.rightSide}>
          <MaterialCommunityIcons
            color={defaultstyles.colors.grey}
            name="chevron-right"
            size={25}
            style={{ alignSelf: "center" }}
          />
          <AppText></AppText>
        </View>
      </TouchableOpacity>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 12,
    paddingRight: 12,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: defaultstyles.colors.lightestGrey,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rightSide: {
    flexDirection: "row",
    height: "100%",
  },
  subscriptionHeader: {
    flexDirection: "row",
    marginBottom: 4,
  },
});

export default MySubscriptionsScreen;
