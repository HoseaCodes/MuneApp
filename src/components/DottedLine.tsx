import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function DottedLine() {
  const numberOfDots = 15; 
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#F2F7F3', '#CEE0D0', '#F2F7F3']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.line}
      />
      <View style={styles.dottedLine}>
        {Array.from({ length: numberOfDots }).map((_, index) => (
          <View key={index} style={styles.dot} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    opacity: 1,
  },
  line: {
    width: '100%',
    position: 'absolute',
    zIndex: 1,
  },
  dottedLine: {
    flexDirection: 'row',
    justifyContent: 'center', 
    alignContent: 'center',
    gap: 5, 
    alignItems: 'center',
  },
  dot: {
    width: 15, 
    height: 2, 
    borderRadius: 5, 
    backgroundColor: '#CEE0D0',

  },
});
