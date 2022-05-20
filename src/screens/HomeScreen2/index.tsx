import React from 'react';

import {Text, TouchableOpacity} from 'react-native';

import {BackGround} from '@components';

interface Props {}
export const HomeScreen2 = ({}: Props) => {
  return (
    <BackGround>
      <TouchableOpacity
        onPress={() => {
          console.log(
            '========================================================',
          );
          console.log('aaaaaa');
          console.log(
            '========================================================',
          );
        }}>
        <Text>Home Screen 2</Text>
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
