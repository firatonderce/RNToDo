import React, {memo} from 'react';
import {View, TouchableOpacity} from '../../components/index';
import {useNavigation} from '@react-navigation/native';

import {SvgIconLeftArrowLight, SvgIconTrashLight} from '../../core/icons';

const ButtonHeader = props => {
  const navigation = useNavigation();
  const icons = {
    left: {
      style: {width: 20, height: 20, margin: 20},
      source: () => <SvgIconLeftArrowLight />
    },

    remove: {
      style: {margin: 20},
      source: () => <SvgIconTrashLight />
    }
  };

  if (!icons[props.icon]) return null;

  const handleClick = () => {
    if (props.onPress) {
      props.onPress();
      return;
    }

    props.route && (props.route.routeName || props.route.params)
      ? navigation.navigate(props.route.routeName, {...props.route.params})
      : navigation.goBack(null);
  };

  return (
    <TouchableOpacity onPress={handleClick}>
      <View style={icons[props.icon].style}>{icons[props.icon].source()}</View>
    </TouchableOpacity>
  );
};

export default memo(ButtonHeader);