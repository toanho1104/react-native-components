import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {StackScreen1} from '@screens';

import {MainStackParamList} from '@types';

import {BottomTabNavigation} from './BottomTabNavigation';

const Stack = createNativeStackNavigator<MainStackParamList>();

interface Props {}

export const MainStack = ({}: Props) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomTab" component={BottomTabNavigation} />
      <Stack.Screen name="Stack1" component={StackScreen1} />
    </Stack.Navigator>
  );
};
