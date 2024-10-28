import { isIOS } from "../utils/platformUtil";

export const fontFamilies = {
  PLAYWRITE: {
    extraLight: isIOS() ? "PlaywriteGBSExtraLight" : "PlaywriteGBSExtraLight",
    italic: isIOS() ? "PlaywriteGBSItalic" : "PlaywriteGBSItalic",
    regular: isIOS() ? "PlaywriteGBSRegular" : "PlaywriteGBSRegular",
    thin: isIOS() ? "PlaywriteGBSThin" : "PlaywriteGBSThin",
  },
};
