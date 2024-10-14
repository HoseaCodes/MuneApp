import React from 'react'
import { Image, View, Text, StyleSheet } from 'react-native'
import Progressbar from '../../components/Progressbar';
import ContinueButton from '../../components/ContinueButton';

export default function CompletedSignupScreen({ nextStep, prevStep, navigation }) {
  return (
    <View style={styles.container}>
            <View>
               <Text style={styles.title}>Welcome to</Text>
               <Image source={require('../../../assets/images/green-logo.png')} style={styles.logo} />
            </View>
            <View>
              <Progressbar activeSteps={5} />
              <ContinueButton onPress={() => navigation.navigate('Dashboard')} />
            </View>
        </View>
  )
}

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
    title: {
        paddingTop: 200, 
        fontFamily: 'Poppins',
        fontSize: 40,
        fontWeight: '700',
        lineHeight: 36,
        textAlign: 'center',
        color: '#3B423D',
    },
    logo: {
        width: 165,
        height: 26,
        alignSelf: 'center',
        marginTop: 20,
    },
});