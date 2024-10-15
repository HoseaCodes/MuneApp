import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import PhoneSignupScreen from '../../screens/auth/PhoneSignupScreen';
import MFAScreen from '../../screens/auth/MFAScreen';
import ChangePassowrdScreen from '../../screens/auth/ChangePassowrdScreen';
import WelcomeScreen from '../../screens/auth/WelcomeScreen';
import SignupDetailsScreen from '../../screens/auth/SignupDetailsScreen';
import PhoneLoginScreen from '../../screens/auth/PhoneSignupScreen';
import SignupComponent from './SignupComponent';

type AuthStackParamList = {
  Signup: undefined;
  Login: undefined;
  MFAScreen: { phoneNumber: string };
  ChangePasswordScreen: undefined;
  SignupDetailsScreen: { details: object };
  WelcomeScreen: undefined;
};

type AuthComponentProps = {
  navigation: NativeStackNavigationProp<AuthStackParamList>;
  route: RouteProp<AuthStackParamList, keyof AuthStackParamList>;
  screen: string;
};

const AuthComponent = ({ navigation, screen, route }: AuthComponentProps) => {
  const [step, setStep] = React.useState(1);
  const [formData, setFormData] = React.useState({
    method: '',
    phoneNumber: '',
    mfaCode: '',
    password: '',
    details: {},
  });

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const renderAuthSteps = () => {
    switch (step) {
      case 1:
        return <SignupComponent screen={screen} nextStep={nextStep} handleInputChange={handleInputChange} navigation={navigation} />;
      case 2:
        return <PhoneSignupScreen nextStep={nextStep} prevStep={prevStep} handleInputChange={handleInputChange} navigation={navigation} />;
      case 3:
        return <MFAScreen nextStep={nextStep} prevStep={prevStep} handleInputChange={handleInputChange} navigation={navigation} route={route} />;
      case 4:
        return screen === 'Signup' && <ChangePassowrdScreen nextStep={nextStep} prevStep={prevStep} handleInputChange={handleInputChange} navigation={navigation} />;
      case 5:
        return screen === 'Signup' && <SignupDetailsScreen nextStep={nextStep} prevStep={prevStep} formData={formData} handleInputChange={handleInputChange} navigation={navigation} />;
      case 6:
        return screen === 'Signup' && <WelcomeScreen nextStep={nextStep} prevStep={prevStep} navigation={navigation} />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {renderAuthSteps()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
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

export default AuthComponent;
