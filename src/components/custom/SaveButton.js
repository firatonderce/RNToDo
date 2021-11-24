import React from 'react';
import {TouchableOpacity} from '../index';
import {
  SvgIconSaveButtonLight,
  SvgIconSaveButtonFadeLight
} from '../../core/icons';

const SaveButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <SvgIconSaveButtonLight />
    </TouchableOpacity>
  );
};

export default SaveButton;
