import React from 'react';
import {Text} from 'react-native';

const TextComponent = ({text, style}) => {
  return <Text style={style}>{text}</Text>;
};

export default TextComponent;
