import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // For custom icons

// import TimeSlots from './TimeSlots';

const HoursTimeSlot = ({ navigation }) => {
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
        Choose the hours your farm is open for pickups.
        This will allow custerems to order deliveries.
        </Text>
        {/* <Text style={styles.loremText}> */}
        {/* </Text> */}

        {/* Days of the Week */}
        <View style={styles.daysWrapper}>
          {['M', 'T'].map(day => (
            <View style={styles.dayBox} key={day}>
              <Text style={styles.dayText}>{day}</Text>
            </View>
          ))}
          {['W'].map(day => (
            <View style={styles.liveBox} key={day}>
              <Text style={styles.liveText}>{day}</Text>
            </View>
          ))}
          {['Th', 'F', 'S', 'Su'].map(day => (
            <View style={styles.nightBox} key={day}>
              <Text style={styles.nightText}>{day}</Text>
            </View>
          ))}
        </View>
        <View>
            <View style={styles.timeSlotRow}>
                <Text style={styles.timeText2}>8:00am - 10:00am</Text>
                <Text style={styles.timeText2}>10:00am - 1:00pm</Text>
            </View>

            <View style={styles.timeSlotRow}>
                <Text style={styles.timeText}>2:00pm - 5:00pm</Text>
                <Text style={styles.timeText}>5:00pm - 8:00pm</Text>
            </View>

            <View style={styles.timeSlotRow}>
                <Text style={styles.timeText}>8:00pm - 10:00pm</Text>
            </View>
        </View>
        {/* <TimeSlots /> */}
        </ScrollView>


      {/* Bottom Section: Back & Signup Buttons */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={30} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('SignupConfirmation5')}>
          <Text style={styles.continueButtonText}>Signup</Text>
        </TouchableOpacity>
      </View>


    </View>
  );
};

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
  dayBox: {
    width: 40,
    height: 40,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    // borderWidth: 2,
  },
  dayText: {
    fontSize: 16,
    color: '#000',
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
    alignItems:'center',
    borderRadius: 5,

  },
  liveText: {
    fontSize: 16,
    color: '#FFFFFF',

  },

  fullWidth: {
    flex: 2, // Adjust the width for the single time slot row
    marginRight: 0,
    width: 100,
  },
  bottomContainer: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // bottom: -230,
    // paddingHorizontal: 20,
    // paddingBottom: 20,
    // alignItems: 'flex-end',
    // alignContent: 'center',
  
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 40,
    left: 20,
    right: 20,
  },
//   bottomContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingHorizontal: 20,
//     paddingBottom: 20,
//   },
continueButton: {
    // backgroundColor: '#D5715B',
    // padding: 15,
    // borderRadius: 5,
    // alignItems: 'center',

    backgroundColor: '#D5715B',
    padding: 15,
    paddingLeft:60,
    paddingRight:60,
    borderRadius: 50,
    alignItems: 'center',
},
continueButtonText: {
    
    color: '#fff',
    fontSize: 18,

  },
  backButton: {
    backgroundColor: '#ddd',
    padding: 15,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
  },
  signupButton: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 5,
    flex: 1,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  timeSlotRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Vertical centering
    marginBottom: 15,
  },
  timeText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    paddingVertical: 10,
    marginRight: 10,
    textAlign: 'center', // Horizontal centering
    backgroundColor: '#f0f0f0',
    // backgroundColor: '#F8C569',
    borderRadius: 5,
  },
  timeText2: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    paddingVertical: 10,
    marginRight: 10,
    textAlign: 'center', // Horizontal centering
    // backgroundColor: '#f0f0f0',
    backgroundColor: '#F8C569',
    borderRadius: 5,
  },
});

export default HoursTimeSlot;