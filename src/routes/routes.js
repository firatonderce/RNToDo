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
    headerRight: () => (
      <ButtonHeader
        icon={'remove'}
        route={{
          routeName: 'ScreenTodoDetails',
          params: {deleteNote: true}
        }}
      />
    )
  }
];

export default routes;
