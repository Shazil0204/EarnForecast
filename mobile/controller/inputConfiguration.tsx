import { View, Text } from "react-native";

interface InputConfigurationParams {
  companyID?: number | null;
}

const InputConfiguration: React.FC<InputConfigurationParams> = ({
  companyID,
}) => {
  console.log(companyID);

  return (
    <View>
      <Text>Input Configuration</Text>
      <Text>{companyID}</Text>
    </View>
  );
};

export default InputConfiguration;
