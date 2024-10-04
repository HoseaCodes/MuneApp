import React from "react";
import { View, Text, TouchableOpacity, Dimensions, Image } from "react-native";
import MLogo from '../assets/images/Mlogo.png';
import ULogo from '../assets/images/Ulogo.png';
import NLogo from '../assets/images/Nlogo.png';
import ELogo from '../assets/images/Elogo.png';
import LChainLogo from '../assets/images/Lchain_logo.png';
import RChainLogo from '../assets/images/Rchain_logo.png';

interface HeaderProgressBarProps {
  totalPages: number;
  currentPage: number;
}

const HeaderProgressBar = ({ totalPages, currentPage }: HeaderProgressBarProps): JSX.Element => {
  const screenWidth = Dimensions.get("window").width; // Get screen width for responsive layout

  return (
    <View>
      {/* Full Logo: Place each PNG side by side */}
      <View
        style={{
          flexDirection: 'row', // Align the logos in a horizontal row
          justifyContent: 'center', // Center the row in the view
          alignItems: 'center', // Align the images vertically
          marginBottom: 20,
        }}
      >
        {/* Each logo with responsive size */}
        <Image source={MLogo} style={{ width: 32, height: 25, marginHorizontal: 5 }} />
        <Image source={ULogo} style={{ width: 32, height: 25, marginHorizontal: 5 }} />
        <Image source={NLogo} style={{ width: 32, height: 25, marginHorizontal: 5 }} />
        <Image source={LChainLogo} style={{ width: 32, height: 25, marginHorizontal: 5 }} />
        <Image source={RChainLogo} style={{ width: 32, height: 25, marginHorizontal: 5 }} />
        <Image source={ELogo} style={{ width: 32, height: 25, marginHorizontal: 5}} />
      </View>
      {/* Progress Bar */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        {Array(totalPages).fill(0).map((_, index) => (
          <View
            key={index}
            style={{
              width: 50,
              height: 5,
              borderRadius: 5,
              backgroundColor: currentPage === index ? "#19A530" : "#d3d3d3", // Active or inactive bubble color
              marginHorizontal: 10,
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default HeaderProgressBar;
