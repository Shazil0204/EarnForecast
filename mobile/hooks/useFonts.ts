// src/utils/useFonts.ts
import { useEffect, useState } from "react";
import * as Font from "expo-font";

const loadFonts = async () => {
  await Font.loadAsync({
    PlaywriteGBSThin: require("../assets/fonts/PlaywriteGBSThin.ttf"),
    PlaywriteGBSRegular: require("../assets/fonts/PlaywriteGBSRegular.ttf"),
    PlaywriteGBSItalic: require("../assets/fonts/PlaywriteGBSItalic.ttf"),
    PlaywriteGBSExtraLight: require("../assets/fonts/PlaywriteGBSExtraLight.ttf"),
    PlayfairDisplayBlack: require("../assets/fonts/PlayfairDisplayBlack.ttf"),
    PlayfairDisplayItalic: require("../assets/fonts/PlayfairDisplayItalic.ttf"),
    PlayfairDisplayRegular: require("../assets/fonts/PlayfairDisplayRegular.ttf"),
  });
};

const useFonts = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadFonts().then(() => setFontsLoaded(true));
  }, []);

  return fontsLoaded;
};

export default useFonts;
