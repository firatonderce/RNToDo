import {Alert} from '../components';

const ErrorHandler = ({
  title = 'Error occured',
  description = 'Unknown error',
  accept = 'OK',
  acceptAction = () => {}
}) => {
  Alert.alert(title, description, [
    {
      text: accept,
      onPress: () => acceptAction()
    }
  ]);
  return [];
};

export default ErrorHandler;
