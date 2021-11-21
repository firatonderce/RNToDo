import React from 'react';
import {TouchableOpacity} from '../index';
import {SvgIconAddLight} from '../../core/icons';

const AddButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <SvgIconAddLight />
    </TouchableOpacity>
  );
};

export default AddButton;
