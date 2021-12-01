import React from 'react';
import {TextInput} from 'react-native';

const TextInputComponent = ({
  style,
  value,
  placeholder,
  onChangeText,
  placeholderTextColor,
  multiline,
  onSubmitEditing
}) => {
  return (
    <TextInput
      onSubmitEditing={onSubmitEditing}
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
