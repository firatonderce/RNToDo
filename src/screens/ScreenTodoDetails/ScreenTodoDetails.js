import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  SaveButton,
  StyleSheet
} from '../../components';

import getColors from '../../core/colors';
import {getDate} from '../../utils/Date';
import {useNavigation} from '@react-navigation/core';
import navigationTypes from '../../types/navigationTypes';
import WarnHandler from '../../services/WarnHandler';
import warns from './data/warns';

const ScreenToDoDetails = ({route}) => {
  const {params} = route;
  const {addOrEditToDo, deleteToDo} = params;
  const [oldVersion, setOldVersion] = useState(params.toDo);
  const [toDo, setToDo] = useState(oldVersion);
  const [isThereAnyChanges, setIsThereAnyChanges] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    if (route.params.triggerBack) return triggerGoBack();
    if (route.params.type == navigationTypes.CREATE) return;
    if (route.params.triggerDelete) return triggerDelete();
  }, [route.params]);

  useEffect(() => {
    const isThereAnyChanges = checkIfAnyUpdatesAvailable();
    return setIsThereAnyChanges(isThereAnyChanges);
  }, [toDo]);

  const triggerGoBack = () => {
    return isThereAnyChanges ? warnGoBack() : navigation.goBack();
  };

  const warnGoBack = () => {
    let acceptAction =
      params.type == navigationTypes.CREATE
        ? navigation.goBack
        : () => deleteToDo(toDo);

    return WarnHandler({
      ...warns.goBack,
      acceptAction
    });
  };

  const updateOrAddToDo = () => {
    if (isThereAnyChanges) {
      const date = getDate();
      const newTodo = {...toDo, date};
      setOldVersion(newTodo);
      return addOrEditToDo(newTodo);
    }
  };

  const checkIfAnyUpdatesAvailable = () => {
    const keys = Object.keys(oldVersion);
    return keys.some(key => oldVersion[key] != toDo[key]);
  };

  const triggerDelete = () => {
    return WarnHandler({
      ...warns.deleteToDo,
      acceptAction: () => deleteToDo(toDo)
    });
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <TextInput
        placeholder="Title"
        value={toDo.title}
        onChangeText={text => setToDo({...toDo, title: text})}
        style={styles.titleInput}
        placeholderTextColor={colors.placeHolderColor}
      />
      <View style={styles.detailBox}>
        <TextInput
          placeholder="Statement"
          value={toDo.details}
          multiline={true}
          onChangeText={text => setToDo({...toDo, details: text})}
          style={styles.detailsInput}
          placeholderTextColor={colors.placeHolderColor}
        />
      </View>
      <View style={styles.addButtonBox}>
        <SaveButton isActive={isThereAnyChanges} onPress={updateOrAddToDo} />
      </View>
    </SafeAreaView>
  );
};

const colors = getColors('ScreenToDoDetails');

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: colors.backgroundColor,
    flex: 1,
    paddingBottom: '5%'
  },
  titleInput: {
    backgroundColor: colors.titleFieldBackgroundColor,
    color: colors.texts,
    height: '10%',
    fontSize: 25,
    paddingLeft: '5%',
    paddingRight: '5%'
  },
  detailBox: {height: '78%'},
  detailsInput: {
    color: colors.texts,
    fontSize: 25,
    paddingLeft: '5%',
    paddingRight: '5%'
  },
  addButtonBox: {
    width: '100%',
    height: '12%',
    alignItems: 'flex-end',
    paddingRight: '5%'
  }
});
export default ScreenToDoDetails;
