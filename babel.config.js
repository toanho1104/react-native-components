module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@assets': './src/assets',
          '@styles': './src/styles',
          '@components': './src/components',
          '@screens': './src/screens',
          '@contexts': './src/contexts',
          '@utils': './src/utils',
          '@navigation': './src/navigation',
          '@types': './src/types',
          '@constants': './src/constants',
        },
      },
    ],
  ],
};
