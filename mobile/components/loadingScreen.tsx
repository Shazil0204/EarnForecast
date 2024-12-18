import React from "react";
import { View, Text, StyleSheet } from "react-native";

const LoadingScreen = () => (
  <View style={styles.loadingContainer}>
    <Text>Loading...</Text>
  </View>
);

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#193940",
  },
});

export default LoadingScreen;
