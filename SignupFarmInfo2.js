import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // FontAwesome for icons
import { Picker } from '@react-native-picker/picker'; // For dropdown

const SignupFarmerInfo2 = ({ navigation, route }) => {
  const { fullName, email, phoneNumber, password } = route.params;
  const [formData, setFormData] = useState({
    businessName: '',
    informalName: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
  });

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
    // console.log(formData[informalName])
  };




  const handleSubmit = async () => {
    try {
      const response = await fetch('https://sowlab.com/assignment/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName,
          phoneNumber,
          password,
          businessName: formData.businessName,
          informalName: formData.informalName,
          streetAddress: formData.streetAddress,
          city: formData.city,
          state: formData.state,
          zipCode: formData.zipCode,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert('Success', 'User registered successfully');
        navigation.navigate('SignupVerification3', {
          fullName,
          email,
          phoneNumber,
          password,
          businessName: formData.businessName,
          informalName: formData.informalName,
          streetAddress: formData.streetAddress,
          city: formData.city,
          state: formData.state,
          zipCode: formData.zipCode,
        });
      } else {
        Alert.alert('Error', data.message || 'Failed to register');
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong. Please try again.');
    }
  };





  const prD = () => {
    console.log(fullName, email, phoneNumber, password)
    console.log(formData.businessName, formData.informalName, formData.city)
  }

  return (
    <View style={styles.container}>
      {/* FarmerEats Header */}
      <Text style={styles.headerText}>FarmerEats</Text>

      {/* Signup 2 of 4 & Farm Info Section */}
      <View style={styles.content}>
        <Text style={styles.smallCaption}>Signup 2 of 4</Text>
        <Text style={styles.bigCaption}>Farm Info</Text>
      </View>

      {/* Input Fields */}
      <View style={styles.inputWrapper}>
        <Icon name="tag" size={20} color="#000" style={styles.icon} />
        <TextInput
          placeholder="Business Name"
          style={styles.inputField}
          value={formData.businessName}
          onChangeText={(text) => handleInputChange('businessName', text)}
        />
      </View>

      <View style={styles.inputWrapper}>
        <Icon name="smile-o" size={20} color="#000" style={styles.icon} />
        <TextInput
          placeholder="Informal Name"
          style={styles.inputField}
          value={formData.informalName}
          onChangeText={(text) => handleInputChange('informalName', text)}
        />
      </View>

      <View style={styles.inputWrapper}>
        <Icon name="home" size={20} color="#000" style={styles.icon} />
        <TextInput
          placeholder="Street Address"
          style={styles.inputField}
          value={formData.streetAddress}
          onChangeText={(text) => handleInputChange('streetAddress', text)}
        />
      </View>

      <View style={styles.inputWrapper}>
        <Icon name="map-marker" size={20} color="#000" marginLeft={3} style={styles.icon} />
        <TextInput
          placeholder="City"
          style={styles.inputField}
          value={formData.city}
          onChangeText={(text) => handleInputChange('city', text)}
        />
      </View>

      {/* State Dropdown and Zipcode on the same line */}
      <View style={styles.row}>
        <View style={styles.stateWrapper}>
          <Picker
            selectedValue={formData.state}
            style={styles.picker}
            dropdownIconColor={"#000"}
            onValueChange={(itemValue) => handleInputChange('state', itemValue)}
          >
            <Picker.Item label="State" value="" />
            <Picker.Item label="Maharastra" value="Maharastra" />
            <Picker.Item label="Utter Pradesh" value="Utter Pradesh" />
            <Picker.Item label="Telangana" value="Telangana" />
            <Picker.Item label="Assam" value="Assam" />
            <Picker.Item label="J & K" value="J & K" />
            {/* Add more states as needed */}
          </Picker>
        </View>

        <View style={styles.zipCodeWrapper}>
          <TextInput
            placeholder="Enter Zipcode"
            style={styles.inputField}
            keyboardType="numeric"
            value={formData.zipCode}
            onChangeText={(text) => handleInputChange('zipCode', text)}
          />
        </View>
      </View>

      {/* Bottom Section: Prev Arrow and Continue Button */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={30} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.continueButton} onPress={handleSubmit}>
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
    top: 30,
    left: 20,
    fontSize: 17,
    fontWeight: '500',
    color: '#000',
  },
  content: {
    marginTop: 110,
    alignSelf: 'flex-start',
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
    backgroundColor: '#EEEDEC',
    marginLeft: 3,
    paddingLeft: 6,
},
picker: {
    height: 50,
    width: '100%',
    backgroundColor: '#EEEDEC',
    color: '#A7A6A5',
    // color: '#000000',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  stateWrapper: {
    flex: 0.42,
    marginRight: 10, // To add space between state and zipcode fields
    // width: 30,
  },
  zipCodeWrapper: {
    flex: 0.58,
    height: 54,
    // color: '#EEEDEC',
    // borderRadius: 20,
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
});

export default SignupFarmerInfo2;
