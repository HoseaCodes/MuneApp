import React from 'react';
import { View, StyleSheet } from 'react-native';

const Line = () => {
    return (
        <View style={styles.line} />
    );
};

const styles = StyleSheet.create({
    line: {
        width: 50,
        height: 50, 
        transform: [{ rotate: '90deg' }],
        borderLeftWidth: 3, 
        borderColor: '#D9D9D9', 
    },
});

export default Line;
