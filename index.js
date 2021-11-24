/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './src/Wrapper';
import {name as appName} from './app.json';
import {LogBox} from './src/components';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state'
]);
AppRegistry.registerComponent(appName, () => App);
