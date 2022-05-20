import React from 'react';

import {Provider} from 'react-redux';
import {RootStack} from 'src/navigation/RootStack';
import store from 'src/stores';

interface Props {}

const App = ({}: Props) => {
  return (
    <Provider store={store}>
      <RootStack />
    </Provider>
  );
};

export default App;
