import React from 'react';

import {useFlipper} from '@react-navigation/devtools';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {navigationOptions, navigationRef} from '@navigation';
import {RootStackParamList} from '@types';

import {MainStack} from './MainStack';

interface Props {}
const Stack = createStackNavigator<RootStackParamList>();
export const RootStack = ({}: Props) => {
  useFlipper(navigationRef);
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{...navigationOptions}}>
        <Stack.Screen
          name="MainStack"
          component={MainStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
