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
  const [formData, setFormData] = useState<{
    income: number | null;
    km: number | null;
    startTime: number | null;
    endTime: number | null;
  }>({
    income: null,
    km: null,
    startTime: null,
    endTime: null,
  });

  const handleValueChange = (
    field: keyof typeof formData,
    value: number | null
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const getComponents = () => {
    if (companyID === "1") {
      return (
        <>
          <InputKM onValueChange={(value) => handleValueChange("km", value)} />
          <InputTime />
        </>
      );
    } else if (companyID === "2") {
      return (
        <InputIncome
          onValueChange={(value) => handleValueChange("income", value)}
        />
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
      {formData.income !== null && <Text>Income: {formData.income}</Text>}
      {formData.startTime !== null && <Text>Time: {formData.startTime}</Text>}
      {formData.endTime !== null && <Text>Time: {formData.endTime}</Text>}
      {formData.km !== null && <Text>Kilometers: {formData.km}</Text>}
    </View>
  );
};

export default InputConfiguration;
