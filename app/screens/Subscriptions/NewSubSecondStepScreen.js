import React, { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { ScrollView, View, StyleSheet, Pressable } from "react-native";
import "intl";
import "intl/locale-data/jsonp/en";

import i18n from "i18n-js";

import CustomHeader from "../../components/CustomHeader";
import SquareSelectionItems from "../../components/SquareSelectionItems";
import defaultStyles from "../../config/styles";
import subscriptionQuantityOptions from "../../../assets/placeholderData/subscriptionQuantityOptions";
import { AppText, AppTitle } from "../../components/fonts";
import AppButton from "../../components/AppButton";
import AppTextInput from "../../components/AppTextInput";

function NewSubSecondStepScreen(props) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  const showDatepicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setStartDate(date);
    hideDatePicker();
  };

  const formatDate = () => {
    const d = startDate;
    const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
    const mo = new Intl.DateTimeFormat("en", { month: "long" }).format(d);
    const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
    return `${da} ${mo} ${ye}`;
  };

  return (
    <>
      <CustomHeader title={i18n.t("step2")} topPaddingAdjustment />
      <ScrollView style={[styles.container, defaultStyles.screenContainer]}>
        <AppTitle style={defaultStyles.topWhitespaceSmaller}>
          {i18n.t("deliveryFreq")}
        </AppTitle>

        <SquareSelectionItems
          items={subscriptionQuantityOptions}
          style={defaultStyles.lineWhitespace}
        />

        <AppTitle style={defaultStyles.topWhitespaceSmaller}>
          {i18n.t("startDate")}
        </AppTitle>

        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          minimumDate={new Date()}
          value={new Date()}
        />

        <Pressable style={styles.clickableInput} onPress={showDatepicker}>
          <View pointerEvents="none">
            <AppTextInput
              value={formatDate()}
              editable={false}
              style={styles.textInput}
            />
          </View>
        </Pressable>

        <AppText
          style={[defaultStyles.textCenter, defaultStyles.topWhitespaceSmaller]}
        >
          {i18n.t("subscriptionDisclaimer")}
        </AppText>

        <AppButton
          title={i18n.t("buySubscription")}
          icon="chevron-right"
          style={styles.nextButton}
        />
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  clickableInput: {
    zIndex: 100,
  },
  container: {},
  nextButton: {
    marginVertical: 24,
  },
  textInput: {
    marginTop: 0,
  },
});

export default NewSubSecondStepScreen;
