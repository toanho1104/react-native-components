import type {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import type {CompositeNavigationProp} from '@react-navigation/native';
import type {StackNavigationProp} from '@react-navigation/stack';

export type HomeParamList = {
  Home1: undefined;
  Home2: undefined;
};
export type RootBottomParamList = {
  Home: StackNavigationProp<HomeParamList>;
  User: undefined;
};

export type MainStackParamList = {
  BottomTab: RootBottomParamList;
  Stack1: undefined;
};
export type AuthStackParamList = {
  Login: undefined;
};

export type RootStackParamList = {
  MainStack: MainStackParamList;
  AuthStack: AuthStackParamList;
};

export type RootNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<RootBottomParamList>,
  StackNavigationProp<RootStackParamList>
>;
