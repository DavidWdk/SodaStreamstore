import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import AppTextInput from "./AppTextInput";
import defaulStyles from "../config/styles";
import { AppText } from "./fonts";

function AddSubtractInput({ initialvalue = 1 }) {
  const [value, setValue] = useState(initialvalue);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.subtract, styles.btn]}
        onPress={() => {
          if (value > 1) {
            setValue(value - 1);
          }
        }}
      >
        <FontAwesome5 style={styles.btnContent} name="minus" />
      </TouchableOpacity>
      <AppTextInput
        style={styles.input}
        defaultValue={value.toString()}
        keyboardType="numeric"
      />
      <TouchableOpacity
        style={[styles.add, styles.btn]}
        onPress={() => setValue(value + 1)}
      >
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
