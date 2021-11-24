import React from 'react';
import {SvgXml} from 'react-native-svg';
import AddLight from '../assets/add_light.svg';
import CocktailLight from '../assets/cocktail_light.svg';
import DoneLight from '../assets/done_light.svg';
import LeftArrowLight from '../assets/left_arrow_light.svg';
import SaveButtonFadeLight from '../assets/save_button_fade_light.svg';
import SaveButtonLight from '../assets/save_button_light.svg';
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
export const SvgIconLeftArrowLight = props => {
  return <SvgXml xml={LeftArrowLight} {...props} />;
};
export const SvgIconSaveButtonFadeLight = props => {
  return <SvgXml xml={SaveButtonFadeLight} {...props} />;
};
export const SvgIconSaveButtonLight = props => {
  return <SvgXml xml={SaveButtonLight} {...props} />;
};
export const SvgIconSearchBarIconLight = props => {
  return <SvgXml xml={SearchBarIconLight} {...props} />;
};
export const SvgIconTrashLight = props => {
  return <SvgXml xml={TrashLight} {...props} />;
};
