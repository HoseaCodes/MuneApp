import { View, StyleSheet } from 'react-native'
import React from 'react'

export default function Progressbar({ activeSteps } : { activeSteps: number }) {
  return (
    <View style={styles.progressContainer}>
        {[...Array(6)].map((_, index) => (
        <View
            key={index}
            style={[
            styles.progressSegment,
            index < activeSteps ? styles.activeSegment : styles.inactiveSegment
            ]}
        />
        ))}
    </View>
  )
}

const styles = StyleSheet.create({
    progressContainer: {
        position: 'absolute',
        top: 665,
        left: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 327,
        marginTop: 20,
    },
    progressSegment: {
        height: 4,
        flex: 1,
    },
    activeSegment: {
        backgroundColor: '#19A530',
    },
    inactiveSegment: {
        backgroundColor: '#CEE0D0',
    }
});
