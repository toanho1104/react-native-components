import {combineReducers} from 'redux';

import storage from './storage';

const rootReducer = combineReducers({
  storage,
});

// const rootReducer = (state: any, action: any) => {
//   if (action.type === 'USER_LOGOUT') {
//     state.storage.token = undefined;
//   }
//   return appReducer(state, action);
// };

export default rootReducer;
