import AsyncStorage from '@react-native-async-storage/async-storage';
import RNExitApp from 'react-native-exit-app';
import {Alert} from '../components';

const ErrorHandler = () => {
  Alert.alert("Couldn't get todos from storage", 'Check device permissions', [
    {
      text: 'OK',
      onPress: () => {
        return RNExitApp.exitApp();
      }
    }
  ]);
  return [];
};

class AsyncStorageManager {
  toDos = [];

  setToDos = (toDos = []) => {
    return (this.toDos = [...toDos]);
  };

  getToDos = () => {
    return [...this.toDos];
  };

  setToDosToStorage = async toDos => {
    try {
      const toDosStringified = JSON.stringify(toDos);
      await AsyncStorage.setItem('toDos', toDosStringified);
      this.setToDos(toDos);
      return true;
    } catch (err) {
      console.log('An Error Occured when trying to set toDos => ', err);
      return ErrorHandler();
    }
  };

  getToDosFromStorage = async () => {
    try {
      const result = await AsyncStorage.getItem('toDos');
      this.setToDos(JSON.parse(result));
      return this.getToDos();
    } catch (err) {
      console.log('An Error Occured when trying to get toDos => ', err);
      return ErrorHandler();
    }
  };
}

export default new AsyncStorageManager();
