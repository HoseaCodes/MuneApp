import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import DetailsModal from '../../components/transactions/DetailsModal';
import { BlurView } from 'expo-blur';
import Header from '../../components/Header';
import { usertransactions, userpurchases, userdetails } from '../../constants/TestData';

export default function TransactionDetailScreen() {
    const [isModalVisible, setModalVisible] = React.useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    // const type = 'transactions';
    const type = 'purchases';
    const transactions = type === 'transactions' ? usertransactions : userpurchases;
    return (
        <SafeAreaView style={styles.container}>
            {isModalVisible && (
                <BlurView intensity={15} tint="dark" style={styles.overlay} />
            )}
            <Header
                title="Transaction Details"
                IconType={AntDesign}
                iconLeft='left' iconRight='questioncircleo' />
            <View style={type === 'purchases' ? styles.userPurchaseContainer: styles.userContainer}>
                <Image
                    resizeMode='cover'
                    style={styles.userImage}
                    source={type === 'purchases' ? transactions[0].image : transactions[0].user.avatar} />
                <Text style={styles.userName}>{type === 'purchases' ? transactions[0].merchant : transactions[0].user.name}</Text>
                <View style={styles.userInfo}>
                    {
                        type === 'transactions' && (
                            <>
                                <Text style={styles.username}>{transactions[0].user.username}</Text>
                                <Text style={styles.createdDate}>{transactions[0].user.createdDate}</Text>
                            </>
                        )
                    }
                </View>
                <Text style={styles.amount}>{type === 'purchases' ? transactions[0].amount : transactions[0].user.amount}</Text>
                {
                    type === 'purchases' && (
                        <Text style={styles.purchaseCreatedDate}>{transactions[0].date}</Text>
                    )
                }
            </View>
            <View style={styles.buttonGroup}>
                {
                    type === 'transactions' && (        
                        <TouchableOpacity>
                            <Text style={styles.sendButton}>Send Again?</Text>
                        </TouchableOpacity>
                    )
                }
                <TouchableOpacity onPress={toggleModal} style={styles.completedButton}>
                    <Image
                        resizeMode='cover'
                        source={require('../../assets/images/check.png')} />
                    <Text style={styles.completedButtonText}>Completed</Text>
                </TouchableOpacity>
                <DetailsModal data={userdetails} type={type} isModalVisible={isModalVisible} toggleModal={toggleModal} onClose={toggleModal} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(100px)',
        zIndex: 1,
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
    },
    headerText: {
        fontSize: 20,
        fontWeight: '700',
        lineHeight: 30,
        color: '#3B423D',
        textAlign: 'center',
    },
    userContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 16,
    },
    userPurchaseContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 16,
        marginTop: -150,
    },
    userImage: {
        width: 132,
        height: 132,
        borderRadius: 34,
        resizeMode: 'cover',
    },
    userName: {
        fontSize: 32,
        fontWeight: '700',
        lineHeight: 48,
        color: '#1D251F',
    },
    userInfo: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 200,
        gap: 8,
    },
    username: {
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 21,
        color: '#949895',
    },
    createdDate: {
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 21,
        color: '#949895',
    },
    purchaseCreatedDate: {
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 21,
        color: '#949895',
        marginTop: -32,
    },
    amount: {
        fontSize: 48,
        fontWeight: '700',
        lineHeight: 72,
        color: '#3B423D',
        paddingVertical: 16,
    },
    buttonGroup: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 16,
        marginBottom: 32,
    },
    sendButton: {
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 24,
        color: '#19A530',
    },
    completedButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        width: 345,
        height: 56,
        borderRadius: 14,
        backgroundColor: '#19A530',
    },
    completedButtonText: {
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 24,
        color: '#FFFFFF',
    },
})