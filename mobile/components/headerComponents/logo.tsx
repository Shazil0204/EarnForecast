import { StyleSheet, Text, View } from "react-native";

const Logo = () => {
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
  },
});
