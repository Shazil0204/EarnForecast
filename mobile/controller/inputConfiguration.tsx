import { View, Text } from "react-native";
import { DynamicComponent } from "../components/view/dynamicComponent";
import InputIncome from "../components/Field/inputIncome";
import InputKM from "../components/Field/inputKM";
import InputTime from "../components/Field/inputTime";

interface InputConfigurationParams {
  companyName: string | string[];
  companyID: string | string[];
}

const InputConfiguration: React.FC<InputConfigurationParams> = ({
  companyName,
  companyID,
}) => {
  const getComponents = () => {
    if (companyID === "1") {
      return [
        <>
          <InputKM />
          <InputTime />
        </>,
      ];
    } else if (companyID === "2") {
      return [
        <>
          <InputIncome />
        </>,
      ];
    }
    return [];
  };

  return (
    <View>
      <DynamicComponent name={companyName} components={getComponents()} />
    </View>
  );
};

export default InputConfiguration;
