import React, {useState, useEffect, Children} from 'react';

import {View, SafeAreaView, Text, StyleSheet, Alert, Image} from 'react-native';

import {COLORS} from '@styles';

interface Props {
  children: React.ReactNode;
}
export const BackGround = ({children}: Props) => {
  return (
    <View style={styles.container}>
      <Text>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.DARK.BACKGROUND_PRIMARY,
  },
});
