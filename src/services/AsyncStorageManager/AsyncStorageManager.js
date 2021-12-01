import AsyncStorage from '@react-native-async-storage/async-storage';
import ErrorHandler from '../ErrorHandler';
import errors from './errors';

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
    } catch (error) {
      console.log('An Error Occured when trying to set toDos => ', error);
      return ErrorHandler(errors.setToDosError);
    }
  };

  getToDosFromStorage = async () => {
    try {
      const toDos = await AsyncStorage.getItem('toDos');
      const result = toDos?.length ? JSON.parse(toDos) : [];
      this.setToDos(result);
      return this.getToDos();
    } catch (error) {
      console.log('An Error Occured when trying to get toDos => ', error);
      return ErrorHandler(errors.getToDosError);
    }
  };
}

export default new AsyncStorageManager();
