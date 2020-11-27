import React, { useState } from "react";
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

function AccordionListItem({ title, childrenItems }) {
  if (Platform.OS === "android") {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  //Make children automatically recognizable and set childrenItems
  const recognizeChildren = () => {};

  const [expanded, setExpanded] = useState(false);

  //TODO: De uiteindelijke lijst map je, met children als deze in het object meegegegeven worden
  return (
    <View>
      <Pressable style={styles.row} onPress={() => toggleExpand()}>
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
              onPress={child.onPress}
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
