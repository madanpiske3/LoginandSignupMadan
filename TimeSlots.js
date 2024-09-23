import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const TimeSlots = ({ selectedTimeSlots, onTimeSlotSelect }) => {
  const timeSlots = [
    "8:00am - 10:00am",
    "10:00am - 1:00pm",
    "2:00pm - 5:00pm",
    "5:00pm - 8:00pm",
    "8:00pm - 10:00pm",
  ];

  return (
    <View style={styles.timeSlotsWrapper}>
      {timeSlots.map((timeSlot) => (
        <TouchableOpacity
          key={timeSlot}
          style={[
            styles.timeText,
            selectedTimeSlots.includes(timeSlot) && styles.selectedTimeText, // Highlight if selected
          ]}
          onPress={() => onTimeSlotSelect(timeSlot)} // Handle time slot selection
        >
          <Text>{timeSlot}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  timeSlotsWrapper: {
    marginBottom: 30,
  },
  timeText: {
    paddingVertical: 10,
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedTimeText: {
    backgroundColor: '#D5715B', // Background for selected time slot
    color: '#FFFFFF',
  },
});

export default TimeSlots;
