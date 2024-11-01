import React, { useState } from "react";
import { View, Text } from "react-native";
import InputIncome from "../components/Field/income";
import InputKM from "../components/Field/km";
import InputTime from "../components/Field/time";
import InputDate from "../components/Field/date";
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
    date: Date | null;
    startTime: Date | null;
    endTime: Date | null;
  }>({
    income: null,
    km: null,
    date: null,
    startTime: null,
    endTime: null,
  });

  const handleValueChange = (
    field: keyof typeof formData,
    value: number | Date | null
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
          <InputDate
            onDateChange={(value) => handleValueChange("date", value)}
          />
          <InputTime
            onTimeChange={(value) => handleValueChange("startTime", value)}
            isStartTime={true}
          />
          <InputTime
            onTimeChange={(value) => handleValueChange("endTime", value)}
            isStartTime={false}
          />
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
      {formData.date !== null && (
        <Text>Date: {formData.date.toLocaleDateString()}</Text>
      )}
      {formData.startTime !== null && (
        <Text>Time: {formData.startTime.toLocaleTimeString()}</Text>
      )}
      {formData.endTime !== null && (
        <Text>Time: {formData.endTime.toLocaleTimeString()}</Text>
      )}
      {formData.km !== null && <Text>Kilometers: {formData.km}</Text>}
    </View>
  );
};

export default InputConfiguration;
