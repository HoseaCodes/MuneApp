import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet, PanResponder, Animated } from 'react-native';
import QRCode from 'react-native-qrcode-styled'; // Using react-native-qrcode-styled

const PaymentScreen = ({ navigation }) => {
  const [value, setValue] = useState('');
  const [qrVisible, setQrVisible] = useState(false);
  const toggleX = useRef(new Animated.Value(0)).current;
  const [currentMode, setCurrentMode] = useState('');

  const contacts = [
    { id: '1', name: 'John', avatar: 'https://example.com/avatar1.png' },
    { id: '2', name: 'Jane', avatar: 'https://example.com/avatar2.png' },
    { id: '3', name: 'Sam', avatar: 'https://example.com/avatar3.png' },
    { id: '4', name: 'Alice', avatar: 'https://example.com/avatar4.png' },
  ];

  const handlePress = (num) => setValue((prev) => prev + num);
  const handleBackspace = () => setValue((prev) => prev.slice(0, -1));

  const toggleQrCode = () => setQrVisible(!qrVisible);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        // Limit the sliding within -100 (Request) and 100 (Pay)
        if (gestureState.dx > -100 && gestureState.dx < 100) {
          toggleX.setValue(gestureState.dx);
        }
      },
      onPanResponderRelease: (e, { dx }) => {
        // If slide to the left (-100), go to 'Request Funds' screen, or right (100) to 'Make Payment'
        if (dx < -50) {
          Animated.spring(toggleX, { toValue: -100, useNativeDriver: false }).start();
          setCurrentMode('Request');
          navigation.navigate('RequestFunds'); // Navigate to Request Funds screen
        } else if (dx > 50) {
          Animated.spring(toggleX, { toValue: 100, useNativeDriver: false }).start();
          setCurrentMode('Pay');
          navigation.navigate('MakePayment'); // Navigate to Make Payment screen
        } else {
          // If not far enough, reset to middle
          Animated.spring(toggleX, { toValue: 0, useNativeDriver: false }).start();
          setCurrentMode(''); // Reset
        }
      },
    })
  ).current;
    
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <FlatList
          data={contacts}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.avatarContainer}>
              <Image source={{ uri: item.avatar }} style={styles.avatar} />
              <Text style={styles.contactName}>{item.name}</Text>
            </View>
          )}
          showsHorizontalScrollIndicator={false}
        />
        <TouchableOpacity onPress={toggleQrCode}>
          <View style={styles.qrCodeContainer}>
            <Text style={styles.qrText}>QR</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={styles.value}>{value}</Text>
      {qrVisible && (
        <View style={styles.qrCodeView}>
          <QRCode
            value={value || 'placeholder'}
            size={150}
            padding={15}
            color="#333"
            backgroundColor="#fff"
            logo={{ uri: 'https://example.com/logo.png' }} // Optional logo in center
            logoSize={30}
            logoBackgroundColor="transparent"
            logoMargin={2}
            logoBorderRadius={15}
            outerEyeStyle={{ borderRadius: 5 }}
            innerEyeStyle={{ borderRadius: 3 }}
          />
          <TouchableOpacity onPress={toggleQrCode} style={styles.closeQrButton}>
            <Text style={styles.closeQrText}>Close</Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.padContainer}>
        {['1', '2', '3'].map((num) => (
          <TouchableOpacity key={num} style={styles.button} onPress={() => handlePress(num)}>
            <Text style={styles.buttonText}>{num}</Text>
          </TouchableOpacity>
        ))}
        {['4', '5', '6'].map((num) => (
          <TouchableOpacity key={num} style={styles.button} onPress={() => handlePress(num)}>
            <Text style={styles.buttonText}>{num}</Text>
          </TouchableOpacity>
        ))}
        {['7', '8', '9'].map((num) => (
          <TouchableOpacity key={num} style={styles.button} onPress={() => handlePress(num)}>
            <Text style={styles.buttonText}>{num}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.button} onPress={() => handlePress('.')}>
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('0')}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleBackspace}>
          <Text style={styles.buttonText}>⌫</Text>
        </TouchableOpacity>
      </View>      
      <View style={styles.toggleContainer}>
        <Text style={styles.toggleText}>Request Funds</Text>
        <View style={styles.toggleTrack} {...panResponder.panHandlers}>
          <Animated.View style={[styles.toggleButton, { transform: [{ translateX: toggleX }] }]} />
        </View>
        <Text style={styles.toggleText}>Make Payment</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 20,
  },
  avatarContainer: {
    alignItems: 'center',
    marginRight: 10,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 5,
  },
  contactName: {
    fontSize: 12,
    color: '#333',
  },
  qrCodeContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ededed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrText: {
    fontSize: 18,
    color: '#333',
  },
  value: {
    fontSize: 48,
    marginBottom: 40,
    color: '#333',
  },
  padContainer: {
    width: '80%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  button: {
    width: '30%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#ededed',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 32,
    color: '#333',
  },
  qrCodeView: {
    position: 'absolute',
    top: '20%',
    left: '20%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  closeQrButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#f00',
    borderRadius: 5,
  },
  closeQrText: {
    color: '#fff',
    fontSize: 16,
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    paddingHorizontal: 20,
    width: '80%',
  },
  toggleText: {
    fontSize: 16,
    color: '#333',
    width: '30%',
    textAlign: 'center',
  },
  toggleTrack: {
    flex: 1,
    height: 40,
    backgroundColor: '#ddd',
    borderRadius: 20,
    justifyContent: 'center',
    position: 'relative',
  },
  toggleButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    position: 'absolute',
  },
});

export default PaymentScreen;
