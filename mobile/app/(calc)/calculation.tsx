import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import InputConfiguration from "../../controller/inputConfiguration";

const Calculation = () => {
  const { id, name } = useLocalSearchParams();
  return (
    <View style={{ backgroundColor: "#193940", flex: 1 }}>
      <InputConfiguration companyName={name} companyID={id} />
    </View>
  );
};

export default Calculation;
