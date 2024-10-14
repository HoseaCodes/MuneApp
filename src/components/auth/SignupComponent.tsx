import React from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ResizeMode, Video } from 'expo-av';
import Svg, { Path } from 'react-native-svg';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { NavigationProp } from '@react-navigation/native';
interface SignupComponentProps {
  nextStep: () => void;
  handleInputChange: (input: string, value: string) => void;
  navigation: NavigationProp<any>;
  screen: string;
}


export default function SignupComponent({ nextStep, handleInputChange, navigation, screen }: SignupComponentProps) {
    const videoRef = React.useRef(null);
    return (
        <>
          <Video
          ref={videoRef}
          source={require('../../../assets/videos/black-man-paying-with-credit-card-and-cell-phone-s-2023-11-27-05-33-05-utc.mp4')}
          style={styles.videoBackground}
          resizeMode={ResizeMode.COVER}
          shouldPlay
          isMuted
          isLooping
        />
        <Image style={styles.logo} source={require('../../../assets/images/logo.png')} />
        <View style={styles.overlay} />
  
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Svg width="13" height="19" viewBox="0 0 13 19" fill="none">
            <Path
              d="M10.6741 18.25L0.933594 9.5L10.6741 0.75L12.3664 2.585L4.39289 9.5L12.3664 16.415L10.6741 18.25Z"
              fill="#000"
            />
          </Svg>
        </TouchableOpacity>
  
        <View style={styles.welcomeContainer}>
          <View style={styles.line} />
          <Text style={styles.welcomeText}>{screen === "Signup" ? "Get Started" : "Welcome back!" }</Text>
  
          <View style={styles.buttonsContainer}>
            <View style={styles.signInButton}>
              <View style={styles.iconTextContainer}>
                <View style={styles.icon}>
                  <AntDesign name="google" size={24} color="black" />
                </View>
                <Text style={styles.signInText}>{screen === "Signup" ? "Sign up with Google" : "Sign in with Google" }</Text>
              </View>
            </View>
            <View style={styles.signInFacebook}>
              <View style={styles.iconTextContainer}>
                <View style={styles.icon}>
                  <FontAwesome name="facebook-f" size={24} color="white" />
                </View>
                <Text style={styles.signInDarkText}>{screen === "Signup" ? "Sign up with Facebook" : "Sign in with Facebook" }</Text>
              </View>
            </View>
            <View style={styles.signInApple}>
              <View style={styles.iconTextContainer}>
                <View style={styles.icon}>
                  <AntDesign name="apple1" size={24} color="white" />
                </View>
                <Text style={styles.signInDarkText}>{screen === "Signup" ? "Sign up with Apple" : "Sign in with Apple" }</Text>
              </View>
            </View>
            <View style={styles.signInPhoneButton}>
              <TouchableOpacity onPress={screen === "Signup" ? () => navigation.navigate('PhoneSignup') : () => navigation.navigate('PhoneLogin')}>
                  <Text style={styles.signInPhoneText}>{screen === "Signup" ? "Sign up with Phone Number" : "Sign in with Phone Number" }</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        </>
      )
}

const styles = StyleSheet.create({
    videoBackground: {
      width: 394,
      height: 627,
      top: -57,
      left: -1,
      borderRadius: 15.99,
    },
    logo: {
      position: 'absolute',
      width: 127,
      height: 20,
      top: 93,
      left: 24,
    },
    overlay: {
      position: 'absolute',
      width: 470.21,
      height: 625.83,
      top: 0,
      left: -28.55,
      backgroundColor: 'rgba(0, 0, 0, 0.05)',
    },
    backButton: {
      position: 'absolute',
      width: 44,
      height: 44,
      top: 365,
      left: 24,
      padding: 13,
      borderRadius: 14,
      backgroundColor: '#FFFFFF',
      justifyContent: 'center',
      alignItems: 'center',
    },
    welcomeContainer: {
      position: 'absolute',
      width: 393,
      height: 405,
      top: 449,
      backgroundColor: '#F2F7F3',
      borderRadius: 36,
      padding: 16,
    },
    line: {
      width: 50,
      height: 0,
      borderWidth: 3,
      borderColor: '#D9D9D9',
      alignSelf: 'center',
      marginBottom: 16,
    },
    welcomeText: {
      fontSize: 24,
      fontWeight: '700',
      fontFamily: 'Poppins',
      color: '#010A03',
      marginLeft: 25,
      marginVertical: 4,
    },
    buttonsContainer: {
      marginTop: 20,
      paddingLeft: 24,
      paddingRight: 24,
    },
    signInButton: {
      width: 320,
      height: 56,
      backgroundColor: '#F2F7F3',
      borderColor: '#CEE0D0',
      borderWidth: 2,
      borderRadius: 14,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 12,
    },
    signInPhoneButton: {
      width: 320,
      height: 56,
      backgroundColor: '#F2F7F3',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 12,
    },
    signInFacebook: {
      width: 320,
      height: 56,
      backgroundColor: '#0098ED',
      color: '#FFFFFF',
      borderColor: '#CEE0D0',
      borderWidth: 2,
      borderRadius: 14,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 12,
    },
    signInApple: {
      width: 320,
      height: 56,
      backgroundColor: '#010A03',
      color: '#FFFFFF',
      borderColor: '#CEE0D0',
      borderWidth: 2,
      borderRadius: 14,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 12,
    },
    iconTextContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      width: 24,
      height: 24,
      marginRight: 8,
    },
    signInText: {
      fontFamily: 'Poppins',
      fontSize: 16,
      fontWeight: '500',
      color: '#1D251F',
      textAlign: 'center',
    },
    signInPhoneText: {
      fontFamily: 'Poppins',
      fontSize: 16,
      fontWeight: '500',
      color: '#19A530',
      textAlign: 'center',
    },
    signInDarkText: {
      fontFamily: 'Poppins',
      fontSize: 16,
      fontWeight: '500',
      color: '#FFFFFF',
      textAlign: 'center',
    },
  });