import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // FontAwesome for lock icon

const LoginResetPass = ({ navigation }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={styles.container}>
      {/* FarmerEats Header */}
      <Text style={styles.headerText}>FarmerEats</Text>

      {/* Reset Password Section */}
      <View style={styles.content}>
        <Text style={styles.bigCaption}>Reset Password</Text>

        {/* "Remember your password?" with Login link */}
        <Text style={styles.rememberText}>
          Remember your password?{' '}
          <Text style={styles.linkText}>Login</Text>
        </Text>
      </View>

      {/* Password Input Fields */}
      <View style={styles.inputFields2}>

      <View style={styles.inputWrapper}>
        <Icon name="lock" size={20} color="#666" style={styles.icon} />
        <TextInput
          placeholder="New Password"
          style={styles.inputField}
          secureTextEntry={true}
          value={newPassword}
          onChangeText={setNewPassword}
          />
      </View>

      <View style={styles.inputWrapper}>
        <Icon name="lock" size={20} color="#666" style={styles.icon} />
        <TextInput
          placeholder="Confirm New Password"
          style={styles.inputField}
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          />
      </View>
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
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
    marginTop: 150,
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
  inputFields2: {
    marginTop: 70,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#EEEDEC',
    // marginTop: 90,
  },
  icon: {
    marginRight: 10,
  },
  inputField: {
    flex: 1,
    height: 50,
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#D5715B',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 13,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});

export default LoginResetPass;
