import React from 'react';
import {View} from 'react-native';

const ViewComponent = ({children, onPress, style}) => {
  return (
    <View onPress={onPress} style={style}>
      {children}
    </View>
  );
};

export default ViewComponent;
