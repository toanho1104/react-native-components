import React from 'react';

import {Text, TouchableOpacity, View} from 'react-native';

interface Props {}
export const UserScreen1 = ({}: Props) => {
  return (
    <View>
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
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//   },
// });
