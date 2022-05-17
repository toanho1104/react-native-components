import {createRef} from 'react';

import {StackActions} from '@react-navigation/native';

export enum STACK_NAMES {
  AUTHENTICATION_STACK = 'AUTHENTICATION_STACK',
  APP_STACK = 'APP_STACK',
}

export enum SCREEN_NAME {
  WELCOME_SCREEN = 'WELCOME_SCREEN ',
}

export const navigationRef: any = createRef();

export const getNavigation = () => {
  return navigationRef.current;
};

export function navigate(name: string, params?: any) {
  navigationRef.current?.navigate(name, params);
}

export const navigateReset = (stackName: string, params?: any) => {
  navigationRef.current?.reset({
    index: 0,
    routes: [{name: stackName, params}],
  });
};

export function navigateToScreenAndReplace(name: string, params: any) {
  navigationRef.current?.dispatch(StackActions.replace(name, params));
}
