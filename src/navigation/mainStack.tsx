import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {StackScreen1} from '@screens';

import {Transitions} from '@styles';
import {MainStackParamList} from '@types';

import {BottomTabNavigation} from './BottomTabNavigation';

const Stack = createStackNavigator<MainStackParamList>();

interface Props {}

export const MainStack = ({}: Props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...Transitions.horizontalSide,
        headerShown: false,
      }}>
      <Stack.Screen name="BottomTab" component={BottomTabNavigation} />
      <Stack.Screen name="Stack1" component={StackScreen1} />
    </Stack.Navigator>
  );
};
