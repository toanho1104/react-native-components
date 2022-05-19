import {Easing} from 'react-native';

import {
  CardStyleInterpolators,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {TransitionSpec} from '@react-navigation/stack/lib/typescript/src/types';

const timing: TransitionSpec = {
  animation: 'timing',
  config: {
    duration: 300,
    // easing: Easing.circle,
    easing: Easing.linear,
  },
};

const spring: TransitionSpec = {
  animation: 'spring',
  config: {
    friction: 9,
    tension: 45,
  },
};

export const Transitions: {
  rotate: StackNavigationOptions;
  rotateScale: StackNavigationOptions;
  horizontalSide: StackNavigationOptions;
  horizontalSideScale: StackNavigationOptions;
  verticalSide: StackNavigationOptions;
  verticalSideScale: StackNavigationOptions;
} = {
  rotate: {
    gestureEnabled: true,
    gestureDirection: 'horizontal',
    transitionSpec: {
      open: timing,
      close: timing,
    },

    cardStyleInterpolator: ({current, next, layouts}) => {
      return {
        cardStyle: {
          transform: [
            {
              translateX: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.height, 0],
              }),
            },
            {
              rotate: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 0],
              }),
            },
            {
              scale: next
                ? next.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 1],
                  })
                : 1,
            },
          ],
        },
        overlayStyle: {
          opacity: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          }),
        },
      };
    },
  },
  rotateScale: {
    gestureEnabled: true,
    gestureDirection: 'horizontal',
    transitionSpec: {
      open: timing,
      close: timing,
    },
    cardStyleInterpolator: ({current, next, layouts}) => {
      return {
        cardStyle: {
          transform: [
            {
              translateX: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.height, 0],
              }),
            },
            {
              rotate: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 0],
              }),
            },
            {
              scale: next
                ? next.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 0],
                  })
                : 1,
            },
          ],
        },
        overlayStyle: {
          opacity: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 0.5],
          }),
        },
      };
    },
  },
  horizontalSide: {
    gestureEnabled: true,
    gestureDirection: 'horizontal',
    transitionSpec: {
      open: timing,
      close: timing,
    },
    cardStyleInterpolator: ({current, layouts}) => {
      return {
        cardStyle: {
          transform: [
            {
              translateX: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.width, 0],
              }),
            },
          ],
        },
        overlayStyle: {
          opacity: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          }),
        },
      };
    },
  },
  horizontalSideScale: {
    gestureEnabled: true,
    gestureDirection: 'horizontal',
    transitionSpec: {
      open: spring,
      close: spring,
    },

    cardStyleInterpolator: ({current, next, layouts}) => {
      return {
        cardStyle: {
          transform: [
            {
              translateX: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.width, 0],
              }),
            },
            {
              scale: next
                ? next.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 0],
                  })
                : 1,
            },
          ],
        },
        overlayStyle: {
          opacity: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 0.5],
          }),
        },
      };
    },
  },
  verticalSide: {
    gestureEnabled: true,
    gestureDirection: 'vertical',
    transitionSpec: {
      open: timing,
      close: timing,
    },
    cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
  },
  verticalSideScale: {
    gestureEnabled: true,
    gestureDirection: 'vertical',
    transitionSpec: {
      open: spring,
      close: spring,
    },

    cardStyleInterpolator: ({current, next, layouts}) => {
      return {
        cardStyle: {
          transform: [
            {
              translateY: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.height, 0],
              }),
            },
            {
              scale: next
                ? next.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 0],
                  })
                : 1,
            },
          ],
        },
        overlayStyle: {
          opacity: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 0.5],
          }),
        },
      };
    },
  },
};
