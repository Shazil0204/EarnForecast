import { View, Text } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";

type DataEntryParams = {
  exampleData: string;
  anotherParam: string;
};

const DataEntryScreen: React.FC = () => {
  const { exampleData, anotherParam } = useLocalSearchParams<DataEntryParams>();

  return (
    <View>
      <Text>{exampleData}</Text>
      <Text>{anotherParam}</Text>
      {/* Render additional components or data as needed */}
    </View>
  );
};

export default DataEntryScreen;
