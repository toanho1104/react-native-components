import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {MainTask} from 'src/navigation/mainStack';

import {navigationRef} from '@navigation';

interface Props {}

const RootApp = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <MainTask />
    </NavigationContainer>
  );
};

const App = ({}: Props) => {
  return (
    <>
      <RootApp />
    </>
  );
};

export default App;
