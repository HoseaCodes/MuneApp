import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import TransactionScreen from '../../screens/TransactionScreen';
import PhoneSignupScreen from '../../screens/auth/PhoneSignupScreen';
import MFAScreen from '../../screens/auth/MFAScreen';
import ChangePasswordScreen from '../../screens/auth/ChangePasswordScreen';
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

  const renderSignUpStep = () => {
    switch (step) {
      case 1:
        return <SignupComponent screen={screen} nextStep={nextStep} handleInputChange={handleInputChange} navigation={navigation} />;
      case 2:
        return <PhoneSignupScreen nextStep={nextStep} prevStep={prevStep} handleInputChange={handleInputChange} navigation={navigation} />;
      case 3:
        return <MFAScreen nextStep={nextStep} prevStep={prevStep} handleInputChange={handleInputChange} navigation={navigation} route={route} />;
      case 4:
        return <ChangePasswordScreen nextStep={nextStep} prevStep={prevStep} handleInputChange={handleInputChange} navigation={navigation} />;
      case 5:
        return <SignupDetailsScreen nextStep={nextStep} prevStep={prevStep} formData={formData} handleInputChange={handleInputChange} navigation={navigation} />;
      case 6:
        return <WelcomeScreen nextStep={nextStep} prevStep={prevStep} navigation={navigation} />;
      default:
        return null;
    }
  };

  const renderLoginStep = () => {
    switch (step) {
      case 1:
        return <SignupComponent screen={screen} nextStep={nextStep} handleInputChange={handleInputChange} navigation={navigation} />;
      case 2:
        return <PhoneLoginScreen nextStep={nextStep} prevStep={prevStep} handleInputChange={handleInputChange} navigation={navigation} />;
      case 3:
        return <MFAScreen nextStep={nextStep} prevStep={prevStep} handleInputChange={handleInputChange} navigation={navigation} route={route} />;
      default:
        return <TransactionScreen />;
    }
  }

  return (
    <View style={styles.container}>
      {
        // screen === 'Signup' ? renderSignUpStep() : renderLoginStep()
        renderLoginStep()
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  }
});

export default AuthComponent;
