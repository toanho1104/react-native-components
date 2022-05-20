import React from 'react';

import {Text, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';

import {BackGround} from '@components';

import {RootNavigationProp} from '@types';

import {IMAGES} from '@assets';

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
        <Text>Home Screen 1</Text>
      </TouchableOpacity>
      <LottieView
        source={IMAGES.cuteCat}
        autoPlay
        loop
        style={{width: 300, height: 300}}
      />
    </BackGround>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//   },
// });
