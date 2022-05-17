import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {navigationRef} from '@navigation';
import {RootStackParamList} from '@types';

import {MainStack} from './MainStack';

interface Props {}
const Stack = createNativeStackNavigator<RootStackParamList>();
export const RootStack = ({}: Props) => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name="MainStack"
          component={MainStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
