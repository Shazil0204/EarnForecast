import { isIOS } from "../utils/platformUtil";

export const fontFamilies = {
  PLAYWRITE: {
    extraLight: isIOS() ? "PlaywriteGBSExtraLight" : "PlaywriteGBSExtraLight",
    regular: isIOS() ? "PlaywriteGBSRegular" : "PlaywriteGBSRegular",
    italic: isIOS() ? "PlaywriteGBSItalic" : "PlaywriteGBSItalic",
    thin: isIOS() ? "PlaywriteGBSThin" : "PlaywriteGBSThin",
    PlayBlack: isIOS() ? "PlayfairDisplayBlack" : "PlayfairDisplayBlack",
    PlayItalic: isIOS() ? "PlayfairDisplayItalic" : "PlayfairDisplayItalic",
    PlayRegular: isIOS() ? "PlayfairDisplayRegular" : "PlayfairDisplayRegular",
  },
};
