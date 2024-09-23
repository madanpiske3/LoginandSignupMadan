import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';  // For Google icon
import { useState } from 'react';
import axios from 'axios';

const Login = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const role = "farmer";
  // const d = "0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx";
  const type = "email";
  const social_id = "0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx";
  // const  device_token = "0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx"
  // const type = "email"
  // const social_id = "0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx"
  
  // let allData = '';
  // const handleLogin = async () => {
  //   try {
  //     const response = await axios.post('https://sowlab.com/assignment/user/login', {
  //       email: email,
  //       password: password,
  //       role : role,
  //       device_token: device_token,
  //       type: type,
  //       social_id: social_id 
  //     });
  //     allData = response.data;
  //     console.log(response.data);
  //     // Navigate to another screen after successful login
  //   } catch (error) {
  //     console.error(error);
  //   }
  //   console.log(allData);
  // };



  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }

    try {
      const response = await fetch('https://sowlab.com/assignment/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          role,
          type,
          social_id
        }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert('Success', 'Login successful');
        // Navigate to next screen or home page upon successful login
        const name = email
        navigation.navigate('WelcomeExtra', { email });
      } else {
        Alert.alert('Error', data.message || 'Login failed');
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong. Please try again.');
    }
  };




  return (
    <View style={styles.container}>

      <Text style={styles.headerText}>FarmerEats</Text>
      <View style={styles.introContainer}>
        <Text style={styles.bigCaption}>Welcome back!</Text>
        <Text style={styles.smallCaption}>
          New Here?{' '}
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.linkText}>Create account</Text>
          </TouchableOpacity>
        </Text>
      </View>

      {/* Big Black Caption */}
      {/* <Text style={styles.bigCaption}>Welcome back!</Text>

      {/* Little Text for New Account }
      <Text style={styles.smallCaption}>
        New Here?{' '}
        <Text style={styles.linkText}>Create account</Text>
      </Text> */}

      {/* Email & Password Input with Icons */}
      <View style={styles.formGroup}>
        {/* Email Field */}
        <View style={styles.inputWrapper}>
          <Icon name="at" size={20} color="#000000" style={styles.icon} />
          
          <TextInput
            placeholder="Email Address"
            placeholderTextColor={"#A7A6A5"}
            style={styles.inputField}
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        {/* Password Field */}
        <View style={styles.inputWrapper}>
        <View style={styles.lockWrapper}>
            <Icon name="lock" size={20} color="#666" style={styles.icon} />
            <View style={styles.dotInsideLock} />
          </View>
          <TextInput
            // placeholder="Password"
            placeholder="Password"
            placeholderTextColor={"#A7A6A5"}
            // placeholderTextColor={"#0282CF"}
            style={styles.inputField}
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity onPress={() => {navigation.navigate('ForgotPassPage2')}}>
            <Text style={styles.forgotLink}>Forgot?</Text>
          </TouchableOpacity>

        </View>

        {/* <TouchableOpacity>
          <Text style={styles.forgotLink}>Forgot?</Text>
        </TouchableOpacity> */}
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.smallCaption2}>or login with </Text>


         {/* Social Media Icons */}
      <View>
      {/* <MaterialCommunityIcons name="google" size={30} color="#DB4437" /> */}
      {/* <Icon name="google" size={30} color="#000" /> */}
      {/* <Icon name="facebook" size={30} color="#4267B2" /> */}
      </View>

      <View style={styles.socialView}>
        <View style={styles.circleContainer}>
        <Image 
          source={require('./assets/google1.png')}
          style={styles.socialIconImage}
          />
        </View>
        <View style={styles.circleContainer}>  
        <Icon name="apple" size={30} color="#000" />
        </View>
        <View style={styles.circleContainer}>
        <Image 
          source={require('./assets/facebook1.png')}
          style={styles.socialIconImage}
          />
        </View>

      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    // backgroundColor: '#f0f0f0',
    backgroundColor: '#FFFFFF',
  },
  headerText: {
    position: 'absolute', // Absolute positioning to place it at the top left
    top: 40, // Adjust the top value as per your layout
    left: 20, // Align to the left
    fontSize: 20,
    fontWeight: '400',
    color: '#000',
    // overflow: 'hidden',
  },
  introContainer: {
    marginTop: 12, // Adds space below the "FarmerEats" text
    alignSelf: 'flex-start',
  },

  // placeHolder: {
    
  // },
  bigCaption: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    // color: "#D5715B",
    marginBottom: 10,
  },
  smallCaption: {
    fontSize: 16,
    color: '#A6A6A6',
    // marginTop: 20,
    marginBottom: 40,
  },
  smallCaption2: {
    fontSize: 11,
    color: "#A6A6A6",
    marginTop: 20,
  },
  linkText: {
    color: '#D5715B',
    // textDecorationLine: 'underline',
    
  },
  formGroup: {
    width: '100%',
    marginTop: 20,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    // backgroundColor: '#fff',
    backgroundColor: "#EEEDEC",
  },
  icon: {
    marginRight: 10,
  },
  lockWrapper: {
    position: 'relative', // This allows the dot to be placed over the lock icon
  },
  dotInsideLock: {
    position: 'absolute',
    top: 7,
    left: 7,
    width: 6,
    height: 6,
    backgroundColor: '#666',
    borderRadius: 3, // Makes the view a circle
  },
  inputField: {
    flex: 1,
    height: 50,
    fontSize: 16,
    paddingHorizontal: 5,
  },
  forgotLink: {
    // color: '#007BFF',
    color: '#D5715B',
    fontSize: 14,
    paddingRight: 10,
    // textAlign: 'right',
    // color: '#007BFF',
    // marginBottom: 20,
    // fontSize: 14,
    // justifyContent:'center',
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#D5715B',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  socialButton: {
    padding: 10,
  },
  socialIconImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',  // To ensure the logos maintain their aspect ratio
    // marginHorizontal: 70,
  },
  socialView: {
    flexDirection: 'row',
    // padding: 10,
    // margin: 30,
    // justifyContent: 'space-between',
    marginTop: 20,
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
    // borderColor: '#EDEDED',
    borderColor: 'blue',
    borderWidth: 2,
  },
});

export default Login;
