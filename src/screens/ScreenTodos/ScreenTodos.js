import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Alert,
  StyleSheet,
  SearchBar,
  ToDo,
  AddButton,
  BackHandler
} from '../../components';
import getColors from '../../core/colors';
import {toDoModel} from '../../model/todo';
import {useNavigation} from '@react-navigation/core';
import AsyncStorageManager from '../../services/AsyncStorageManager';

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

  const getToDosFromStorage = async () => {
    const toDos = false; //await AsyncStorageManager.getToDosFromStorage(toDos);
    if (!toDos)
      return Alert.alert(
        "Couldn't get todos from storage",
        'Check device permissions',
        [
          {
            text: 'Ok',
            onPress: () => {
              console.log('pressed');
              return BackHandler.exitApp();
            }
          }
        ]
      );
    setToDos(toDos);
    return setInitialized(true);
  };

  useEffect(() => {
    if (!initialized) return;
    AsyncStorageManager.setToDosToStorage(toDos);
    return searchToDo(searchWord);
  }, [toDos]);

  const navigateToDetailScreen = index => {
    const toDo = toDosToDisplay[index] ? toDosToDisplay[index] : newToDo();
    return navigation.navigate('ScreenToDoDetails', {
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
    return toDosToDisplay.map((toDo, index) => (
      <ToDo
        key={index}
        toDo={toDo}
        onPressItem={() => navigateToDetailScreen(index)}
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
        {displayToDos()}
      </ScrollView>
      <View style={styles.addButton}>
        <AddButton onPress={navigateToDetailScreen} />
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
