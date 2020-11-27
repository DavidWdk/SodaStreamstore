import React, { useState } from "react";
import { View, StyleSheet, Pressable, Image } from "react-native";

import defaultStyles from "../config/styles";
import { AppText } from "./fonts";

function MultipleChoiceSelection({ style, options }) {
  const [active, setActive] = useState(0);

  return (
    <View style={[styles.container, style]}>
      {options.map((option, index) => (
        <Pressable
          style={
            index == active
              ? [styles.selectableActive, styles.selectable]
              : [styles.selectableInactive, styles.selectable]
          }
          onPress={() => setActive(index)}
          key={index}
        >
          {option.image && (
            <View>
              <Image source={{ uri: option.image }} style={styles.image} />
            </View>
          )}

          <View style={styles.textDetails}>
            <AppText
              bold
              style={styles.title}
              style={
                index == active
                  ? [styles.title, styles.selectedText]
                  : styles.title
              }
            >
              {option.title}
            </AppText>

            {option.name && (
              <AppText
                thin
                style={
                  index == active ? styles.selectedText : styles.nonSelectedText
                }
              >
                {option.name}
              </AppText>
            )}

            {option.streetname && (
              <AppText
                thin
                style={
                  index == active ? styles.selectedText : styles.nonSelectedText
                }
              >
                {option.streetname}
              </AppText>
            )}

            {option.address && (
              <AppText
                thin
                style={
                  index == active ? styles.selectedText : styles.nonSelectedText
                }
              >
                {option.address}
              </AppText>
            )}
          </View>
        </Pressable>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
  nonSelectedText: {
    color: defaultStyles.colors.black,
  },
  image: {
    height: 24,
    aspectRatio: 1,
    resizeMode: "contain",
    marginRight: 8,
  },
  selectable: {
    width: "100%",
    borderLeftWidth: 3,
    padding: 12,
    paddingLeft: 16,
    marginTop: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  selectableActive: {
    backgroundColor: defaultStyles.colors.blueSelectedBackground,
    borderColor: defaultStyles.colors.darkBlue,
  },
  selectableInactive: {
    borderColor: defaultStyles.colors.grey,
    backgroundColor: defaultStyles.colors.greyBackground,
  },
  selectedText: {
    color: defaultStyles.colors.darkBlue,
  },
});

export default MultipleChoiceSelection;
