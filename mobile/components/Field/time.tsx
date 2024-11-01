import React, { useState } from "react";
import { View, Button, Text, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

interface TimeProp {
  onTimeChange: (selectedTime: Date, isStartTime: boolean) => void; // Callback prop with isStartTime
  isStartTime: boolean; // Prop to determine if this is start time or end time
}

const InputTime: React.FC<TimeProp> = ({ onTimeChange, isStartTime }) => {
  const [time, setTime] = useState(new Date()); // State to hold the selected time
  const [show, setShow] = useState(false); // State to control visibility of the time picker

  const onChange = (event: any, selectedTime?: Date) => {
    const currentTime = selectedTime || time; // Use the selected time or fallback to the current state
    setShow(false); // Hide the picker
    setTime(currentTime); // Update the time state
    onTimeChange(currentTime, isStartTime); // Call the callback prop with the selected time and isStartTime
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
      <TouchableOpacity style={{ width: "50%" }} onPress={() => setShow(true)}>
        <View
          style={{
            backgroundColor: "#3cc67c",
            borderRadius: 25,
            padding: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 25,
          }}
        >
          <Text style={{ color: "#333333", fontSize: 20, fontWeight: "500" }}>
            Select
          </Text>
          <Text style={{ color: "#333333", fontSize: 20, fontWeight: "500" }}>
            {isStartTime ? "start" : "end"}
          </Text>
          <Text style={{ color: "#333333", fontSize: 20, fontWeight: "500" }}>
            time
          </Text>
        </View>
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          value={time}
          mode="time" // Set mode to time
          is24Hour={true} // Display in 24-hour format
          onChange={onChange} // Handle time change
        />
      )}
      <Text
        style={{
          color: "#333333",
          width: "30%",
          borderWidth: 1,
          textAlign: "center",
          borderRadius: 25,
          padding: 10,
          fontSize: 20,
        }}
      >
        {time.toLocaleTimeString()}
      </Text>
    </View>
  );
};

export default InputTime;
