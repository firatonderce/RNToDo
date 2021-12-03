import React from 'react';
import {View, Text, StyleSheet} from '../../../components';
import getColors from '../../../core/colors';

const NoTodosFound = () => {
  return (
    <View>
      <Text style={styles.textStyle} text="There is no match" />
    </View>
  );
};

const colors = getColors('NoToDosFoundComponent');
const styles = StyleSheet.create({
  textStyle: {fontSize: 24, marginTop: '70%', color: colors.textColor}
});

export default NoTodosFound;
