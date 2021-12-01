import {Alert} from '../components';

const WarnHandler = ({
  title = 'Warning',
  description = 'Unknown Warning',
  accept = 'OK',
  acceptAction = () => {}
}) => {
  return Alert.alert(title, description, [
    {
      text: 'Cancel',
      style: 'cancel'
    },
    {text: accept, onPress: () => acceptAction()}
  ]);
};

export default WarnHandler;
