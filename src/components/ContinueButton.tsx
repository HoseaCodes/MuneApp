import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent } from 'react-native'
import React from 'react'

export default function ContinueButton({ onPress }: { onPress: (event: GestureResponderEvent) => void }) {
    return (
        <TouchableOpacity style={styles.continueButton} onPress={onPress}>
                <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    continueButton: {
        width: 345,
        height: 56,
        borderRadius: 14,
        backgroundColor: '#19A530',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 24,
    },
    continueButtonText: {
        fontFamily: 'Poppins',
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 24,
        textAlign: 'center',
        color: '#FFF',
    },
});