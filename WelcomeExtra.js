import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const WelcomeExtra = ({ navigation, route }) => {
  const { email } = route.params; // You can pass fullName from the login or signup page

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Welcome to FarmerClub!</Text>
      
      {/* Personal welcome message */}
      <Text style={styles.welcomeText}>Hello, {email || "Farmer"}!</Text>
      <Text style={styles.infoText}>We are glad to have you in the FarmerEats.</Text>

      {/* Continue or Logout buttons */}
      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Continue to Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => navigation.navigate('Signup')}
      >
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: '600',
    color: '#D5715B',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 18,
    color: '#7D7D7D',
    marginBottom: 40,
    textAlign: 'center',
  },
  continueButton: {
    backgroundColor: '#D5715B',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 50,
    alignItems: 'center',
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: '#555',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 50,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default WelcomeExtra;
