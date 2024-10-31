import React, { useState } from "react";
import { View, Text } from "react-native";
import InputIncome from "../components/Field/inputIncome";
import InputKM from "../components/Field/inputKM";
import InputTime from "../components/Field/inputTime";
import useFonts from "../hooks/useFonts";
import { getFontFamily } from "../constants/fontFamily";
import LoadingScreen from "../components/reuseableComponents/loadingScreen";

interface InputConfigurationParams {
  companyName: string | string[];
  companyID: string | string[];
}

const InputConfiguration: React.FC<InputConfigurationParams> = ({
  companyName,
  companyID,
}) => {
  const [incomeValue, setIncomeValue] = useState<number | null>(null);

  const handleIncomeChange = (value: number) => {
    setIncomeValue(value); // Update the state with the new income value
  };

  const getComponents = () => {
    if (companyID === "1") {
      return (
        <>
          <InputKM key="km" />
          <InputTime key="time" />
        </>
      );
    } else if (companyID === "2") {
      return (
        <>
          <InputIncome key="income" onValueChange={handleIncomeChange} />
        </>
      );
    }
    return null;
  };

  const fontsLoaded = useFonts();

  if (!fontsLoaded) {
    return <LoadingScreen />;
  }

  return (
    <View>
      <Text
        style={{
          fontSize: 50,
          textAlign: "center",
          fontFamily: getFontFamily(true, "PlayBlack"),
        }}
      >
        {companyName}
      </Text>
      {getComponents()}
      {incomeValue !== null && <Text>Income: {incomeValue}</Text>}
    </View>
  );
};

export default InputConfiguration;
