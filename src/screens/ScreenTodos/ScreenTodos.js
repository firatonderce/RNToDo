import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/core';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  SearchBar,
  ToDo,
  AddButton
} from '../../components';
import getColors from '../../core/colors';
import {toDoModel} from '../../model/todo';
import AsyncStorageManager from '../../services/AsyncStorageManager';
import {NoToDos, NoToDosFound} from './components';

const newToDo = () => {
  return {...toDoModel, id: Math.random()};
};

const ScreenToDos = () => {
  const [toDos, setToDos] = useState([]);
  const [toDosToDisplay, setToDosToDisplay] = useState([]);
  const [initialized, setInitialized] = useState(false);
  const [searchWord, setSearchWord] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    getToDosFromStorage();
  }, []);

  useEffect(() => {
    if (!initialized) return;
    AsyncStorageManager.setToDosToStorage(toDos);
    return searchToDo(searchWord);
  }, [initialized, toDos]);

  const getToDosFromStorage = async () => {
    const toDos = await AsyncStorageManager.getToDosFromStorage(toDos);
    setToDos(toDos);
    return setInitialized(true);
  };

  const navigateToDetailScreen = (type, index = -1) => {
    const toDo = toDosToDisplay[index] ? toDosToDisplay[index] : newToDo();
    return navigation.navigate('ScreenToDoDetails', {
      type,
      toDo,
      addOrEditToDo,
      deleteToDo
    });
  };

  const addOrEditToDo = toDo => {
    const index = toDos.findIndex(oldtoDo => oldtoDo.id == toDo.id);
    setToDos(oldToDos => {
      const updatedToDos = [...oldToDos];
      if (index != -1) {
        updatedToDos[index] = toDo;
        return updatedToDos;
      }
      updatedToDos.unshift(toDo);
      return updatedToDos;
    });
    return navigation.goBack();
  };

  const deleteToDo = toDo => {
    const index = toDos.findIndex(oldtoDo => oldtoDo.id == toDo.id);
    if (index == -1) return;
    setToDos(oldToDos => {
      const updatedToDos = [...oldToDos];
      updatedToDos.splice(index, 1);
      return updatedToDos;
    });
    return navigation.goBack();
  };

  const searchToDo = text => {
    const searchInput = text?.toLowerCase();
    setSearchWord(searchInput);
    setToDosToDisplay(
      toDos.filter(toDo => {
        if (
          toDo.title?.toLowerCase()?.includes(searchInput) ||
          toDo.details?.toLowerCase()?.includes(searchInput)
        )
          return toDo;
      })
    );
  };

  const changeToDoStatus = (index, newStatus) => {
    return setToDos(oldToDos => {
      const updatedToDos = [...oldToDos];
      updatedToDos[index].status = newStatus;
      return updatedToDos;
    });
  };

  const displayToDos = () => {
    if (!toDos.length) return <NoToDos />;
    if (!toDosToDisplay.length) return <NoToDosFound />;
    return toDosToDisplay.map((toDo, index) => (
      <ToDo
        key={index}
        toDo={toDo}
        onPressItem={() => navigateToDetailScreen('edit', index)}
        changeToDoStatus={newStatus => changeToDoStatus(index, newStatus)}
      />
    ));
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <SearchBar onChangeText={searchToDo} />
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        style={styles.scrollView}>
        {initialized && displayToDos()}
      </ScrollView>
      <View style={styles.addButton}>
        <AddButton onPress={() => navigateToDetailScreen('create')} />
      </View>
    </SafeAreaView>
  );
};

const colors = getColors('ScreenToDos');
const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    alignItems: 'center'
  },
  scrollView: {width: '100%', marginBottom: '1.5%'},
  contentContainer: {alignItems: 'center'},
  addButton: {
    width: '100%',
    alignItems: 'flex-end',
    paddingRight: '5%'
  }
});

export default ScreenToDos;
