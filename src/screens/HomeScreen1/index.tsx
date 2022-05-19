import React from 'react';

import {Text, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {BackGround} from '@components';

import {RootNavigationProp} from '@types';

interface Props {}
export const HomeScreen1 = ({}: Props) => {
  const {navigate} = useNavigation<RootNavigationProp>();
  return (
    <BackGround>
      <TouchableOpacity
        onPress={() => {
          navigate('Stack1');
        }}>
        <Text>Home Screen 1</Text>
      </TouchableOpacity>
    </BackGround>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//   },
// });
