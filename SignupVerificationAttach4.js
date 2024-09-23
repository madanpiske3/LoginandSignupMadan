import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // For custom icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SignupVerificationAttach4 = ({ navigation, route }) => {
  const { fullName, email, phoneNumber, password, businessName, informalName, streetAddress, city, state, zipCode } = route.params;
  return (
    // <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.container}>  
    {/* FarmerEats Header */}
      <Text style={styles.headerText}>FarmerEats</Text>

      {/* Signup Progress and Verification Section */}
      <View style={styles.progressWrapper}>
        <Text style={styles.smallCaption}>Signup 3 of 4</Text>
        <Text style={styles.bigCaption}>Verification</Text>
      </View>

      {/* Lorem Ipsum Text */}
      <View style={styles.textWrapper}>
        <Text style={styles.loremText}>
          Attached proof of Department of Agriculture registrations i.e. Florida Fresh, USDA Approved, USDA Organic
        </Text>
      </View>

      {/* Attach Proof of Registration Section */}
      <View style={styles.attachProofWrapper}>
        <Text style={styles.attachText}>Attach proof of registration</Text>
        <TouchableOpacity style={styles.cameraButton}>
          <Icon name="camera" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.attachPdf}>
      <Text style={styles.attachPdfText}>usda_registration.pdf</Text>
      <TouchableOpacity
        onPress={() => {
          // Handle cancel action here
        }}
      >
        {/* <MaterialCommunityIcons name="close-circle" size={30} color="#000" /> */}
        <Text style={styles.attachPdfCancel}>+</Text>
      </TouchableOpacity>
    </View>

      {/* Bottom Section: Back & Continue Buttons */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={30} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('HoursTimeSlot',{
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
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>

      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor: '#FFFFFF',
  },
  headerText: {
    fontSize: 17,
    fontWeight: '500',
    color: '#000',
    marginBottom: 20,
  },
//   headerText: {
//     position: 'absolute',
//     top: 30,
//     left: 20,
//     fontSize: 17,
//     fontWeight: '500',
//     color: '#000',
//   },
  progressWrapper: {
    marginBottom: 30,
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
  textWrapper: {
    marginBottom: 30,
  },
  loremText: {
    fontSize: 16,
    color: '#A6A6A6',
  },
  attachProofWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  attachPdf: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEEDEC',
    // margin: 10,
    padding: 17,
    borderRadius: 5,
    },
  attachPdfText: {
    fontSize: 17,
    // color: 'pink',
    color: '#261C12',
    textDecorationLine: 'underline', 
    marginRight: 110
  },
  attachPdfCancel: {
    color: '#000',
    fontSize: 35,
    // fontWeight: '500',
    // writingDirection:'ltr',
    transform: [{rotate: '45deg'}],
    },
  attachText: {
    fontSize: 16,
    color: '#000',
    // color: '#A6A6A6',
    flex: 1,    
    
  },
  cameraButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#D5715B',
    justifyContent: 'center',
    alignItems: 'center',
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
  backButton: {
    backgroundColor: '#ddd',
    padding: 15,
    borderRadius: 5,
  },
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

  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default SignupVerificationAttach4;
