import React from 'react';
import {View, Text, TouchableOpacity, Dimensions, StyleSheet} from '../index';
import {SvgIconDoneLight} from '../../core/icons';
import {statuses} from '../../model/todo';
import getColors from '../../core/colors';

const {DONE, TODO} = statuses;
const heightOfTodoItem = Dimensions.get('window').height / 10;

const ToDo = ({toDo, onPressItem, changeToDoStatus}) => {
  const {id, title, date, status} = toDo;

  return (
    <View key={id} style={styles.toDo}>
      <TouchableOpacity onPress={onPressItem} style={styles.firstRow}>
        <Text style={styles.titleBox} text={title ? title : 'Untitled'} />
        <Text style={styles.dateBox} text={date} />
      </TouchableOpacity>
      <View style={styles.secondRow}>
        <TouchableOpacity
          onPress={() => changeToDoStatus(status == DONE ? TODO : DONE)}
          style={styles.statusBox}>
          {status == DONE && <SvgIconDoneLight />}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const colors = getColors('TodoComponent');

const styles = StyleSheet.create({
  toDo: {
    backgroundColor: colors.backgroundColor,
    borderRadius: 20,
    height: heightOfTodoItem,
    width: '90%',
    marginTop: '2.75%',
    flexDirection: 'row'
  },
  firstRow: {
    flex: 7,
    justifyContent: 'center'
  },
  titleBox: {
    color: colors.titleColor,
    flex: 1,
    padding: '3.5%',
    marginLeft: '5%',
    fontSize: 20
  },
  dateBox: {
    color: colors.dateTextColor,
    flex: 1,
    padding: '3.5%',
    paddingTop: 0,
    marginLeft: '5%',
    fontSize: 15
  },
  secondRow: {
    flex: 1.5,
    justifyContent: 'center'
  },
  statusBox: {
    backgroundColor: colors.statusBackground,
    borderRadius: 15,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    borderWidth: 1
  }
});

export default ToDo;
