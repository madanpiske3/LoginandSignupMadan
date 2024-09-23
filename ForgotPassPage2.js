import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather'; // Use Feather Icons for a thinner phone icon

const ForgotPassPage2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* FarmerEats Header */}
      <Text style={styles.headerText}>FarmerEats</Text>

      {/* Forgot Password Section */}
      <View style={styles.content}>
        <Text style={styles.bigCaption}>Forgot Password?</Text>

        {/* "Remember your password?" with Login link */}
        <Text style={styles.rememberText}>
          Remember your password?{' '}
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>

          <Text style={styles.linkText}>Login</Text>

          </TouchableOpacity>
        </Text>
      </View>

      {/* Centered Phone Number Input and Send Code Button */}
      <View style={styles.centeredContainer}>
        {/* Phone Number Input with Icon */}
        <View style={styles.inputWrapper}>
          <FeatherIcon name="phone" size={20} color="#666" style={styles.icon} />
          <TextInput
            placeholder="Phone Number"
            style={styles.inputField}
            keyboardType="phone-pad"
            autoCapitalize="none"
          />
        </View>

        {/* Send Code Button */}
        <TouchableOpacity style={styles.sendCodeButton} onPress={() => navigation.navigate('LoginOTP')}>
          <Text style={styles.sendCodeButtonText}>Send Code</Text>
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
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center', // Centers vertically
    alignItems: 'center', // Centers horizontally
    width: '100%',
    marginTop: -200,
    // backgroundColor: 'pink',
    },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    // backgroundColor: '#fff',
    backgroundColor: '#EEEDEC',
    width: '96%', // Full width
  },
  icon: {
    marginRight: 10,
  },
  inputField: {
    flex: 1,
    height: 50,
    fontSize: 16,
  },
  sendCodeButton: {
    // backgroundColor: '#000',
    backgroundColor: "#D5715B",
    padding: 15,
    // margin: 30,
    borderRadius: 50,
    alignItems: 'center',
    width: '96%', // Full width
  },
  sendCodeButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default ForgotPassPage2;
