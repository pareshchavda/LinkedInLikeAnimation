import {Dimensions, Platform} from 'react-native';
const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = (size: number) => (viewportWidth / guidelineBaseWidth) * size;
const verticalScale = (size: number) =>
  (viewportHeight / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

const deviceWidth = viewportWidth;
const deviceHeight = viewportHeight;

const colors = {
  white: '#fff',
  black: '#000',
  blue: '#2196f3',
  lBlue: '#E8F1FE',
  nero: '#222222',
  grey0: '#fafafa',
  grey1: '#f2f2f2',
  grey2: '#e5e5e5',
  grey3: '#ccc',
  grey4: '#a6a6a6',
  grey5: '#808080',
  red: 'red',
  lightOrange: '#ff9800',
  transparent: '#ffffff00',
  transparentWhite: '#ffffff55',
  blackTransparent: 'rgba(0,0,0,0.5)',
  darkenText: '#687684',
};

const fonts = {
  SemiBold: 'Poppins-SemiBold',
  Medium: 'Poppins-Medium',
  Regular: 'Poppins-Regular',
  bold: 'Poppins-Bold',
};

const isIos = Platform.OS === 'ios';

export const theme = {
  isIos,
  fonts,
  colors,
  scale,
  verticalScale,
  moderateScale,
  deviceWidth,
  deviceHeight,
};
