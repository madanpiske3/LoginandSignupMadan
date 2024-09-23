import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // For custom icons

const TimeSlots = ({ selectedTimeSlot, setSelectedTimeSlot }) => {
  const timeSlots = [
    { id: 1, label: '8:00am - 10:00am' },
    { id: 2, label: '10:00am - 1:00pm' },
    { id: 3, label: '2:00pm - 5:00pm' },
    { id: 4, label: '5:00pm - 8:00pm' },
    { id: 5, label: '8:00pm - 10:00pm' },
  ];

  return (
    <View style={styles.timeSlotsWrapper}>
      {timeSlots.map(slot => (
        <TouchableOpacity key={slot.id} onPress={() => setSelectedTimeSlot(slot.id)}>
          <Text style={selectedTimeSlot === slot.id ? styles.timeText2 : styles.timeText}>
            {slot.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const SignupHours6 = ({ navigation, route }) => {
  const { fullName, email, phoneNumber, password, businessName, informalName, streetAddress, city, state, zipCode } = route.params;
  const [selectedDay, setSelectedDay] = useState('Th'); // Default selected day
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null); // No time slot selected initially

  const days = ['M', 'T', 'W', 'Th', 'F', 'S', 'Su'];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* FarmerEats Header */}
        <Text style={styles.headerText}>FarmerEats</Text>

        {/* Signup Progress and Business Hours Section */}
        <View style={styles.progressWrapper}>
          <Text style={styles.smallCaption}>Signup 4 of 4</Text>
          <Text style={styles.bigCaption}>Business Hours</Text>
        </View>

        {/* Lorem Ipsum Text */}
        <Text style={styles.loremText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet ex eget libero venenatis.
        </Text>

        {/* Days of the Week */}
        <View style={styles.daysWrapper}>
          {days.map(day => (
            <TouchableOpacity
              key={day}
              style={day === selectedDay ? styles.liveBox : styles.nightBox}
              onPress={() => {
                setSelectedDay(day);
                setSelectedTimeSlot(null); // Reset selected time slot when day changes
              }}
            >
              <Text style={day === selectedDay ? styles.liveText : styles.nightText}>{day}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Time Slots */}
        <TimeSlots selectedTimeSlot={selectedTimeSlot} setSelectedTimeSlot={setSelectedTimeSlot} />

        {/* Displaying Selected Day */}
        {selectedDay === 'M' && selectedTimeSlot && (
          <Text style={styles.dayText}>Selected: {selectedDay} with time slot {selectedTimeSlot}</Text>
        )}
      </ScrollView>

      {/* Bottom Section: Back & Signup Buttons */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={30} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('SignupConfirmation5', {
          fullName: fullName,
          email: email,
          phoneNumber: phoneNumber,
          password: password,
          businessName: businessName,
          informalName: informalName,
          streetAddress: streetAddress,
          city: city,
          state: state,
          zipCode: zipCode
        })}>
          <Text style={styles.continueButtonText}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 100,
  },
  headerText: {
    fontSize: 17,
    fontWeight: '500',
    color: '#000',
    marginBottom: 20,
  },
  progressWrapper: {
    marginBottom: 20,
  },
  bigCaption: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 30,
  },
  smallCaption: {
    fontSize: 16,
    color: '#A6A6A6',
    marginBottom: 2,
  },
  loremText: {
    fontSize: 16,
    color: '#A6A6A6',
    marginBottom: 30,
  },
  daysWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  nightBox: {
    width: 40,
    height: 40,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: '#BEBBB8',
    borderWidth: 1,
  },
  nightText: {
    fontSize: 16,
    color: '#BEBBB8',
  },
  liveBox: {
    width: 40,
    height: 40,
    backgroundColor: '#D5715B',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  liveText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  timeSlotsWrapper: {
    marginBottom: 20,
  },
  timeText: {
    fontSize: 16,
    color: '#333',
    paddingVertical: 10,
    marginBottom: 10,
    textAlign: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  timeText2: {
    fontSize: 16,
    color: '#333',
    paddingVertical: 10,
    marginBottom: 10,
    textAlign: 'center',
    backgroundColor: '#F8C569',
    borderRadius: 5,
  },
  dayText: {
    fontSize: 16,
    color: '#D5715B',
    marginTop: 20,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 40,
    left: 20,
    right: 20,
  },
  continueButton: {
    backgroundColor: '#D5715B',
    padding: 15,
    paddingLeft: 60,
    paddingRight: 60,
    borderRadius: 50,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default SignupHours6;
