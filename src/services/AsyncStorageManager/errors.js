import RNExitApp from 'react-native-exit-app';

const getToDosError = {
  title: "Couldn't get todos from storage",
  description: 'Check device permissions',
  acceptAction: () => RNExitApp.exitApp()
};

const setToDosError = {
  acceptAction: () => RNExitApp.exitApp()
};

export default {getToDosError, setToDosError};
