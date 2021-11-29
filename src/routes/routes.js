import React from 'react';
import Screens from '../screens';
import ButtonHeader from '../navigation/components/ButtonHeader';

const routes = [
  {
    name: 'ScreenToDos',
    component: Screens.ScreenToDos,
    isHeader: false
  },
  {
    name: 'ScreenToDoDetails',
    component: Screens.ScreenToDoDetails,
    isHeader: true,
    headerLeft: () => (
      <ButtonHeader
        icon={'left'}
        route={{
          routeName: 'ScreenToDoDetails',
          params: {triggerBack: true}
        }}
      />
    ),
    headerRight: () => (
      <ButtonHeader
        icon={'remove'}
        route={{
          routeName: 'ScreenToDoDetails',
          params: {triggerDelete: true}
        }}
      />
    )
  }
];

export default routes;
