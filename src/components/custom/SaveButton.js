import React from 'react';
import {TouchableOpacity} from '../index';
import {SvgIconAddLight} from '../../core/icons';

const SaveButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <SvgIconAddLight />
    </TouchableOpacity>
  );
};

export default SaveButton;
