import React from 'react';
import Screens from '../screens';
import ButtonHeader from '../navigation/components/ButtonHeader';

const routes = [
  {
    name: 'ScreenTodos',
    component: Screens.ScreenTodos,
    isHeader: false
  },
  {
    name: 'ScreenTodoDetails',
    component: Screens.ScreenTodoDetails,
    isHeader: true,
    headerRight: onPress => <ButtonHeader icon={'remove'} onPress={onPress} />
  }
];

export default routes;
