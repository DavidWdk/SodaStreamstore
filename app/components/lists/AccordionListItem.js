import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  StyleSheet,
  Pressable,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../../config/styles";
import { AppText } from "../fonts";

function AccordionListItem({
  title,
  childrenItems,
  destinationScreen = "ProductOverview",
  payload,
}) {
  if (Platform.OS === "android") {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  const navigation = useNavigation();

  const handlePress = () => {
    //Change onPress based on childrenItems
    if (childrenItems) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setExpanded(!expanded);
    } else if (!childrenItems) {
      navigation.navigate(destinationScreen);
    }
  };

  const [expanded, setExpanded] = useState(false);

  return (
    <View>
      <Pressable style={styles.row} onPress={() => handlePress()}>
        <AppText>{title}</AppText>

        {childrenItems && (
          <MaterialCommunityIcons
            name={expanded ? "chevron-up" : "chevron-down"}
            size={20}
            color={defaultStyles.colors.grey}
          />
        )}
      </Pressable>
      <View style={styles.itemSeperator} />
      {expanded &&
        childrenItems.map((child, index) => (
          <>
            <Pressable
              style={[styles.childRow, styles.row]}
              key={index}
              onPress={() => {
                if (child.payload) {
                  navigation.navigate(destinationScreen, child.payload);
                } else {
                  navigation.navigate(destinationScreen);
                }
              }}
            >
              <AppText>{child.title}</AppText>
            </Pressable>
            <View style={styles.childItemSeperator} />
          </>
        ))}
    </View>
  );
}
const styles = StyleSheet.create({
  row: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemSeperator: {
    height: 1,
    backgroundColor: defaultStyles.colors.lightestGrey,
    marginLeft: 16,
  },
  childRow: {
    paddingLeft: 24,
  },
  childItemSeperator: {
    height: 1,
    backgroundColor: defaultStyles.colors.lightestGrey,
    marginLeft: 24,
    zIndex: 22,
  },
});

export default AccordionListItem;
