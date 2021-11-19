import React from 'react';
import {TouchableOpacity} from 'react-native';

const TouchableOpacityComponent = ({style, onPress, children}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      {children}
    </TouchableOpacity>
  );
};

export default TouchableOpacityComponent;
