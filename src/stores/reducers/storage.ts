const initState = {
  token: '',
};

const storageReducer = (state = initState, action: any) => {
  switch (action.type) {
    case 'USER_LOGIN_SUCCESS':
      return {};

    default:
      return state;
  }
};

export default storageReducer;
