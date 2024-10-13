import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '../components/Header';
import AntDesign from '@expo/vector-icons/AntDesign';
import Progressbar from '../components/Progressbar';
import { Ionicons } from '@expo/vector-icons'; 
import ContinueButton from '../components/ContinueButton';

const ChangePassowrdScreen = ({ nextStep, prevStep, handleInputChange, navigation }) => {
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
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

    const handlePasswordChange = (input) => {
        setPassword(input);
        validatePassword(input);
    };

    const handleIsFormValid = () => {
        if (validatePassword(password)) {
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
                    iconLeft='left' iconRight='questioncircleo'
                    navigation={navigation}
                />
                <View style={styles.inputFields}>
                    <Text style={styles.label}>Choose a password</Text>
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
                        <Text style={styles.explainerText}>Must be longer than 8 Characters, Must Contain !, #, &, $, @.</Text>
                        {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
                    </View>
                </View>
            </View>
            <View>
                <Progressbar activeSteps={3} />
                <ContinueButton onPress={() => navigation.navigate('SignupDetails')} />
            </View>
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
        right: 34,
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
    explainerText: {
        fontSize: 14,
        marginTop: 8,
        marginBottom: 8,
        width: 325,
        color: '#3B423D',
    },
});

export default ChangePassowrdScreen;
