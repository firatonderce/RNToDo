import React from 'react';
import {TextInput} from 'react-native';

const TextInputComponent = ({
  style,
  value,
  placeholder,
  onChangeText,
  placeholderTextColor,
  multiline,
  onSubmitEditing,
  textAlignVertical,
  keyboardDismissMode
}) => {
  return (
    <TextInput
      onSubmitEditing={onSubmitEditing}
      placeholder={placeholder}
      keyboardDismissMode={keyboardDismissMode}
      value={value}
      onChangeText={onChangeText}
      multiline={multiline}
      placeholderTextColor={placeholderTextColor}
      style={style}
      textAlignVertical={textAlignVertical}
    />
  );
};

export default TextInputComponent;
