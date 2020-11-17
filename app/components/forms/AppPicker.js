import React from "react";
import { View, StyleSheet } from "react-native";
import { useFormikContext } from "formik";

import defaultStyles from "../../config/styles";
import RNPickerSelect from "react-native-picker-select";
import ErrorMessage from "./ErrorMessage";
import { AppText } from "../fonts";
import { typeOf } from "react-is";

const Dropdown = ({ label, selection, placeholder, required, name }) => {
  const { handleChange, errors, touched } = useFormikContext();

  return (
    <>
      <AppText bold={true} style={styles.label}>
        {label}
        {required && (
          <AppText bold={true} style={styles.required}>
            {" "}
            *
          </AppText>
        )}
      </AppText>
      <View style={styles.container}>
        <RNPickerSelect
          placeholder={{
            label: placeholder,
            value: null,
            color: "black",
          }}
          onValueChange={handleChange(name)}
          // onValueChange={(value) => console.log(typeof value)}
          useNativeAndroidPickerStyle={false}
          fixAndroidTouchableBug
          style={{
            inputAndroid: {
              color: "black",
            },
          }}
          itemStyle={styles.pickerItem}
          items={selection}
        />
      </View>
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 12,
    paddingVertical: 14,
    backgroundColor: defaultStyles.colors.white,
    borderWidth: 1,
    borderColor: defaultStyles.colors.grey,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
    marginTop: 16,
  },
  required: {
    color: "red",
  },
});

export default Dropdown;
