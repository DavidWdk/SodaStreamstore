import React, { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { ScrollView, View, StyleSheet, Pressable } from "react-native";
import "intl";
import "intl/locale-data/jsonp/en";

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
    console.log("A date has been picked: ", date);
    setStartDate(date);
    hideDatePicker();
  };

  const formatDate = () => {
    const d = startDate;
    // const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
    // const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
    // const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);

    const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
    const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
    const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
    return `${da} ${mo} ${ye}`;
  };

  return (
    <>
      <CustomHeader title="Stap 2: kwantiteit" topPaddingAdjustment />
      <ScrollView style={[styles.container, defaultStyles.screenContainer]}>
        <AppTitle style={defaultStyles.topWhitespaceSmaller}>
          Bezorgkwantiteit
        </AppTitle>

        <SquareSelectionItems
          items={subscriptionQuantityOptions}
          style={defaultStyles.lineWhitespace}
        />

        <AppTitle style={defaultStyles.topWhitespaceSmaller}>
          Startdatum
        </AppTitle>

        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          minimumDate={new Date()}
          value={new Date()}
        />

        <Pressable onPress={showDatepicker}>
          <AppTextInput
            value={formatDate()}
            editable={false}
            onPress={showDatepicker}
            style={styles.textInput}
          />
        </Pressable>

        <AppText
          style={[defaultStyles.textCenter, defaultStyles.topWhitespaceSmaller]}
        >
          Het abonnement zal elke twee maanden automatisch worden geincasseerd
          voor €23,99. We sturen een herinnering voor elke bezorging zodat je
          genoeg tijd hebt je bestelling aan te passen of te annuleren.
        </AppText>

        <AppButton
          title="Ga naar het afrekenen"
          icon="chevron-right"
          style={styles.nextButton}
        />
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {},
  nextButton: {
    marginVertical: 24,
  },
  textInput: {
    marginTop: 0,
  },
});

export default NewSubSecondStepScreen;
