import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

interface DateProps {
  onDateChange: (selectedDate: Date) => void; // Callback prop
}

const InputDate: React.FC<DateProps> = ({ onDateChange }) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    onDateChange(currentDate); // Send selected date to parent
  };

  return (
    <View
      style={{
        justifyContent: "space-between",
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 25,
        borderWidth: 1,
        padding: 10,
        margin: 4,
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
          <Text style={{ fontWeight: "500", color: "#333333", fontSize: 20 }}>
            Show
          </Text>
          <Text style={{ fontWeight: "500", color: "#333333", fontSize: 20 }}>
            Date
          </Text>
          <Text style={{ fontWeight: "500", color: "#333333", fontSize: 20 }}>
            Picker
          </Text>
        </View>
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          is24Hour={true}
          onChange={onChange}
        />
      )}
      <Text
        style={{
          textAlign: "center",
          color: "#333333",
          borderRadius: 25,
          borderWidth: 1,
          fontSize: 20,
          width: "30%",
          padding: 10,
        }}
      >
        {date.toLocaleDateString()}
      </Text>
    </View>
  );
};

export default InputDate;
