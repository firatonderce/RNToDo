import React from 'react';
import {View, Text, StyleSheet} from '../../../components';
import {SvgIconCocktailLight} from '../../../core/icons';
import getColors from '../../../core/colors';

const NoToDos = () => {
  return (
    <View style={styles.outerViewStyle}>
      <Text style={styles.textStyle} text="You are free. Enjoy" />
      <SvgIconCocktailLight />
    </View>
  );
};

const colors = getColors('NoToDosComponent');
const styles = StyleSheet.create({
  outerViewStyle: {
    flexDirection: 'row',
    marginTop: '40%',
    alignItems: 'center'
  },
  textStyle: {fontSize: 24, color: colors.textColor}
});

export default NoToDos;
