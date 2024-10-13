import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '../components/Header';
import AntDesign from '@expo/vector-icons/AntDesign';
import Progressbar from '../components/Progressbar';

const PhoneLoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

 
    const validateEmailOrPhone = (input) => {
        const phoneRegex = /^\d{2}/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (phoneRegex.test(input)) {
            setEmailError('');
            return true;
        } else if (emailRegex.test(input)) {
            setEmailError('');
            return true;
        } else {
            setEmailError('Enter a valid phone number or email address.');
            return false;
        }
    };

    const handleEmailChange = (input) => {
        setEmail(input);
        validateEmailOrPhone(input);
    };

    const handleIsFormValid = () => {
        if (validateEmailOrPhone(email)) {
            setIsFormValid(true);
            navigation.navigate('MFA');
        } else {
            setIsFormValid(false);
        }
    };

    return (
        <View style={styles.container}>
            <View>
                <Header
                    title=""
                    IconType={AntDesign}
                    iconLeft='left' iconRight='questioncircleo' />
                <View style={styles.inputFields}>
                    <Text style={styles.label}>Phone Number or Email Address</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your phone or email"
                        placeholderTextColor="#3B423D"
                        value={email}
                        onChangeText={handleEmailChange}
                        keyboardType="email-address"
                    />
                    {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

                </View>
            </View>
            <Progressbar activeSteps={1} />
            <TouchableOpacity style={styles.continueButton}
                // onPress={handleIsFormValid}
                // disabled={!isFormValid && !email && !password}
                onPress={() => navigation.navigate('MFA')}
            >
                <Text style={styles.continueButtonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#F2F7F3',
        height: '100%',
        paddingHorizontal: 23,
        paddingVertical: 80,
    },
    inputFields: {
        paddingVertical: 60,
        marginHorizontal: 10,
        maxWidth: 345
    },
    label: {
        fontFamily: 'Poppins',
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 24,
        textAlign: 'left',
        color: '#3B423D',
        marginBottom: 8,
    },
    input: {
        width: 327,
        height: 56,
        borderRadius: 14,
        borderWidth: 2,
        borderColor: '#CEE0D0',
        backgroundColor: '#F2F7F3',
        paddingHorizontal: 16,
    },
    passwordContainer: {
        position: 'relative',
        width: 347,
        height: 56,
    },
    eyeIcon: {
        position: 'absolute',
        top: 16,
        right: 18,
    },
    forgotPassword: {
        width: 347,
        fontFamily: 'Poppins',
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 24,
        textAlign: 'right',
        color: '#949895',
        marginTop: 8,
    },
    continueButton: {
        width: 345,
        height: 56,
        borderRadius: 14,
        backgroundColor: '#19A530',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 24,
    },
    continueButtonText: {
        fontFamily: 'Poppins',
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 24,
        textAlign: 'center',
        color: '#FFF',
    },
});

export default PhoneLoginScreen;
