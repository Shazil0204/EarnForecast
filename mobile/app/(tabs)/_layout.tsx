import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { View, StyleSheet } from "react-native";

const MainLayout = () => {
  return (
    <View style={styles.container}>
      <Tabs
        screenOptions={{
          tabBarStyle: { backgroundColor: "#193940" },
          tabBarActiveTintColor: "#FFFFFF",
        }}
      >
        <Tabs.Screen
          name="companySelection"
          options={{
            title: "Companies",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Ionicons name="business" size={24} color={color} /> // Icon for Company Selection
            ),
          }}
        />
        <Tabs.Screen
          name="results"
          options={{
            title: "Result",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Ionicons name="checkmark-circle" size={24} color={color} /> // Icon for Result
            ),
          }}
        />
      </Tabs>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#193940",
  },
});

export default MainLayout;
