import React from 'react';
import {View, StyleSheet} from '../../components/main';
import getColors from '../../core/colors';

const ScreenNotes = () => {
  return <View style={styles.mainView}></View>;
};

const colors = getColors('ScreenNotes');
const styles = StyleSheet.create({
  mainView: {flex: 1, backgroundColor: colors.backgroundColor}
});

export default ScreenNotes;
