import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import InputIncome from "../components/field/income";
import InputKM from "../components/field/km";
import InputTime from "../components/field/time";
import InputDate from "../components/field/date";
import useFonts from "../hooks/useFonts";
import { getFontFamily } from "../constants/fontFamily";
import LoadingScreen from "../components/loadingScreen";
import BackBTN from "../components/basic/backBTN";
import DataCalculation from "../components/view/DataCalculation";

interface InputConfigurationParams {
  companyName: string | string[];
  companyID: string | string[];
}

const InputConfiguration: React.FC<InputConfigurationParams> = ({
  companyName,
  companyID,
}) => {
  const [showDataCalc, setShowDataCalc] = useState(false);

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
      return [
        <InputKM
          key="km"
          onValueChange={(value) => handleValueChange("km", value)}
        />,
        <InputIncome
          key="income"
          onValueChange={(value) => handleValueChange("income", value)}
        />,
        <InputDate
          key="date"
          onDateChange={(value) => handleValueChange("date", value)}
        />,
        <InputTime
          key="startTime"
          onTimeChange={(value) => handleValueChange("startTime", value)}
          isStartTime={true}
        />,
        <InputTime
          key="endTime"
          onTimeChange={(value) => handleValueChange("endTime", value)}
          isStartTime={false}
        />,
      ];
    } else if (companyID === "2") {
      return [
        <InputIncome
          key="income"
          onValueChange={(value) => handleValueChange("income", value)}
        />,
      ];
    }
    // Return an empty array instead of null for any other companyID
    return [];
  };

  const fontsLoaded = useFonts();

  if (!fontsLoaded) {
    return <LoadingScreen />;
  }

  return (
    <>
      <View>
        <Text
          style={{
            color: "#fff",
            marginBottom: 20,
            fontSize: 50,
            textAlign: "center",
            fontFamily: getFontFamily(true, "PlayBlack"),
          }}
        >
          {companyName}
        </Text>

        {showDataCalc ? (
          <DataCalculation />
        ) : (
          <>
            <BackBTN folderName="tabs" componentName="companySelection" />
            {getComponents()}
            <View
              style={{
                marginTop: 50,
                margin: 5,
                borderRadius: 25,
                borderWidth: 2,
                overflow: "hidden",
              }}
            >
              <Button
                onPress={() => {
                  setShowDataCalc(true);
                }}
                title="start Calculation"
              />
            </View>
          </>
        )}
      </View>
    </>
  );
};

export default InputConfiguration;
