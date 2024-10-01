import { View, Text, FlatList, Button } from 'react-native'
import React from 'react'
import { OnboardingCard } from './OnboardingCard'
import SignUpButton from '../SignUpButton';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

export default function OnboardingComponent({navigation}: {navigation: any}) {
    return (
        <StyledView className="flex flex-col justify-evenly p-4 bg-white h-full">
            <StyledText className="text-4xl font-bold text-center mb-6">Logo</StyledText>
            <StyledText className="text-base text-center mb-4">Progress Bar</StyledText>
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
        </StyledView>
    )
}