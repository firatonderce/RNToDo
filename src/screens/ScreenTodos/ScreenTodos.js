import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  SearchBar,
  ToDo,
  AddButton
} from '../../components';
import getColors from '../../core/colors';
import {toDoModel} from '../../model/todo';
import {useNavigation} from '@react-navigation/core';

const toDotemp = [
  {
    id: 1,
    title: '1',
    date: 'Çar, 22 Eyl 2021',
    details: 'gokce',
    status: 'done'
  },
  {
    id: 2,
    title: '2',
    date: 'Çar, 22 Eyl 2021',
    details: 'firat',
    status: 'todo'
  },
  {
    id: 2,
    title: '3',
    date: 'Çar, 22 Eyl 2021',
    details: 'deneme',
    status: 'todo'
  },
  {
    id: 2,
    title: '4',
    details: 'deneme',
    date: 'Çar, 22 Eyl 2021',
    status: 'todo'
  }
];

const newTodo = () => {
  return {...toDoModel, id: Math.random()};
};

const ScreenTodos = () => {
  const [toDos, setToDos] = useState(toDotemp);
  const [toDosToDisplay, setToDosToDisplay] = useState([]);
  const [searchWord, setSearchWord] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    return searchTodo(searchWord);
  }, [toDos]);

  const navigateToDetailScreen = index => {
    const toDo = toDosToDisplay[index] ? toDosToDisplay[index] : newTodo();
    return navigation.navigate('ScreenTodoDetails', {
      toDo,
      addOrEditToDo,
      deleteTodo
    });
  };

  const addOrEditToDo = toDo => {
    const index = toDos.findIndex(oldtoDo => oldtoDo.id == toDo.id);
    setToDos(oldTodos => {
      const updatedTodos = [...oldTodos];
      if (index != -1) {
        updatedTodos[index] = toDo;
        return updatedTodos;
      }
      updatedTodos.unshift(toDo);
      return updatedTodos;
    });
    return navigation.goBack();
  };

  const deleteTodo = toDo => {
    return null;
  };

  const searchTodo = text => {
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
    return setToDos(oldTodos => {
      const updatedTodos = [...oldTodos];
      updatedTodos[index].status = newStatus;
      return updatedTodos;
    });
  };

  const displayTodos = () => {
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
      <SearchBar onChangeText={searchTodo} />
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        style={styles.scrollView}>
        {displayTodos()}
      </ScrollView>
      <View style={styles.addButton}>
        <AddButton onPress={navigateToDetailScreen} />
      </View>
    </SafeAreaView>
  );
};

const colors = getColors('ScreenTodos');
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

export default ScreenTodos;
