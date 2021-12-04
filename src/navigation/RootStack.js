import React, {useState} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import routes from '../routes/routes';
import ButtonHeader from './components/ButtonHeader';
import getColors, {getScreenThemesColors} from '../core/colors';

const Stack = createStackNavigator();

const colors = getColors('Navigation');
const screenTheme = getScreenThemesColors();

const RootStack = () => {
  const AppTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.navigateToHoney
    }
  };

  const setBackgroundForNavigation = screenName => {
    return (AppTheme.colors.background =
      screenTheme[screenName]?.backgroundColor);
  };

  return (
    <NavigationContainer theme={AppTheme}>
      <Stack.Navigator>
        {routes.map(screen => {
          return (
            <Stack.Screen
              key={screen.name}
              name={screen.name}
              component={screen.component}
              options={() => {
                setBackgroundForNavigation(screen.name);
                return {
                  title: screen.title ? screen.title : '',
                  headerShown: screen.isHeader,
                  headerLeft: screen.headerLeft
                    ? screen.headerLeft
                    : () => <ButtonHeader icon={'left'} stack={screen || {}} />,
                  headerRight: screen.headerRight,
                  headerStyle: {
                    backgroundColor: colors.headerBackgroundColor
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

export default RootStack;
