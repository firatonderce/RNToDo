import React, {useState, useEffect, useRef} from 'react';
import {ScrollView, TextInput, Keyboard} from '../main';

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
    <ScrollView
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
        textAlignVertical="top"
        style={{
          ...style,
          marginBottom: marginBottom,
          width: '100%',
          height: '100%'
        }}
      />
    </ScrollView>
  );
};

export default ToDoDetailsInput;
