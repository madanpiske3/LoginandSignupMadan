import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather'; // Use Feather Icons for a thinner phone icon
import axios from 'axios';

const LoginOTP = ({ navigation }) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']); // 6-digit OTP
  const inputs = useRef([]);

  const clearScreen = () => {
    setOtp(['','','','','','']);
    inputs.current[0].focus();
  }

  const handleOtpChange = (text, index) => {
    let otpCopy = [...otp];
    otpCopy[index] = text;
    setOtp(otpCopy);

    // Automatically focus on the next input if the current one is filled
    if (text && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  const handleSubmit = async () => {
    const otpEntered = otp.join('');
    alert(`OTP entered: ${otpEntered}`);
    navigation.navigate('LoginResetPass');
    // Add your OTP submission logic here
  };

  return (
    <View style={styles.container}>
      {/* FarmerEats Header */}
      <Text style={styles.headerText}>FarmerEats</Text>

      {/* Forgot Password Section */}
      <View style={styles.content}>
        <Text style={styles.bigCaption}>Verify OTP</Text>

        {/* "Remember your password?" with Login link */}
        <Text style={styles.rememberText}>
          Remember your password?{' '}
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.linkText}>Login</Text>
          </TouchableOpacity>
        </Text>
      </View>

      {/* Centered OTP Input Fields */}
      <View style={styles.centeredContainer}>
        <View style={styles.otpContainer}>
          {otp.map((value, index) => (
            <TextInput
              key={index}
              ref={(input) => (inputs.current[index] = input)} // Store reference to each input
              style={styles.otpInput}
              maxLength={1}
              keyboardType="numeric"
              onChangeText={(text) => handleOtpChange(text, index)} // Auto-cursor move logic
              value={value}
            />
          ))}
        </View>

        {/* Submit Button */}
        <TouchableOpacity style={styles.sendCodeButton} onPress={handleSubmit}>
          <Text style={styles.sendCodeButtonText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={clearScreen}>
        <Text style={styles.resendCodeText}>Resend Code</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
  },
  headerText: {
    position: 'absolute',
    top: 40,
    left: 20,
    fontSize: 20,
    fontWeight: '400',
    color: '#000',
  },
  content: {
    marginTop: 200,
    alignSelf: 'flex-start',
  },
  bigCaption: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  rememberText: {
    fontSize: 16,
    color: '#A6A6A6',
    marginBottom: 20,
  },
  linkText: {
    color: '#D5715B',
    textDecorationLine: 'none',
    // paddingTop: 8,
    marginTop: 6,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center', // Centers vertically
    alignItems: 'center', // Centers horizontally
    width: '100%',
    marginTop: -200,
  },
  sendCodeButton: {
    backgroundColor: "#D5715B",
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    width: '100%',
  },
  sendCodeButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  resendCodeText: {
    color: '#000',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    marginTop: 10,
  },
  otpInput: {
    width: 55,
    height: 55,
    borderRadius: 20,
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: '#EEEDEC',
    marginHorizontal: 2,
  },
});

export default LoginOTP;
