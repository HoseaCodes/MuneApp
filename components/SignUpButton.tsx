import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styled } from 'nativewind';

const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledText = styled(Text);

interface SignUpButtonProps {
  onPress: () => void;
}

const SignUpButton: React.FC<SignUpButtonProps> = ({ onPress }) => {
  return (
    <StyledTouchableOpacity
      onPress={onPress}
      className="bg-green-500 rounded-md py-3 px-4 mx-auto mt-6"
    >
      <StyledText className="text-white text-base font-bold text-center">
        Sign Up
      </StyledText>
    </StyledTouchableOpacity>
  );
};

export default SignUpButton;
