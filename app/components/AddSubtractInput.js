import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import AppTextInput from "./AppTextInput";
import defaulStyles from "../config/styles";
import { AppText } from "./fonts";

function AddSubtractInput({ initialvalue, onPressAdd, onPressSubtract }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.subtract, styles.btn]}
        onPress={onPressSubtract}
      >
        <FontAwesome5 style={styles.btnContent} name="minus" />
      </TouchableOpacity>
      <AppTextInput
        style={styles.input}
        defaultValue={initialvalue}
        keyboardType="numeric"
      />
      <TouchableOpacity style={[styles.add, styles.btn]} onPress={onPressAdd}>
        <FontAwesome5 name="plus" style={styles.btnContent} />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  btn: {
    justifyContent: "center",
  },
  btnContent: {
    color: defaulStyles.colors.grey,
    alignSelf: "center",
    width: 20,
    textAlign: "center",
    paddingHorizontal: 5,
  },
  container: {
    flexDirection: "row",
    width: "50%",
    justifyContent: "center",
  },
  input: {
    flex: 1,
    borderWidth: 0,
    justifyContent: "center",
    borderBottomWidth: 2,
    paddingVertical: 4,
    borderColor: defaulStyles.colors.lightGrey,
  },
});

export default AddSubtractInput;
