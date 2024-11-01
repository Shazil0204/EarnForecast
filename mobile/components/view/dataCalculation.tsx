import { View, Text } from "react-native";
import React from "react";

interface DataCalculationProp {
  startTime: Date | null;
  endTime: Date | null;
  date: Date | null;
  km: number | null;
  income: number | null;
  tip: number | null;
}

const DataCalculation: React.FC<DataCalculationProp> = ({
  startTime,
  endTime,
  date,
  km,
  income,
  tip,
}) => {
  console.log("dataCalc");
  return (
    <View style={{ backgroundColor: "#fff", padding: 100 }}>
      <Text>DataCalculation</Text>
    </View>
  );
};

export default DataCalculation;
