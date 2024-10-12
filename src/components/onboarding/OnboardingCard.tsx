import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native';
import { ResizeMode, Video } from 'expo-av'; 
import { LinearGradient } from 'expo-linear-gradient';
import CreditCard from '../CreditCard';


const OnboardingCard = (
  { backgroundSource, isVideo, activeSection } : 
  { backgroundSource: any, isVideo: boolean, activeSection: number }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={isVideo ? null : backgroundSource} 
        style={styles.background}
        resizeMode={ResizeMode.CONTAIN}
      >
        {isVideo && (
          <Video
            source={backgroundSource}
            style={styles.background}
            resizeMode={ResizeMode.COVER}
            shouldPlay={true}
            isMuted={true}
            isLooping={true}
          />
        )}
        {
          (!isVideo && activeSection == 1) && (
            <>
              <LinearGradient
                colors={[
                  'rgba(245, 245, 245, 0.5)', 
                  '#f5f5f5'
                ]}
                style={styles.fadeEffect}
              />
              <LinearGradient 
              colors={[
                'rgba(245, 245, 245, 0.75)', 
                'rgba(245, 245, 245, 0.95)', 
                '#f5f5f5'
              ]} 
              style={styles.fadeEffect2} />
              <View style={styles.creditcard}>
                <CreditCard />
              </View>
            </>
          )
        }
        {
          (!isVideo && activeSection == 3) && (
            <>
              <LinearGradient
                colors={[
                  'rgba(245, 245, 245, 0.5)', 
                  '#f5f5f5'
                ]}
                style={styles.fadeEffect}
              />
              <LinearGradient colors={[
                'rgba(245, 245, 245, 0.75)', 
                'rgba(245, 245, 245, 0.95)', 
                '#f5f5f5'
                ]} style={styles.fadeEffect2} />
              <View style={styles.notifications}>
                <Image alt='notifications' source={require('../../../assets/images/notifications.png')} />
              </View>
            </>
          )
        }
        <View style={styles.overlay1} />
        <View style={styles.blurEffect} />
        <View style={styles.textContainer}>
          <Text style={[styles.title, { color: isVideo ? "white" : "#3B423D" }]}>Elevate Your Financial IQ.</Text>
          <Text style={[styles.subtitle, { color: isVideo ? "white" : "#3B423D" }]}>Stay ahead in your financial journey</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 80,
    left: 24,
    width: 345,
    height: 549,
    borderRadius: 34,
    overflow: 'hidden',
    backgroundColor: '#f5f5f5',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  blurEffect: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 411.73,
    height: 548,
    backgroundColor: '#f5f5f5',
    opacity: 0.05, 
  },
  overlay1: {
    position: 'absolute',
    top: 0,
    left: 22,
    width: 354,
    height: 550,
    backgroundColor: '#00E18705',
  },
  fadeEffect: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  fadeEffect2: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: "100%",
    height: 250,
  },
  creditcard: {
    position: 'absolute',
    top: 25,
    left: 10,
    width: 345,
    height: 549,
    transform: [{ scale: 0.8 },{ rotate: '-5deg' }],
  },
  notifications: {
    position: 'absolute',
    top: 215,
    left: 0,
    width: 250,
    height: 350,
    transform: [{ scale: 0.9 }],
  },
  textContainer: {
    position: 'absolute',
    top: 362,
    left: 16,
    width: 314,
    height: 86, 
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    fontFamily: 'Outfit', 
    lineHeight: 27.84,
    textAlign: 'center',
    color: '#fff',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Outfit', 
    lineHeight: 16.24,
    textAlign: 'center',
    color: '#fff',
  },
});

export default OnboardingCard;
