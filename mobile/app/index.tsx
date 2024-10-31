import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { useEffect } from "react";
import { router } from "expo-router";
import useFonts from "../hooks/useFonts";
import { getFontFamily } from "../constants/fontFamily";
import LoadingScreen from "../components/reuseableComponents/loadingScreen";

const Index = () => {
  useEffect(() => {
    StatusBar.setBarStyle("light-content");
    StatusBar.setBackgroundColor("#193940");
  }, []);

  const fontsLoaded = useFonts();

  if (!fontsLoaded) {
    return <LoadingScreen />;
  }

  return (
    <>
      {/* <Header /> */}
      <View style={styles.container}>
        <Text style={[styles.text, styles.textTop]}>
          Welcome to{"\n"}
          <Text style={styles.mainName}>EarnForecast</Text>
        </Text>
        <TouchableOpacity
          style={{ width: "80%" }}
          onPress={() => router.push({ pathname: "/(tabs)/companySelection" })}
        >
          <Text style={[styles.text, styles.textMain, styles.button]}>
            Let's Continue
          </Text>
        </TouchableOpacity>
        <Text style={[styles.text, styles.textBottom]}>
          See your future in Present!
        </Text>
      </View>
    </>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#193940",
    gap: 20,
    paddingHorizontal: 20,
  },
  text: {
    color: "#fff",
  },
  textTop: {
    fontSize: 25,
    position: "absolute",
    top: 50,
  },
  mainName: {
    fontSize: 50,
    fontFamily: getFontFamily(true, "regular"),
  },
  textBottom: {
    fontSize: 25,
    position: "absolute",
    bottom: 50,
    fontFamily: getFontFamily(true, "extraLight"),
  },
  textMain: {
    textAlign: "center",
  },
  button: {
    backgroundColor: "#191919",
    padding: 30,
    borderRadius: 25,
    fontSize: 25,
    fontFamily: getFontFamily(true, "italic"),
  },
});
