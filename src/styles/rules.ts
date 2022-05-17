import {Dimensions} from 'react-native';

import {responsive} from './responsive';

const {width, height} = Dimensions.get('window');

export const rulers = {
  screenHeight: height,
  screenWidth: width,
  screenPadding: responsive(10),
};
