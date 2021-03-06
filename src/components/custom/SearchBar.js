import React from 'react';
import {TextInput, View, StyleSheet} from '../main';
import {SvgIconSearchBarIconLight} from '../../core/icons';
import getColors from '../../core/colors';

const SearchBar = ({onChangeText}) => {
  return (
    <View style={styles.outerView}>
      <View style={styles.iconBox}>
        <SvgIconSearchBarIconLight />
      </View>
      <TextInput style={styles.textInput} onChangeText={onChangeText} />
    </View>
  );
};

const colors = getColors('SearchBarComponent');

const styles = StyleSheet.create({
  outerView: {
    height: '10%',
    width: '90%',
    alignSelf: 'center',
    backgroundColor: colors.backgroundColor,
    borderRadius: 35,
    flexDirection: 'row',
    marginBottom: '1.5%'
  },
  iconBox: {
    width: '10%',
    height: '100%',
    justifyContent: 'center',
    marginLeft: '5%'
  },
  textInput: {
    width: '80%',
    alignSelf: 'center',
    fontSize: 20,
    color: colors.fontColor
  }
});

export default SearchBar;
