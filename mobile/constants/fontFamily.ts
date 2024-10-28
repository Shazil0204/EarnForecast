import { fontFamilies } from "./fonts";

export const getFontFamily = (
  isLTR: boolean,
  weight: "extraLight" | "italic" | "regular" | "thin" // Update weights as necessary
) => {
  const selectedFontFamily = fontFamilies.PLAYWRITE; // Use your defined font family
  return selectedFontFamily[weight];
};