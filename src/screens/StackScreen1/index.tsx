import React from 'react';

import {Text, View} from 'react-native';

import {BackGround} from '@components';

interface Props {}
export const StackScreen1 = ({}: Props) => {
  return (
    <BackGround>
      <View>
        <Text>StackScreen1</Text>
      </View>
    </BackGround>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//   },
// });
