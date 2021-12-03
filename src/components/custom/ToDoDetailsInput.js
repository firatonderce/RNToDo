import React, {useState, useEffect, useRef} from 'react';
import {View, TextInput, Keyboard} from '../main';

const ToDoDetailsInput = ({
  style,
  value,
  placeholder,
  onChangeText,
  placeholderTextColor,
  multiline,
  heightOfApplyButtonBox
}) => {
  const [marginBottom, setMarginBottom] = useState(0);
  const onKeyboardShow = event =>
    setMarginBottom(event.endCoordinates.height - heightOfApplyButtonBox);
  const onKeyboardHide = () => setMarginBottom(0);
  const keyboardDidShowListener = useRef();
  const keyboardDidHideListener = useRef();

  useEffect(() => {
    keyboardDidShowListener.current = Keyboard.addListener(
      'keyboardWillShow',
      onKeyboardShow
    );

    keyboardDidHideListener.current = Keyboard.addListener(
      'keyboardWillHide',
      onKeyboardHide
    );

    return () => {
      keyboardDidShowListener.current.remove();
      keyboardDidHideListener.current.remove();
    };
  }, []);

  return (
    <View
      style={{
        flex: 1,
        marginBottom
      }}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        multiline={multiline}
        placeholderTextColor={placeholderTextColor}
        onSubmitEditing={() => Keyboard.dismiss()}
        textAlignVertical="top"
        style={{
          ...style,
          marginBottom: marginBottom,
          width: '100%',
          height: '100%'
        }}
      />
    </View>
  );
};

export default ToDoDetailsInput;
