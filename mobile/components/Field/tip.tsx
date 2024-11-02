import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";

interface InputTipProps {
  onValueChange: (value: number | null) => void;
}

const InputTip: React.FC<InputTipProps> = ({ onValueChange }) => {
  const [tip, setTip] = useState("");

  const handleChange = (text: string) => {
    const value = parseFloat(text);
    setTip(text);
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
        backgroundColor: "#fff",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "500" }}>
        Please enter your Tip:
      </Text>
      <TextInput
        style={{
          borderWidth: 1,
          width: "30%",
          padding: 2,
          textAlign: "center",
          borderRadius: 25,
        }}
        value={tip}
        onChangeText={handleChange}
        placeholder="Enter Tip"
        keyboardType="numeric"
      />
    </View>
  );
};

export default InputTip;
