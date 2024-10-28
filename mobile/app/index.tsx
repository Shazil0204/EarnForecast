import { StyleSheet, StatusBar, View } from "react-native";
import { useEffect } from "react";
import CompanySelection from "./(tabs)/companySelection";
import Header from "../components/headerComponents/header";

const Index = () => {
  useEffect(() => {
    // Set the status bar style and background color
    StatusBar.setBarStyle("light-content"); // Change to light for better contrast with dark background
    StatusBar.setBackgroundColor("#193940"); // Set background color
  }, []);

  return (
    <>
      <Header />
      <View style={styles.container}>
        <CompanySelection />
      </View>
    </>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#193940",
    paddingTop: 20,
    paddingHorizontal: 20,
  },
});
