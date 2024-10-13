import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Image, ImageURISource } from 'react-native';
import { AVPlaybackSource, ResizeMode, Video } from 'expo-av';
import { LinearGradient } from 'expo-linear-gradient';
import CreditCard from '../CreditCard';

const OnboardingCard = (
  { backgroundSource, isVideo, activeSection } : 
  { backgroundSource: ImageURISource | AVPlaybackSource, isVideo: boolean, activeSection: number }) => {
  
  return (
    <View style={styles.container}>
      {isVideo ? (
        <Video
          source={backgroundSource as AVPlaybackSource}
          style={styles.background}
          resizeMode={ResizeMode.COVER}
          shouldPlay={true}
          isMuted={true}
          isLooping={true}
        />
      ) : (
        <ImageBackground
          source={backgroundSource as ImageURISource} 
          style={[
            styles.background,
            { transform: [
              { scale: 1.2 },
              { translateY: 60 },
            ] }
          ]}
          resizeMode={ResizeMode.CONTAIN}
        >
          {[1, 3].includes(activeSection) && (
            <>
              <LinearGradient
                colors={['rgba(245, 245, 245, 0.5)', '#f5f5f5']}
                style={styles.fadeEffect}
              />
              <LinearGradient 
                colors={[
                  'rgba(245, 245, 245, 0.75)', 
                  'rgba(245, 245, 245, 0.95)', 
                  '#f5f5f5'
                ]}
                style={styles.fadeEffect2}
              />
              <View style={activeSection === 1 ? styles.creditcard : styles.notifications}>
                {activeSection === 1 ? (
                  <CreditCard />
                ) : (
                  <Image alt="notifications" source={require('../../../assets/images/notifications.png')} />
                )}
              </View>
            </>
          )}
        </ImageBackground>
      )}
      <View style={styles.overlay1} />
      <View style={styles.blurEffect} />
      <View style={styles.textContainer}>
        <Text style={[styles.title, { color: isVideo ? "white" : "#3B423D" }]}>Elevate Your Financial IQ.</Text>
        <Text style={[styles.subtitle, { color: isVideo ? "white" : "#3B423D" }]}>Stay ahead in your financial journey</Text>
      </View>
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
    transform: [{ scale: 0.79 },{ rotate: '-5deg' }],
  },
  notifications: {
    position: 'absolute',
    top: 195,
    left: 5,
    width: 250,
    height: 350,
    transform: [{ scale: 0.80 }],
  },
  textContainer: {
    position: 'absolute',
    top: 450,
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
