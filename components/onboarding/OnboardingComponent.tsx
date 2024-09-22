import React, { useState } from 'react'
import { View, Text, FlatList, Button } from 'react-native'
import { OnboardingCard } from './OnboardingCard'
import ProgressBar from './Progressbar';

export default function OnboardingComponent({navigation}: {navigation: any}) {
    const [activeSection, setActiveSection] = useState(2);

    const nextSection = () => {
        setActiveSection((prev) => (prev < 5 ? prev + 1 : 5));
    };

    const backSection = () => {
        setActiveSection((prev) => (prev > 2 ? prev - 1 : 2));
    };


    return (
        <View style={{
            display: 'flex', 
            flexDirection: "column", 
            justifyContent: "space-evenly",
            padding: 20,
            alignItems: "center",
            gap: 20
            }}>
            <Text>Logo</Text>
            <ProgressBar activeSection={activeSection} />
            <View style={{ marginVertical: 20 }}>
                <Button title="Next Section" onPress={nextSection} />
                <Button title="Back Section" onPress={backSection} />
            </View>
            <FlatList
                data={[{etag: '1', title: 'title', description: 'description'}, {etag: '2', title: 'title', description: 'description'}]}
                keyExtractor={(item) => item.etag}
                renderItem={OnboardingCard}
            />
            <Button
                title="Sign Up"
                onPress={() => navigation.navigate('Signup')}
            />
            <Button
                title="Log in"
                onPress={() => navigation.navigate('Login')}
            />
        </View>
    )
}