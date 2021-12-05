import React from 'react';
import {View} from 'react-native';

const ViewComponent = ({
  children,
  onStartShouldSetResponder,
  onPress,
  style
}) => {
  return (
    <View
      onStartShouldSetResponder={onStartShouldSetResponder}
      onPress={onPress}
      style={style}>
      {children}
    </View>
  );
};

export default ViewComponent;
