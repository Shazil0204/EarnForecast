import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";

interface InputIncomeProps {
  onValueChange: (value: number) => void;
}

const InputIncome: React.FC<InputIncomeProps> = ({ onValueChange }) => {
  const [income, setIncome] = useState("");

  const handleChange = (text: string) => {
    const value = parseFloat(text);
    setIncome(text);
    if (!isNaN(value)) {
      onValueChange(value); // Call the callback with the new value
    }
  };

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        borderWidth: 1,
        margin: 4,
        borderRadius: 25,
        backgroundColor: "#fff",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "500" }}>
        Please enter your income:
      </Text>
      <TextInput
        style={{
          borderWidth: 1,
          width: "30%",
          padding: 2,
          textAlign: "center",
          borderRadius: 25,
        }}
        value={income}
        onChangeText={handleChange}
        placeholder="Enter income"
        keyboardType="numeric"
      />
    </View>
  );
};

export default InputIncome;
