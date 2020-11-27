import React, { useState } from "react";
import { StyleSheet, Pressable, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../../config/styles";
import { AppText } from "../fonts";

function Checkbox({ title, checked = false }) {
  const [isChecked, setIsChecked] = useState(checked);

  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        if (isChecked) {
          setIsChecked(false);
        } else {
          setIsChecked(true);
        }
      }}
    >
      {isChecked && (
        <View style={[styles.checkedBox, styles.checkBox]}>
          <MaterialCommunityIcons
            name="check"
            size={24}
            color={defaultStyles.colors.white}
          />
        </View>
      )}

      {!isChecked && (
        <View style={[styles.uncheckedBox, styles.checkBox]}></View>
      )}
      <AppText style={styles.title}>{title}</AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 4,
    alignItems: "center",
  },
  checkBox: {
    width: 24,
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
  },
  checkedBox: {
    backgroundColor: defaultStyles.colors.darkBlue,
  },
  title: {
    alignSelf: "center",
    marginLeft: 12,
    flex: 1,
  },
  uncheckedBox: {
    backgroundColor: defaultStyles.colors.white,
    borderWidth: 2,
    borderColor: defaultStyles.colors.lightGrey,
  },
});

export default Checkbox;
