import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

const ProgressBar = ({ activeSection, totalSections }: { activeSection: number, totalSections: number }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: activeSection - 1, // Move to the next active section
      duration: 500, // Adjust to control speed of transition
      useNativeDriver: false, // Animating layout properties
    }).start();
  }, [activeSection]);

  const interpolate = (section: number) => {
    return animatedValue.interpolate({
      inputRange: [section - 1, section, section + 1],
      outputRange: [0, 1, 0], // Active line will be 1, surrounding will be interpolated
      extrapolate: 'clamp',
    });
  };

  const glowInterpolate = (section: number) => {
    return animatedValue.interpolate({
      inputRange: [section - 1, section, section + 1],
      outputRange: [0, 10, 0],
      extrapolate: 'clamp',
    });
  };

  const sectionsArray = Array.from({ length: totalSections }, (_, i) => i + 1);

  return (
    <View style={styles.container}>
      {sectionsArray.map((section, index) => (
        <View key={index} style={styles.sectionContainer}>
          <Animated.View
            style={[
              styles.section,
              {
                backgroundColor: '#CEE0D0',
              },
            ]}
          />
          <Animated.View
            style={[
              styles.section,
              {
                backgroundColor: '#1DBF38',
                opacity: interpolate(section),
                shadowColor: '#1DBF38',
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: interpolate(section),
                shadowRadius: glowInterpolate(section),
              },
            ]}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 305,
  },
  sectionContainer: {
    position: 'relative',
    width: 62,
  },
  section: {
    position: 'absolute',
    height: 4,
    width: 62,
    borderRadius: 4,
  },
});

export default ProgressBar;
