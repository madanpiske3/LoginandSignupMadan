import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // FontAwesome for icons

const Signup = ( { navigation } ) => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('')


  // const handleInputChange = (name, value) => {
  //   setFormData({ ...formData, [name]: value });
  //   // console.log(fullName, email, phoneNumber);
  // };

  // const consoleData({ ...formData}){
  //   consol.log(fullName)
  // }
  const consoleData = () => {
    console.log(password);
    console.log(email);
  }

  return (
    <View style={styles.container}>
      {/* FarmerEats Header */}
      <Text style={styles.headerText}>FarmerEats</Text>

      {/* Signup 1/4 - Welcome Section */}
      <View style={styles.content}>
        <Text style={styles.smallCaption}>Signup 1 of 4</Text>
        <Text style={styles.bigCaption}>Welcome!</Text>
      </View>

      {/* Google, Apple, Facebook Icons */}
      <View style={styles.socialIconsContainer}>
       <View style={styles.circleContainer0}>
        <Image source={require('./assets/google1.png')} style={styles.iconImage0} />
       </View>
       <View style={styles.circleContainer}>
        <Icon name="apple" size={30} color="#000" />
       </View> 
        {/* <Image source={require('./assets/apple.png')} style={styles.iconImage} /> */}
        <View style={styles.circleContainer}>
        <Image source={require('./assets/facebook1.png')} style={styles.iconImage} />
        </View>
      </View>

      {/* Or sign up with text */}
      <Text style={styles.orSignUpText}>or sign up with</Text>

      {/* Input Fields */}
      <View style={styles.inputWrapper}>
        <Icon name="user" size={20} color="#666" style={styles.icon} />
        <TextInput
          placeholder="Full Name"
          style={styles.inputField}
          value={fullName}
          onChangeText={(text) => setFullName(text)}
        />
      </View>

      <View style={styles.inputWrapper}>
        <Icon name="envelope" size={20} color="#666" style={styles.icon} />
        <TextInput
          placeholder="Email Address"
          style={styles.inputField}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <View style={styles.inputWrapper}>
        <Icon name="phone" size={20} color="#666" style={styles.icon} />
        <TextInput
          placeholder="Phone Number"
          style={styles.inputField}
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
          keyboardType="phone-pad"
        />
      </View>

      <View style={styles.inputWrapper}>
        <Icon name="lock" size={20} color="#666" style={styles.icon} />
        <TextInput
          placeholder="Password"
          style={styles.inputField}
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <View style={styles.inputWrapper}>
        <Icon name="lock" size={20} color="#666" style={styles.icon} />
        <TextInput
          placeholder="Re-enter Password"
          style={styles.inputField}
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />
      </View>

      {/* Bottom Section: Login and Continue Button */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('SignupFarmInfo2',{
      fullName: fullName,
      email: email,
      phoneNumber: phoneNumber,
      password: password
    })}>
          <Text style={styles.continueButtonText}>Continue</Text>
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
    top: 32,
    left: 20,
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
  },
  content: {
    marginTop: 100,
    alignSelf: 'flex-start',
  },
  bigCaption: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
  smallCaption: {
    fontSize: 16,
    color: '#A6A6A6',
    marginBottom: 2,
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  iconImage: {
    width: 50,
    height: 50,
  },
  iconImage0: {
    width: 45,
    height: 45,
  },
  orSignUpText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#A6A6A6',
    marginBottom: 20,
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
  },
  icon: {
    marginRight: 10,
  },
  inputField: {
    flex: 1,
    height: 50,
    fontSize: 16,
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
  loginText: {
    fontSize: 16,
    color: '#000',
    textDecorationLine: 'underline',
  },
  continueButton: {
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
  circleContainer: {
    borderRadius: 20,
    overflow: 'hidden',
    // backgroundColor: 'red',
    // width: 70,
    // height: 70,
    // justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    borderColor: '#EDEDED',
    // borderColor: 'blue',
    borderWidth: 2,
    // backgroundColor: '#FFFFFF'

  },
  circleContainer0: {
    borderRadius: 20,
    overflow: 'hidden',
    // backgroundColor: 'red',
    // width: 70,
    // height: 70,
    // justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    borderColor: '#EDEDED',
    // borderColor: 'blue',
    borderWidth: 2,
    // backgroundColor: '#FFFFFF'

  },
});

export default Signup;


  // const [formData, setFormData] = useState({
  //   fullName: '',
  //   email: '',
  //   phoneNumber: '',
  //   password: '',
  //   confirmPassword: '',
  // });

