import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '../components/Header';
import AntDesign from '@expo/vector-icons/AntDesign';
import Progressbar from '../components/Progressbar';

const MFAScreen = ({ navigation }) => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const inputRefs = useRef([]);

    const handleOtpChange = (text, index) => {
        const newOtp = [...otp];

        // If the text is a number and length is valid (1 character)
        if (/^\d$/.test(text)) {
            newOtp[index] = text;
            setOtp(newOtp);

            // Move to the next input field if the current field is filled
            if (index < 3 && text !== '') {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const handleKeyPress = (e, index) => {
        if (e.nativeEvent.key === 'Backspace') {
            const newOtp = [...otp];
            
            // Clear current input if backspace is pressed
            if (otp[index] !== '') {
                newOtp[index] = '';
                setOtp(newOtp);
            } else if (index > 0) {
                // Move back to the previous input and clear it if it's empty
                inputRefs.current[index - 1].focus();
                newOtp[index - 1] = '';
                setOtp(newOtp);
            }
        }
    };

    return (
        <View style={styles.container}>
            <Header
                title=""
                IconType={AntDesign}
                iconLeft='left' iconRight='questioncircleo' />
            <View style={styles.firstContainer}>
                <Text style={styles.verificationText}>Enter Verification Code</Text>
                <Text style={styles.resendText}>Resend?</Text>
            </View>

            <View style={styles.secondContainer}>
                <View style={styles.otpContainer}>
                    {otp.map((value, index) => (
                        <TextInput
                            key={index}
                            style={styles.otpInput}
                            value={value}
                            onChangeText={(text) => handleOtpChange(text, index)}
                            maxLength={1}
                            keyboardType="numeric"
                            ref={(ref) => (inputRefs.current[index] = ref)}
                            onKeyPress={(e) => handleKeyPress(e, index)}
                            autoFocus={index === 0}
                        />
                    ))}
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.codeSentText}>Code sent to 832-123-4567</Text>
                    <Text style={styles.timerText}>50s Remaining</Text>
                </View>
            </View>
            <Progressbar activeSteps={2} />
            <TouchableOpacity style={styles.continueButton}>
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
        paddingHorizontal: 23,
        paddingVertical: 80,
        height: '100%',
    },
    firstContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 60,
        paddingLeft: 30,
    },
    verificationText: {
        fontFamily: 'Poppins',
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 24,
        textAlign: 'left',
        color: '#3B423D',
        width: 189,
        height: 24,
    },
    resendText: {
        fontFamily: 'Poppins',
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 24,
        textAlign: 'left',
        color: '#19A530',
        width: 70,
        height: 24,
    },
    secondContainer: {
        alignItems: 'center',
        paddingTop: 20,
        flex: 1,
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 292,
        marginBottom: 40,
    },
    otpInput: {
        width: 59.5,
        height: 50,
        borderBottomWidth: 4,
        borderColor: '#3B423D',
        textAlign: 'center',
        fontSize: 24,
    },
    textContainer: {
        alignItems: 'center',
    },
    codeSentText: {
        fontFamily: 'Poppins',
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 24,
        textAlign: 'left',
        color: '#3B423D',
        marginBottom: 16,
        width: 219,
    },
    timerText: {
        fontFamily: 'Poppins',
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 24,
        textAlign: 'center',
        color: '#949895',
        width: 219,
    },
    continueButton: {
        flex: 0,
        width: 345,
        height: 56,
        borderRadius: 14,
        backgroundColor: '#19A530',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    continueButtonText: {
        fontFamily: 'Poppins',
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 24,
        textAlign: 'center',
        color: '#F2F7F3',
    },
});

export default MFAScreen;
