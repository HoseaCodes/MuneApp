import { View, Text } from 'react-native'
import React from 'react'

export const OnboardingCard = ({ item }: { item: any }) => (
    <View>
        <Text>Rendered</Text>
        <Text>{item.title}</Text>
    </View>
);