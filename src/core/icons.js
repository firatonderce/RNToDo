import React from 'react';
import {SvgXml} from 'react-native-svg';
import AddLight from '../assets/add_light.svg';
import CocktailLight from '../assets/cocktail_light.svg';
import DoneLight from '../assets/done_light.svg';
import SearchBarIconLight from '../assets/search_bar_icon_light.svg';
import TrashLight from '../assets/trash_light.svg';

export const SvgIconAddLight = props => {
  return <SvgXml xml={AddLight} {...props} />;
};
export const SvgIconCocktailLight = props => {
  return <SvgXml xml={CocktailLight} {...props} />;
};
export const SvgIconDoneLight = props => {
  return <SvgXml xml={DoneLight} {...props} />;
};
export const SvgIconSearchBarIconLight = props => {
  return <SvgXml xml={SearchBarIconLight} {...props} />;
};
export const SvgIconTrashLight = props => {
  return <SvgXml xml={TrashLight} {...props} />;
};
