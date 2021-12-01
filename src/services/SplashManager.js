import RNBootSplash from 'react-native-bootsplash';

const displaySplash = (duration = 1000) => {
  RNBootSplash.show();
  setTimeout(() => RNBootSplash.hide({fade: true}), duration);
};

const SplashScreen = {
  displaySplash
};

export default SplashScreen;
