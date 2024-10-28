import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";

const CompanySelection = () => {
  return (
    <View style={styles.container}>
      <Text>CompanySelection</Text>
      <TouchableOpacity onPress={() => router.push("/(tabs)/dataEntry")}>
        <Text>Just Eats</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CompanySelection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
