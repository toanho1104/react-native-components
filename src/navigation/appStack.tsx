import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {WelcomeScreen} from 'src/screens/WelCome';

const Stack = createNativeStackNavigator();
interface Props {}
export const AppStack = ({}: Props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={WelcomeScreen} />
    </Stack.Navigator>
  );
};
