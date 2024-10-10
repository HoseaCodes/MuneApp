import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import QRCodeStyled from 'react-native-qrcode-styled';

const QRCode: React.FC = () => (
    <View style={styles.root}>
      <QRCodeStyled
        data={'https://www.google.com/'}
        style={styles.svg}
        padding={20}
        pieceSize={8}
        pieceBorderRadius={4}
        color={'#19A530'}
        innerEyesOptions={{
          borderRadius: 4.76,
          color: '#19A530',
        }}
        outerEyesOptions={{
          borderRadius: 15.22,
          color: '#19A530',
        }}
      />
      <View style={styles.logoContainer}>
        <Image source={require('../../../assets/images/profile.png')} style={styles.logo} />
      </View> 
    </View>
  );

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  svg: {
    backgroundColor: '#fff',
    borderRadius: 20,
    overflow: 'hidden',
  },
  logoContainer: {
    position: 'absolute',
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '90%',
    height: '90%',
    top: -2,
    borderRadius: 16
  },
});

export default QRCode;