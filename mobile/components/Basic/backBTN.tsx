import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

interface BackProp {
  folderName: string;
  componentName: string;
}

const BackBTN: React.FC<BackProp> = ({ folderName, componentName }) => {
  const sendBack = (folderName: string, componentName: string) => {
    router.push(`/(${folderName})/${componentName}`);
  };

  return (
    <View style={{ position: "absolute", top: 10, left: 10, zIndex: 1 }}>
      <TouchableOpacity onPress={() => sendBack(folderName, componentName)}>
        <Ionicons name="caret-back" size={50} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default BackBTN;
