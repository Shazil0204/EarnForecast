import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { getFontFamily } from "../../constants/fontFamily";
import useFonts from "../../hooks/useFonts";

const Logo = () => {
  const fontsLoaded = useFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>EarnForecast</Text>
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  container: { paddingTop: 10 },
  logoText: {
    textAlign: "center",
    fontSize: 30,
    color: "#fff",
    fontFamily: getFontFamily(true, "extraLight"),
  },
});
