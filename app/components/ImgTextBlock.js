import React from "react";
import { View, StyleSheet, Image } from "react-native";

import { AppText, AppTitle } from "./fonts";
import defaultStyles from "../config/styles";

function ImgTextBlock({
  image = "https://miro.medium.com/max/800/1*5Rf3FyexG1GziXARphY3wg.png",
  title,
  children,
  style,
  blueBackground = false,
}) {
  if (!blueBackground) {
    return (
      <View style={defaultStyles.screenContainer}>
        <Image source={{ uri: image }} style={styles.image} />
        <AppTitle
          style={[defaultStyles.textCenter, defaultStyles.lineWhitespace]}
        >
          {title}
        </AppTitle>

        <View style={[styles.textSection]}>
          <AppText style={[defaultStyles.textCenter, defaultStyles.subtitle]}>
            {children}
          </AppText>
        </View>
      </View>
    );
  } else {
    return (
      <View
        style={[
          defaultStyles.blueSection,
          defaultStyles.screenContainer,
          style,
        ]}
      >
        <Image source={{ uri: image }} style={styles.image} />
        <AppTitle
          style={[defaultStyles.textCenter, defaultStyles.lineWhitespace]}
        >
          {title}
        </AppTitle>

        <View style={[styles.textSection, style]}>
          <AppText style={[defaultStyles.textCenter, defaultStyles.subtitle]}>
            {children}
          </AppText>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    alignSelf: "center",
    marginTop: 16,
    marginBottom: 16,
    width: 150,
    height: 150,
    backgroundColor: defaultStyles.colors.transparant,
  },
  leftBlock: {
    borderLeftWidth: 4,
    borderColor: defaultStyles.colors.lightBlue,
  },
  lineSpacing: {
    marginTop: 4,
  },
  textSection: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: 24,

    // flexDirection: "row",
    // marginVertical: 8,
  },
  title: {
    fontSize: 20,
  },
  rightBlock: {
    borderRightWidth: 4,
    borderColor: defaultStyles.colors.lightBlue,
  },
  rightAlign: {
    textAlign: "right",
  },
});

export default ImgTextBlock;
