import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import InputConfiguration from "../../controller/inputConfiguration";

const Calculation = () => {
  const { id, name } = useLocalSearchParams();

  console.log(id, name);

  return (
    <View>
      <InputConfiguration companyName={name} companyID={id} />
    </View>
  );
};

export default Calculation;
