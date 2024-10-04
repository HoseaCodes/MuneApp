import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Image } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

export default function CreditCard() {
    return (
        <View style={styles.container}>
            <ImageBackground 
                style={styles.imageContainer} 
                source={require('../assets/images/Rectangle.png')}
                resizeMode="cover" 
            >
                <View style={styles.cardContent}>
                    <View style={styles.cardContainer}>
                        <View style={styles.iconView}>
                            <Image style={styles.icon} source={require('../assets/images/block.png')} resizeMode="contain" />
                            <Image style={styles.icon} source={require('../assets/images/chain.png')} resizeMode="contain" />
                            <Image style={styles.icon} source={require('../assets/images/money.png')} resizeMode="contain" />
                        </View>
                        <View>
                            <Feather name="eye-off" size={18} color="#F2F7F3" />
                        </View>
                    </View>
                    <View style={styles.cardInfoContainer}>
                        <View style={styles.cardNumberContainer}>
                            <Text style={styles.cardNumber}>****</Text>
                            <Text style={styles.cardNumber}>****</Text>
                            <Text style={styles.cardNumber}>****</Text>
                            <Text style={styles.cardNumber}>0014</Text>
                        </View>
                        <View style={styles.cvvExpiryContainer}>
                            <View style={styles.cvvContainer}>
                                <Text style={styles.cvvLabel}>CVV</Text>
                                <Text style={styles.cvvText}>***</Text>
                            </View>
                            <View style={styles.expiryContainer}>
                                <Text style={styles.expiryLabel}>Exp.</Text>
                                <Text style={styles.expiryText}>**/**</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>  
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
    },
    imageContainer: {
        position: "relative",
        width: 345,
        height: 202,
        backgroundColor: "rgba(29, 191, 56, 1)",
        borderRadius: 15.58503246307373,
    },
    cardContent: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        padding: 12,
    },
    cardContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 12,
    },
    iconView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    icon: {
        transform: [{ scale: 0.70 }],
        width: 30, 
        height: 30,
    }, 
    cardInfoContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 12,
    },
    cardNumberContainer: {
        flexDirection: 'row',
        gap: 12,
    },
    cardNumber: {
        width: "auto",
        fontFamily: 'Poppins',
        fontSize: 14,
        fontWeight: '500',
        letterSpacing: -0.02,
        color: '#F2F7F3',
        textAlign: 'left',
        padding: 2,
        borderRadius: 5,
    },
    cvvExpiryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 16,
    },
    cvvContainer: {
        width: "auto",
        height: 33.54,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    cvvLabel: {
        fontSize: 14,
        fontWeight: '700',
        fontFamily: 'Poppins',
        color: '#F2F7F4',
        textAlign: 'left',
        padding: 2,
        borderRadius: 5,
    },
    cvvText: {
        fontSize: 14,
        fontWeight: '700',
        fontFamily: 'Poppins',
        color: '#F2F7F4',
        textAlign: 'left',
        padding: 2,
        borderRadius: 5,
        marginTop: 4,
    },
    expiryContainer: {
        width: "auto",
        height: 33.54,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    expiryLabel: {
        fontSize: 14,
        fontWeight: '700',
        fontFamily: 'Poppins',
        color: '#F2F7F4',
        textAlign: 'left', 
        padding: 2,
        borderRadius: 5,
    },
    expiryText: {
        fontSize: 14,
        fontWeight: '700',
        fontFamily: 'Poppins',
        color: '#F2F7F4',
        textAlign: 'left',
        padding: 2,
        borderRadius: 5,
        marginTop: 4,
    },
});
