import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Assuming you're using FontAwesome icons

const ForgotPasswordPage = ({ navigation }) => {
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
          <Text style={styles.linkText}>Login</Text>
        </Text>
      </View>

      {/* Centered Phone Number Input and Send Code Button */}
      <View style={styles.centeredContainer}>
        {/* Phone Number Input with Icon */}
        <View style={styles.inputWrapper}>
          <Icon name="phone" size={20} color="#666" style={styles.icon} />
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
    backgroundColor: '#f0f0f0',
  },
  headerText: {
    position: 'absolute',
    top: 40,
    left: 20,
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
    // marginBottom: 30,
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
    color: '#7e7e7e',
    marginBottom: 20,
  },
  linkText: {
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center', // Centers vertically
    alignItems: 'center', // Centers horizontally
    width: '100%',
    marginTop: -200,
    },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
    width: '100%', // Full width
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
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%', // Full width
  },
  sendCodeButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default ForgotPasswordPage;
