import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const PhoneLoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

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

    const validatePassword = (input) => {
        if (input.length < 6) {
            setPasswordError('Password must be at least 6 characters.');
            return false;
        } else {
            setPasswordError('');
            return true;
        }
    };

    const handleEmailChange = (input) => {
        setEmail(input);
        validateEmailOrPhone(input);
    };

    const handlePasswordChange = (input) => {
        setPassword(input);
        validatePassword(input);
    };

    const isFormValid = () => {
        return validateEmailOrPhone(email) && validatePassword(password);
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <View>
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

                <View>
                    <Text style={styles.label}>Password</Text>
                    <View style={styles.passwordContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your password"
                            placeholderTextColor="#3B423D"
                            secureTextEntry={!isPasswordVisible}
                            value={password}
                            onChangeText={handlePasswordChange}
                        />
                        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
                            <Ionicons
                                name={isPasswordVisible ? 'eye' : 'eye-off'}
                                size={24}
                                color="#949895"
                            />
                        </TouchableOpacity>
                        {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
                    </View>
                    <Text style={styles.forgotPassword}>Forgot Password?</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.continueButton}
                onPress={isFormValid}
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
    inputContainer: {
        gap: 24,
        opacity: 1,
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
        width: 347,
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
