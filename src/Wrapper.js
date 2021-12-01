import React from 'react';
import RootStack from './navigation/RootStack';
import SplashManager from './services/SplashManager';

SplashManager.displaySplash(1250);

const App = () => {
  return <RootStack />;
};

export default App;
