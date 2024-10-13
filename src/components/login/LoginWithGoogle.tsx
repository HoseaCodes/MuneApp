// LoginWithGoogle.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { AntDesign } from '@expo/vector-icons';


WebBrowser.maybeCompleteAuthSession();

const LoginWithGoogle = ({navigation}:{navigation:any}) => {
 

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: '522232928238-srg60vjf8dcolgqu87vmj6lv0reubu2q.apps.googleusercontent.com',
    // iosClientId: 'YOUR_IOS_CLIENT_ID',
    // expoClientId: 'YOUR_EXPO_CLIENT_ID',
  });

  React.useEffect(() => {
    if (response?.type === 'success') {
    //   const { authentication } = response;
      // Handle successful authentication here
      // For example, navigate to the home screen or store tokens
      navigation.navigate('Dashboard');
    }
  }, [response]);

  return (
    <TouchableOpacity
      style={styles.signInButton}
      disabled={!request}
      onPress={() => {
        promptAsync();
      }}
    >
      <AntDesign name="google" size={24} color="black" style={styles.icon} />
      <Text style={styles.signInText}>Sign in with Google</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  signInButton: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 320,
    height: 56,
    backgroundColor: '#F2F7F3',
    borderColor: '#CEE0D0',
    borderWidth: 2,
    borderRadius: 14,
    justifyContent: 'center',
    marginBottom: 12,
  },
  icon: {
    marginRight: 8,
  },
  signInText: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '500',
    color: '#1D251F',
  },
});

export default LoginWithGoogle;
