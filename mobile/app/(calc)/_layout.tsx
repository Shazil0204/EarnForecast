import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons

const CalcLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { backgroundColor: "#193940" },
        tabBarActiveTintColor: "#FFFFFF",
      }}
    >
      <Tabs.Screen
        name="calculation"
        options={{
          title: "Calculation",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="calculator" size={24} color={color} /> // Add icon here
          ),
        }}
      />
    </Tabs>
  );
};

export default CalcLayout;
