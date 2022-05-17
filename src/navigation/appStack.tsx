import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {WelcomeScreen} from 'src/screens/WelCome';

import {StackParamList} from '@types';

const Stack = createNativeStackNavigator<StackParamList>();
interface Props {}
export const AppStack = ({}: Props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Screen1" component={WelcomeScreen} />
    </Stack.Navigator>
  );
};
