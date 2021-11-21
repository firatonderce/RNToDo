import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from '../../components/main';
import getColors from '../../core/colors';

const ScreenNoteDetails = ({route}) => {
  const {params} = route;
  return <SafeAreaView style={styles.safeAreaView}></SafeAreaView>;
};

const colors = getColors('ScreenTodoDetails');

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: colors.backgroundColor,
    flex: 1
  }
});
export default ScreenNoteDetails;
