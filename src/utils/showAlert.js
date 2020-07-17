import {Alert} from 'react-native';
import {Toast} from 'native-base';
import {ScaledSheet} from 'react-native-size-matters';

export const showAlert = (message, onPress) => {
  Alert.alert('Alert', message, [{text: 'OK', onPress}]);
};

export const showToast = (message, type) => {
  Toast.show({
    text: message,
    position: 'bottom',
    type: type == 'success' ? 'success' : 'danger',
    textStyle: styles.toastTextStyle,
    style: styles.toastStyle,
    duration: 800,
  });
};

const styles = ScaledSheet.create({
  toastStyle: {
    marginBottom: '20@ms',
    borderRadius: '5@ms',
    width: '90%',
    alignSelf: 'center',
  },
  toastTextStyle: {
    textAlign: 'center',
    fontSize: '15@ms',
  },
});
