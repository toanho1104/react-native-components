import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AppStack} from './appStack';

interface Props {}
const Stack = createNativeStackNavigator();
export const MainTask = ({}: Props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'aaa'}
        component={AppStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
