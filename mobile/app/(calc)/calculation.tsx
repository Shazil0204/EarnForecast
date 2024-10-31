import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const Calculation = () => {
  const { id, name } = useLocalSearchParams();

  console.log(id, name);

  return (
    <View>
      <Text>ID: {id}</Text>
      <Text>Name: {name}</Text>
    </View>
  );
};

export default Calculation;
