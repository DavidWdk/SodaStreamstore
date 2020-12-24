import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Pressable,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { AppText } from "./fonts";
import defaultStyles from "../config/styles";
import AppSlider from "../components/AppSlider";
import AsyncStorage from "@react-native-async-storage/async-storage";

import SecondaryButton from "../components/SecondaryButton";
import { useNavigation } from "@react-navigation/native";

import i18n from "i18n-js";

function GlasCounter(props) {
  const saveSettings = async (value) => {
    let settingsObj = { volume: glassVolume, target: hydrationTarget };
    try {
      const jsonValue = JSON.stringify(settingsObj);
      await AsyncStorage.setItem("settings", jsonValue);
    } catch (error) {
      console.log("error saving data", error);
    }
  };

  const getSettings = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("settings");
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      console.log("error getting data", error);
    }
  };

  const applySettings = async () => {
    // return await getSettings();
    let settings = await getSettings();
    setGlassVolume(settings.volume);
    setHydrationTarget(settings.target);
    // console.log(settings);
  };

  const navigation = useNavigation();
  const [glasses, setGlasses] = useState([]);
  // const [containerWidth, setContainerWidth] = useState();
  const [progress, setProgress] = useState(0);
  const [glassVolume, setGlassVolume] = useState(0.25);
  const [hydrationTarget, setHydrationTarget] = useState(2.5);
  const [expanded, setExpanded] = useState(false);

  // const ratio = 78 / 50;
  // const width = containerWidth / 12;
  // let today = new Date();

  if (Platform.OS === "android") {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  useEffect(() => {
    applySettings();
    let progress = getProgressAsync();
    console.log("PROGRESS", progress.glassProgress);
    setGlasses(progress);
    // applyProgressAsync();
  }, []);

  const fullGlass = () => (
    <Image
      source={require("../../assets/glass.png")}
      style={[
        styles.glass,
        {
          width: 32,
          height: 50,
          marginHorizontal: 5.33,
        },
      ]}
      resizeMode="contain"
    />
  );

  const emptyGlass = () => (
    <Image
      source={require("../../assets/emptyGlass.png")}
      style={[
        styles.glass,
        {
          width: 32,
          height: 50,
          marginHorizontal: 5.33,
        },
      ]}
      resizeMode="contain"
    />
  );

  const initiateTarget = () => {
    setGlasses([]);
    let targetGlasses = Math.ceil(hydrationTarget / glassVolume);
    for (let i = 0; i < targetGlasses; i++) {
      setGlasses((prevArray) => [...prevArray, { full: false }]);
    }
  };

  const changeFullState = (index) => {
    if (glasses[index].full === true) {
      glasses[index].full = false;
      let l = glasses.length - 1;
      for (let i = l; i >= index; i--) {
        glasses[i].full = false;
      }
    } else {
      for (let i = 0; i <= index; i++) {
        glasses[i].full = true;
      }
    }
    let filledGlasses = 0;
    for (const i in glasses) {
      if (glasses[i].full == true) {
        filledGlasses = filledGlasses + 1;
      }
    }
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setProgress((filledGlasses / glasses.length) * 100);
    setGlasses((prevArray) => [...prevArray]);
    saveProgressAsync();
  };

  const saveProgressAsync = async () => {
    let settingsObj = { glassProgress: glasses };
    try {
      const jsonValue = JSON.stringify(settingsObj);
      await AsyncStorage.setItem("glasses", jsonValue);
    } catch (error) {
      console.log("error saving glasses", error);
    }
  };

  const getProgressAsync = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("glasses");
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      console.log("error getting glasses", error);
    }
  };

  const applyProgressAsync = async () => {
    let progress = await getProgressAsync();
    progress = progress.glassProgress;
    console.log(progress);
    setGlasses(progress.glassProgress);
    // return progress;
  };

  const expandSettingsPanel = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded((previousState) => !previousState);
  };

  const changeVolume = (volume) => {
    setGlassVolume(Math.round(volume * 100) / 100);
  };

  const changeTarget = (volume) => {
    setHydrationTarget(Math.round(volume * 100) / 100);
  };

  useEffect(() => {
    initiateTarget();
    saveSettings();
  }, [glassVolume, hydrationTarget]);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.whitespace}>
          <View style={styles.titleHorizontal}>
            <AppText thin style={defaultStyles.subtitle}>
              {i18n.t("statistics")}
            </AppText>

            <Pressable onPress={expandSettingsPanel}>
              <Feather name="settings" size={20} color="black" />
            </Pressable>
          </View>
          <View
            style={styles.glassesContainer}
            // onLayout={(event) => {
            //   setContainerWidth(event.nativeEvent.layout.width);
            // }}
          >
            {glasses.map((glass, index) => (
              <Pressable
                style={styles.singleGlassContainer}
                key={index}
                onPress={() => changeFullState(index)}
              >
                {glass.full ? fullGlass() : emptyGlass()}
              </Pressable>
            ))}
          </View>
        </View>

        <View style={[styles.settingsPanel, { height: expanded ? null : 0 }]}>
          <View style={[defaultStyles.blueSection, styles.description]}>
            <AppText>{i18n.t("glassCounterNote")}</AppText>
            <SecondaryButton
              title={i18n.t("readMoreBtn")}
              onPress={() => navigation.navigate("WhyWater")}
            />
          </View>

          <View style={styles.whitespace}>
            <AppText
              thin
              style={[
                defaultStyles.subtitle,
                defaultStyles.textCenter,
                defaultStyles.topWhitespaceSmaller,
              ]}
            >
              {i18n.t("volGlass")}
            </AppText>
            <AppSlider
              minimum={0.2}
              maximum={1}
              step={0.05}
              unit="liter"
              initialValue={glassVolume}
              data={{ volume: glassVolume, changeVolume: changeVolume }}
            />

            <AppText
              thin
              style={[
                defaultStyles.subtitle,
                defaultStyles.textCenter,
                defaultStyles.topWhitespaceSmaller,
              ]}
            >
              {i18n.t("dailyTarget")}
            </AppText>
            <AppSlider
              minimum={0}
              maximum={4.5}
              step={0.5}
              unit="liter"
              initialValue={hydrationTarget}
              data={{ volume: hydrationTarget, changeVolume: changeTarget }}
            />
          </View>
        </View>
        <View style={[styles.progressBar, { width: `${progress}%` }]}></View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    backgroundColor: defaultStyles.colors.white,
    paddingTop: 16,
    paddingBottom: 0,
    elevation: 8,
    shadowColor: defaultStyles.colors.black,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 6,
    shadowOpacity: 0.15,
    zIndex: -5,
    position: "relative",
  },
  description: {
    marginTop: 24,
    paddingHorizontal: 13,
  },
  glassesContainer: {
    flexDirection: "row",
    paddingTop: 1,
    flexWrap: "wrap",
  },
  glass: {
    marginTop: 4,
  },
  progressBar: {
    backgroundColor: defaultStyles.colors.darkBlue,
    height: 4,
    bottom: 0,
    width: 100,
    elevation: 100,
    marginTop: 16,
  },
  settingsPanel: {
    overflow: "hidden",
  },
  titleHorizontal: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 8,
  },
  whitespace: {
    paddingHorizontal: 14,
  },
});

export default GlasCounter;
