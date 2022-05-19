import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {navigationOptions, navigationRef} from '@navigation';
import {RootStackParamList} from '@types';

import {MainStack} from './MainStack';

interface Props {}
const Stack = createStackNavigator<RootStackParamList>();
export const RootStack = ({}: Props) => {
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
