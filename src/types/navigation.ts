import type {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import type {CompositeNavigationProp} from '@react-navigation/native';
import type {StackNavigationProp} from '@react-navigation/stack';

export type StackParamList = {
  Screen1: undefined;
  Screen2: undefined;
};
export type BottomParamList = {
  Btab1: undefined;
  Btab2: undefined;
};

export type RootNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<BottomParamList>,
  StackNavigationProp<StackParamList>
>;
