import React from 'react';
import {SafeAreaView} from 'react-native';

const SafeAreaViewComponent = ({children, style}) => {
  return <SafeAreaView style={style}>{children}</SafeAreaView>;
};

export default SafeAreaViewComponent;
