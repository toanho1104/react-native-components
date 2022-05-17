import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {UserScreen1} from 'src/screens/UserScreen1';

import {HomeScreen1} from '@screens';

import {BottomTabBar} from '@components';

import {RootBottomParamList} from '@types';

interface Props {}
export const BottomTabNavigation = ({}: Props) => {
  const Tab = createBottomTabNavigator<RootBottomParamList>();
  return (
    <>
      <Tab.Navigator
        tabBar={props => <BottomTabBar {...props} />}
        screenOptions={{headerShown: true}}>
        <Tab.Screen name="Home" component={HomeScreen1} />
        <Tab.Screen name="User" component={UserScreen1} />
      </Tab.Navigator>
    </>
  );
};
