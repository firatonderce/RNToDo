import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from '../components/index';

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
      return false;
    }
  };

  getToDosFromStorage = async () => {
    try {
      const result = await AsyncStorage.getItem('toDos');
      this.setToDos(JSON.parse(result));
      return this.getToDos();
    } catch (err) {
      console.log('An Error Occured when trying to get toDos => ', err);
      return false;
    }
  };
}

export default new AsyncStorageManager();
