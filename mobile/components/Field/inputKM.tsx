import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";

interface InputKMProps {
  onValueChange: (value: number | null) => void;
}

const InputKM: React.FC<InputKMProps> = ({ onValueChange }) => {
  const [KM, setKM] = useState("");

  const handleChange = (text: string) => {
    const value = parseFloat(text);
    setKM(text);
    onValueChange(isNaN(value) ? null : value); // Call the callback with the new value or null
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
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "500" }}>
        Please enter your KM:
      </Text>
      <TextInput
        style={{
          borderWidth: 1,
          width: "30%",
          padding: 2,
          textAlign: "center",
          borderRadius: 25,
        }}
        value={KM}
        onChangeText={handleChange}
        placeholder="Enter KM"
        keyboardType="numeric"
      />
    </View>
  );
};

export default InputKM;
