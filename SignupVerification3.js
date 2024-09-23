import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // For custom icons
import * as DocumentPicker from 'expo-document-picker';

const SignupVerification3 = ({ navigation, route }) => {
  const { fullName, email, phoneNumber, password, businessName, informalName, streetAddress, city, state, zipCode } = route.params;
  
  const [fileResponse, setFileResponse] = useState(null);

  const handleFilePicker = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: 'application/pdf', // Only allow .pdf files
      });

      if (result.type === 'success') {
        setFileResponse(result);
        Alert.alert('File attached successfully!');
      } else {
        Alert.alert('File selection was cancelled');
      }
    } catch (err) {
      Alert.alert('Unknown error: ' + JSON.stringify(err));
      console.error(err);
    }
  };
  
  return (
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
        <TouchableOpacity style={styles.cameraButton} onPress={handleFilePicker}>
          <Icon name="camera" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Show the selected file */}
      {fileResponse && (
        <Text style={{ marginTop: 20 }}>Selected File: {fileResponse.name}</Text>
      )}

      {/* Bottom Section: Back & Continue Buttons */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={30} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('SignupVerificationAttach4', {
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
  attachText: {
    fontSize: 16,
    color: '#000',
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

export default SignupVerification3;
