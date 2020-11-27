import React, { useState } from "react";
import { View, StyleSheet, Pressable } from "react-native";

import defaultStyles from "../config/styles";
import { AppText, AppTitle } from "./fonts";

function SquareSelectionItems({ style, items }) {
  const [active, setActive] = useState(0);

  return (
    <View style={[styles.container, style]}>
      {items.map((item, index) => (
        <Pressable
          style={index == active ? styles.selectableActive : styles.selectable}
          onPress={() => setActive(index)}
          key={index}
        >
          <AppTitle
            style={[
              defaultStyles.textCenter,
              index == active ? styles.textItemsActive : styles.textItems,
            ]}
          >
            {item.title}
          </AppTitle>

          {item.subTitle && (
            <AppText thin style={defaultStyles.textCenter}>
              {item.subTitle}
            </AppText>
          )}
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  selectable: {
    borderColor: defaultStyles.colors.grey,
    borderWidth: 1,
    backgroundColor: defaultStyles.colors.white,
    width: "32%",
    padding: 12,
    paddingHorizontal: 4,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
  },
  selectableActive: {
    borderColor: defaultStyles.colors.darkBlue,
    borderWidth: 1,
    backgroundColor: defaultStyles.colors.darkerBackground,
    width: "32%",
    padding: 12,
    paddingHorizontal: 4,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
  },
  textItems: {
    fontSize: 16,
  },
  textItemsActive: {
    fontSize: 16,
    color: defaultStyles.colors.darkBlue,
  },
});

export default SquareSelectionItems;
