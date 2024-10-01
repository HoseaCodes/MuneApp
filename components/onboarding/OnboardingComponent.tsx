import { View, Text, FlatList, Button } from 'react-native'
import React from 'react'
import { OnboardingCard } from './OnboardingCard'
import SignUpButton from '../SignUpButton';
import { styled } from 'nativewind';

export default function OnboardingComponent({navigation}: {navigation: any}) {
    return (
        <View style={{display: 'flex', flexDirection: "column", justifyContent: "space-evenly"}}>
            <Text>Logo</Text>
            <Text>progress bar</Text>
            <FlatList
                data={[{etag: '1', title: 'title', description: 'description'}, {etag: '2', title: 'title', description: 'description'}]}
                keyExtractor={(item) => item.etag}
                renderItem={OnboardingCard}
            />
            <SignUpButton onPress={() => navigation.navigate('Signup')}
            />
            <Button
                title="Log in"
                onPress={() => navigation.navigate('Login')}
            />
        </View>
    )
}