import React from 'react';
import {ScrollView} from 'react-native';

const ScrollViewComponent = ({children, style}) => {
  return <ScrollView style={style}>{children}</ScrollView>;
};

export default ScrollViewComponent;
