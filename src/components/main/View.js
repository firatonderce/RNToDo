import React from 'react';
import {View} from 'react-native';

const ViewComponent = ({children, style}) => {
  return <View style={style}>{children}</View>;
};

export default ViewComponent;
