import React from "react";
import { View, Dimensions } from "react-native";

interface HeaderProgressBarProps {
  totalPages: number;
  currentPage: number;
}

const HeaderProgressBar = ({ totalPages, currentPage }: HeaderProgressBarProps): JSX.Element => {
  const screenWidth = Dimensions.get("window").width; // Get screen width for responsive layout

  return (
    <View>
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
