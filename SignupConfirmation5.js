import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const SignupConfirmation5 = ({ navigation }) => {
    // const { fullName, email, phoneNumber, password, businessName, informalName, streetAddress, city, state, zipCode } = route.params;

    

    return(
        <View style={styles.container}>
            <Text style={styles.textCheck}>
             {/* ✔️ */}
             {/* \(♥♥✔️♥♥♥) */}

            </Text>
            <Image style={styles.socialIconImage} source={require('./assets/check1.png')} />
            {/* source={require('./assets/facebook1.png')}
            </Image> */}
            <Text style={styles.bigCaption}>You're all done!</Text>
            {/* <Text style={styles.smallCaption}>Hang tight! We are currently reviewing your account and will follow up with you in 2-3 business days. In the meantime, you can setup your inventory.</Text> */}


            <View style={styles.smallDescription}>
                <Text   
                    style={{ textAlign: 'center', color:'#898989'}}>
Hang tight! We are currently reviewing your account and will follow up with you in 2-3 business days. In the meantime, you can setup your inventory.
                </Text>
            </View>

            
            <View style={styles.bottomContainer}>
                {/* <TouchableOpacity>
                    <Icon name="arrow-left" size={30} color="#000" />
                </TouchableOpacity> */}

                <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.continueButtonText}>Got it!</Text>
                </TouchableOpacity>
            </View>


        </View>
    );

};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexGrow: 1,
        // paddingHorizontal: 20,
        // paddingTop: 40,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
    textCheck: {
        // height: 160,
        // width: 160,
        // backgroundColor: 'red',
        color: 'pink',
        fontSize: 90,
        // textColor: 'blue',
    },
    socialIconImage: {
        // width: 170,
        height: 170,
        resizeMode: 'contain',
        marginBottom: -40,
    },  
    bigCaption: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000',
        // marginBottom: 30,
        marginTop: -60,
      },
    smallCaption: {
        fontSize: 13,
        justifyContent: 'center',
        alignItems: 'center',

    },
    smallDescription: {
        justifyContent: 'center',
        alignItems: 'center', 
        marginTop: -100,
    },
    bottomContainer: {
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        // bottom: -230,
        // paddingHorizontal: 20,
        // paddingBottom: 20,
        // alignItems: 'flex-end',
        // alignContent: 'center',
      
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        // alignItems: 'center',
        // position: 'absolute',

        // bottom: 10,
        // left: 20,
        // right: 20,
        marginBottom: 30,
      },
      continueButton: {
        // backgroundColor: '#D5715B',
        // padding: 15,
        // borderRadius: 5,
        // alignItems: 'center',
    
        backgroundColor: '#D5715B',
        padding: 15,
        paddingLeft:120,
        paddingRight:120,
        borderRadius: 50,
        alignItems: 'center',
    },
    continueButtonText: {
        
        color: '#fff',
        fontSize: 18,
    
      },
});


export default SignupConfirmation5;