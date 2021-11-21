import React from 'react';
import {TextInput, View, StyleSheet} from '../index';
import {SvgIconSearchBarIconLight} from '../../core/icons';
import getColors from '../../core/colors';

const SearchBar = () => {
  return (
    <View style={styles.outerView}>
      <View style={styles.iconBox}>
        <SvgIconSearchBarIconLight />
      </View>
      <TextInput style={styles.textInput} />
    </View>
  );
};

const colors = getColors('SearchBarComponent');

const styles = StyleSheet.create({
  outerView: {
    height: '8%',
    width: '90%',
    alignSelf: 'center',
    backgroundColor: colors.backgroundColor,
    borderRadius: 35,
    flexDirection: 'row'
  },
  iconBox: {
    width: '10%',
    height: '100%',
    justifyContent: 'center',
    marginLeft: '5%'
  },
  textInput: {
    width: '80%',
    height: '60%',
    alignSelf: 'center',
    fontSize: 18
  }
});

export default SearchBar;