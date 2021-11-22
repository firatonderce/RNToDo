import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import routes from '../routes/routes';
import ButtonHeader from './components/ButtonHeader';
import getColors from '../core/colors';

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {routes.map(screen => {
          return (
            <Stack.Screen
              key={screen.name}
              name={screen.name}
              component={screen.component}
              options={({route}) => {
                return {
                  headerShown: screen.isHeader,
                  headerLeft: () => (
                    <ButtonHeader icon={'left'} stack={screen || {}} />
                  ),
                  headerRight: screen.headerRight,
                  headerStyle: {
                    backgroundColor: colors.backgroundColor,
                    height: Platform.OS == 'ios' ? 100 : 80
                  }
                };
              }}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const colors = getColors('NavigationHeader');

export default RootStack;
