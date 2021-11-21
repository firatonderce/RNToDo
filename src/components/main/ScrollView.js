import React from 'react';
import {ScrollView} from 'react-native';

const ScrollViewComponent = ({children, contentContainerStyle, style}) => {
  return (
    <ScrollView style={style} contentContainerStyle={contentContainerStyle}>
      {children}
    </ScrollView>
  );
};

export default ScrollViewComponent;
