import { Tabs } from "expo-router";

const MainLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="companySelection"
        options={{ title: "Companies", headerShown: false }}
      />
      <Tabs.Screen
        name="dataEntry"
        options={{ title: "Create", headerShown: false }}
      />
      <Tabs.Screen
        name="results"
        options={{ title: "Result", headerShown: false }}
      />
    </Tabs>
  );
};

export default MainLayout;
