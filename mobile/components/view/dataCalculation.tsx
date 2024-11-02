import { View, Text } from "react-native";
import React from "react";

interface DataCalculationProp {
  startTime: Date | null;
  income: number | null;
  endTime: Date | null;
  tip: number | null;
  date: Date | null;
  km: number | null;
}

const DataCalculation: React.FC<DataCalculationProp> = ({
  startTime,
  endTime,
  income,
  date,
  km,
  tip,
}) => {
  console.log("dataCalc");
  return (
    <View style={{ backgroundColor: "#fff", padding: 100 }}>
      <Text>We have received all data and that is</Text>
      <Text>Start Time:{startTime?.toLocaleTimeString()}</Text>
      <Text>End Time:{endTime?.toLocaleTimeString()}</Text>
      <Text>Date:{date?.toLocaleDateString()}</Text>
      <Text>Income:{income}</Text>
      <Text>KM:{km}</Text>
      <Text>Tip:{tip}</Text>
    </View>
  );
};

export default DataCalculation;
