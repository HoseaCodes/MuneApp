import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { ResizeMode, Video } from 'expo-av'; 

const OnboardingCard = ({ backgroundSource, isVideo }: { backgroundSource: any, isVideo: boolean }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={isVideo ? null : backgroundSource} 
        style={styles.background}
        resizeMode="cover"
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
        <View style={styles.overlay1} />
        <View style={styles.blurEffect} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Elevate Your Financial IQ.</Text>
          <Text style={styles.subtitle}>Stay ahead in your financial journey</Text>
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
  textContainer: {
    position: 'absolute',
    top: 462,
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
