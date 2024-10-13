import React, { useState } from 'react'
import { View, Text, Button, PanResponder } from 'react-native';
import OnboardingCard from './OnboardingCard'
import ProgressBar from './Progressbar';

export default function OnboardingComponent({navigation}: {navigation: any}) {
    const [activeSection, setActiveSection] = useState(0);
    const cards = [
        {
            src: require('../../../assets/videos/black-man-paying-with-credit-card-and-cell-phone-s-2023-11-27-05-33-05-utc.mp4'),
            isVideo: true,
        }, 
        {
            src: require('../../../assets/images/iPhone 14 Pro.png'),
            isVideo: false,
        },
        {
            src: require('../../../assets/videos/mun-eprototypevideo desktop.mp4'),
            isVideo: true,
        },
        {
            src: require('../../../assets/images/Mockup.png'),
            isVideo: false,
        }
    ]

    const nextSection = () => {
        setActiveSection((prev) => (prev < cards.length - 1 ? prev + 1 : prev));
    };

    const backSection = () => {
        setActiveSection((prev) => (prev > 0 ? prev - 1 : prev));
    };

    // Handle swipe gestures
    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: (evt, gestureState) => {
            const { dx } = gestureState; // dx is the change in x direction
            if (dx < -50) {
                // Swipe left - go to next section
                nextSection();
            } else if (dx > 50) {
                // Swipe right - go to previous section
                backSection();
            }
        },
        onPanResponderRelease: () => {
            // This can be used to handle anything when the user releases the touch
        },
    });


    return (
        <View style={{
            display: 'flex', 
            flexDirection: "column", 
            justifyContent: "space-evenly",
            padding: 20,
            alignItems: "center",
            gap: 20,
            backgroundColor: 'white',
            }}
            {...panResponder.panHandlers}
            >
            <ProgressBar activeSection={activeSection + 2} totalSections={cards.length} />
            <OnboardingCard
                backgroundSource={cards[activeSection].src}
                isVideo={cards[activeSection].isVideo}
            />
            {/* <Button
                title="Sign Up"
                onPress={() => navigation.navigate('Signup')}
            /> */}
            <View style={{ paddingVertical: 40}}>
                <Button

                    title="Log in"
                    onPress={() => navigation.navigate('Login')}
                />
                <Button
                    title="Dashboard"
                    onPress={() => navigation.navigate('Dashboard')}
                />
                <Button
                    title="TransactionDetails"
                    onPress={() => navigation.navigate('TransactionDetails')}
                />
                <Button
                    title="Profile"
                    onPress={() => navigation.navigate('Profile')}
                />

            </View>
        </View>
    )
}