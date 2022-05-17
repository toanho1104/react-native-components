import {responsive} from './responsive';

export const fonts = {
  regular: {
    fontFamily: 'Poppins-Regular',
  },
  bold: {
    fontFamily: 'Poppins-Bold',
  },
};

export const textStyles = {
  heading1: {
    ...fonts.bold,
    fontSize: responsive(32),
    // lineHeight: 1.5,
  },
  heading2: {
    ...fonts.bold,
    fontSize: responsive(24),
    // lineHeight: 1.5,
  },
  heading3: {
    ...fonts.bold,
    fontSize: responsive(20),
    // lineHeight: 1.5,
  },
  heading4: {
    ...fonts.bold,
    fontSize: responsive(17),
    // lineHeight: 1.5,
  },
  heading5: {
    ...fonts.bold,
    fontSize: responsive(15),
    // lineHeight: 1.5,
  },
  heading6: {
    ...fonts.bold,
    fontSize: responsive(13),
    // lineHeight: 1.5,
  },

  bodyLargeTextBold: {
    ...fonts.bold,
    fontSize: responsive(17),
  },
  bodyLargeTextRegular: {
    ...fonts.regular,
    fontSize: responsive(17),
  },
  bodyMediumTextBold: {
    ...fonts.bold,
    fontSize: responsive(15),
  },
  bodyMediumTextRegular: {
    ...fonts.regular,
    fontSize: responsive(15),
  },
  bodyNormalTextBold: {
    ...fonts.bold,
    fontSize: responsive(13),
  },
  bodyNormalTextRegular: {
    ...fonts.regular,
    fontSize: responsive(13),
  },

  captionLargeTextBold: {
    ...fonts.bold,
    fontSize: responsive(15),
    // lineHeight: 1.5,
  },
  captionLargeTextRegular: {
    ...fonts.regular,
    fontSize: responsive(15),
    // lineHeight: 1.5,
  },
  captionNormalTextBold: {
    ...fonts.bold,
    fontSize: responsive(13),
    // lineHeight: 1.5,
  },
  captionNormalTextRegular: {
    ...fonts.regular,
    fontSize: responsive(13),
    // lineHeight: 1.5,
  },
  captionSmallTextBold: {
    ...fonts.bold,
    fontSize: responsive(11),
    // lineHeight: 1.5,
  },
  captionSmallTextRegular: {
    ...fonts.regular,
    fontSize: responsive(11),
    // lineHeight: 1.5,
  },

  captionNormalRegularLine: {
    ...fonts.regular,
    fontSize: responsive(10),
    textDecorationLine: 'line-through',
    // lineHeight: 1.5,
  },

  linkNormal: {
    ...fonts.bold,
    fontSize: responsive(14),
    // lineHeight: 1.5,
    // color: COLORS.light.PRIMARY,
  },
  linkSmall: {
    ...fonts.bold,
    fontSize: responsive(12),
    // lineHeight: 1.5,
    // color: COLORS.light.PRIMARY,
  },

  formTextBold: {
    ...fonts.bold,
    fontSize: responsive(13),
    // lineHeight: 1.5,
  },
  formTextRegular: {
    ...fonts.regular,
    fontSize: responsive(13),
    // lineHeight: 1.5,
  },
  buttonText: {
    ...fonts.bold,
    fontSize: responsive(15),
    // lineHeight: 1.5,
  },
};
