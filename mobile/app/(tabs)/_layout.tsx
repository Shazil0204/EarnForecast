import { Tabs } from "expo-router";

const MainLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="companySelection" options={{ title: "Companies" }} />
      <Tabs.Screen name="dataEntry" options={{ title: "Create" }} />
      <Tabs.Screen name="results" options={{ title: "Result" }} />
    </Tabs>
  );
};

export default MainLayout;
