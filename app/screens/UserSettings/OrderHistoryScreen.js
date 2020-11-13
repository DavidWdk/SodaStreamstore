import React from "react";
import { View } from 'react-native';

import SmallProductList from "../../components/lists/SmallProductList";
import defaultStyles from "../../config/styles";
import orderHistory from "../../../assets/placeholderData/orderHistory";
import CustomHeader from "../../components/CustomHeader";
import { AppTitle, AppText } from "../../components/fonts"

function OrderHistoryScreen(props) {
  return (
    <SmallProductList
      data={orderHistory}
      ListEmptyComponent={
        <View style={defaultStyles.center}>
          <AppTitle>
            U heeft nog geen bestellingen gedaan
          </AppTitle>
          <AppText>Bezoek onze winkel om een bestelling te plaatsen</AppText>
        </View>
      }
      ListHeaderComponent={
        <CustomHeader
          style={defaultStyles.screenContainer}
          title="Bestellingen"
        />
      }
    />
  );
}

export default OrderHistoryScreen;
