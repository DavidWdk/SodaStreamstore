import React from "react";
import { View, StyleSheet, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { AppText } from "../fonts";
import defaultStyles from "../../config/styles";

function ListItem({ title, onPress, icon }) {
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={defaultStyles.colors.lightGrey}
    >
      <View style={styles.container}>
        {icon && (
          <MaterialCommunityIcons
            name={icon}
            size={26}
            color={defaultStyles.colors.darkBlue}
            style={styles.icon}
          />
        )}
        <View>
          <AppText style={defaultStyles.text}>{title}</AppText>
        </View>
      </View>
    </TouchableHighlight>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 16,
    backgroundColor: defaultStyles.colors.white,
    alignItems: "center",
  },
  icon: {
    paddingRight: 8,
  },
});

export default ListItem;
