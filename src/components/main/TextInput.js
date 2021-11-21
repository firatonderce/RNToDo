import React from 'react';
import {TextInput} from 'react-native';

const TextInputComponent = ({
  style,
  value,
  placeholder,
  onChangeText,
  placeholderTextColor,
  multiline
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      multiline={multiline}
      placeholderTextColor={placeholderTextColor}
      style={style}
    />
  );
};

export default TextInputComponent;
