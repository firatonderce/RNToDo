import React from 'react';
import {View, TouchableOpacity} from '../index';
import {
  SvgIconSaveButtonLight,
  SvgIconSaveButtonFadeLight
} from '../../core/icons';

const SaveButton = ({onPress, isActive}) => {
  const SaveButtonComponent = isActive ? TouchableOpacity : View;
  const Icon = isActive ? SvgIconSaveButtonLight : SvgIconSaveButtonFadeLight;

  return (
    <SaveButtonComponent onPress={() => onPress()}>
      <Icon />
    </SaveButtonComponent>
  );
};

export default SaveButton;
