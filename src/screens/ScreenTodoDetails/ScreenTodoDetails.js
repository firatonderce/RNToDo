import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  SaveButton,
  StyleSheet
} from '../../components';

import getColors from '../../core/colors';

const ScreenNoteDetails = ({route}) => {
  const {params} = route;
  const {addOrEditToDo} = params;
  const [oldVersion, setOldVersion] = useState(params.toDo);
  const [toDo, setToDo] = useState(oldVersion);

  useEffect(() => {
    if (route.params.deleteNote) {
      return deleteNote();
    }
  }, [route.params]);

  const updateOrAddTodo = () => {
    const shouldEdit = checkIfAnyUpdatesAvailable();
    if (shouldEdit) {
      setOldVersion(toDo);
      return addOrEditToDo(toDo);
    }
  };

  const checkIfAnyUpdatesAvailable = () => {
    const keys = Object.keys(oldVersion);
    return keys.some(key => oldVersion[key] != toDo[key]);
  };

  const deleteNote = () => {
    console.log('delete note activated', toDo);
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
        <SaveButton onPress={updateOrAddTodo} />
      </View>
    </SafeAreaView>
  );
};

const colors = getColors('ScreenTodoDetails');

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: colors.backgroundColor,
    flex: 1
  },
  titleInput: {
    backgroundColor: colors.titleFieldBackgroundColor,
    color: colors.texts,
    height: '10%',
    fontSize: 25,
    paddingLeft: '5%',
    paddingRight: '5%'
  },
  detailBox: {height: '80%'},
  detailsInput: {
    color: colors.texts,
    fontSize: 25,
    paddingLeft: '5%',
    paddingRight: '5%'
  },
  addButtonBox: {width: '100%', alignItems: 'flex-end', paddingRight: '5%'}
});
export default ScreenNoteDetails;
