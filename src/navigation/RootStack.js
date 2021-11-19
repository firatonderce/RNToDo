import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import routes from '../routes/routes';

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
              options={() => {
                return {
                  headerShown: screen.isHeader
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
