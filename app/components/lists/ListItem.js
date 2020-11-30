import React from "react";
import { View, StyleSheet, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { AppText } from "../fonts";
import defaultStyles from "../../config/styles";
import AppSwitch from "../AppSwitch";

function ListItem({
  title,
  onPress,
  icon,
  textColor = "black",
  itemKind = "flat",
  designationScreen,
}) {
  const navigation = useNavigation();

  if (itemKind === "flat") {
    return (
      <TouchableHighlight
        onPress={() => navigation.navigate(designationScreen)}
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
            <AppText
              style={[
                defaultStyles.text,
                { color: defaultStyles.colors[textColor] },
              ]}
            >
              {title}
            </AppText>
          </View>
        </View>
      </TouchableHighlight>
    );
  } else if (itemKind === "switch") {
    return (
      <View style={[styles.container, styles.switchContainer]}>
        <AppSwitch title={title} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 16,
    height: 55,
    backgroundColor: defaultStyles.colors.white,
    alignItems: "center",
  },
  icon: {
    paddingRight: 8,
  },
  switchContainer: {
    paddingHorizontal: 16,
    backgroundColor: defaultStyles.colors.white,
    justifyContent: "space-between",
  },
});

export default ListItem;
