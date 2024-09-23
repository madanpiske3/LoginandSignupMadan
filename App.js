import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Modal, ScrollView } from 'react-native';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
// import ForgotPasswordPage from './ForgotPasswordPage';
import ForgotPassPage2 from './ForgotPassPage2';
import LoginOTP from './LoginOTP';
import LoginResetPass from './LoginResetPass';
import Signup from './Signup';
import SignupFarmerInfo2 from './SignupFarmInfo2';
import SignupVerification3 from './SignupVerification3';
import SignupVerificationAttach4 from './SignupVerificationAttach4';
import SignupConfirmation5 from './SignupConfirmation5';
import SignupHours6 from './SignupHours6';
import WelcomeExtra from './WelcomeExtra';
// import TimeSlots from './TimeSlots';
import HoursTimeSlot from './HoursTimeSlot';

export default function App() {
  const Stack = createStackNavigator();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const r = "farmer";
  const d = "0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx";
  const t = "email";
  const s = "0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx";
  let allData = '';
  const handleLogin = async () => {
    try {
      const response = await axios.post('https://sowlab.com/assignment/user/login', {
        email: email,
        password: password,
        role : r,
        device_token: d,
        type: t,
        social_id: s 
      });
      allData = response.data;
      console.log(response.data);
      // Navigate to another screen after successful login
    } catch (error) {
      console.error(error);
    }
  }; 
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        
        <Stack.Screen name='ForgotPassPage2' component={ForgotPassPage2} options={{ headerShown: false }} />
        
        <Stack.Screen name='LoginResetPass' component={LoginResetPass} options={{ headerShown: false }} />
        
        <Stack.Screen name='LoginOTP' component={LoginOTP} options={{ headerShown: false }} />
        
        <Stack.Screen name='Signup' component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name='SignupFarmInfo2' component={SignupFarmerInfo2} options={{ headerShown: false }} />
        <Stack.Screen name='SignupVerification3' component={SignupVerification3} options={{ headerShown: false }} />
        <Stack.Screen name='SignupVerificationAttach4' component={SignupVerificationAttach4} options={{ headerShown: false }} />
        <Stack.Screen name='SignupConfirmation5' component={SignupConfirmation5} options={{ headerShown: false }} />
        <Stack.Screen name='SignupHours6' component={SignupHours6} options={{ headerShown: false }} />

        <Stack.Screen name='WelcomeExtra' component={WelcomeExtra} options={{ headerShown: false }} />

        <Stack.Screen name='HoursTimeSlot' component={HoursTimeSlot} options={{ headerShown: false }} />
        

        {/* <Stack.Screen name='ForgotPasswordPage' component={ForgotPasswordPage} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name='' component={TimeSlots} options={{ headerShown: false }} /> */}
                
      </Stack.Navigator>

    </NavigationContainer>
    // <Login />
    // <Signup />
    // <ForgotPassPage2 />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
