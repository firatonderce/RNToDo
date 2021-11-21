import React, {useState, useCallback, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet
} from '../../components/main';
import getColors from '../../core/colors';
import {SearchBar, ToDo, AddButton} from '../../components';
import {useNavigation} from '@react-navigation/core';

const toDotemp = [
  {
    id: 1,
    title: 'todo 1-2-3-4-5.',
    date: 'Çar, 22 Eyl 2021',
    status: 'done'
  },
  {
    id: 2,
    title: 'todo 1-2-3-4-5.',
    date: 'Çar, 22 Eyl 2021',
    status: 'todo'
  },
  {
    id: 2,
    title: 'todo 1-2-3-4-5.',
    date: 'Çar, 22 Eyl 2021',
    status: 'todo'
  },
  {
    id: 2,
    title: 'todo 1-2-3-4-5.',
    date: 'Çar, 22 Eyl 2021',
    status: 'todo'
  }
];

const ScreenTodos = () => {
  const [toDos, setToDos] = useState(toDotemp);
  const navigation = useNavigation();

  const navigateToDetailScreen = index => {
    return navigation.navigate('ScreenTodoDetails', {toDos});
  };

  const changeToDoStatus = (index, newStatus) => {
    return setToDos(oldTodos => {
      const updatedTodos = [...oldTodos];
      updatedTodos[index].status = newStatus;
      return updatedTodos;
    });
  };

  const displayTodos = () => {
    return toDos.map((toDo, index) => (
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
      <SearchBar />
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
  scrollView: {width: '100%'},
  contentContainer: {alignItems: 'center'},
  addButton: {
    width: '100%',
    alignItems: 'flex-end',
    paddingRight: '5%'
  }
});

export default ScreenTodos;
