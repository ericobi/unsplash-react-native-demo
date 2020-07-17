import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../utils';

export const styles = ScaledSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
    padding: '10@ms',
  },
  text: {
    fontSize: '16@ms',
    marginBottom: '10@ms',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
  },
  userLogo: {
    width: 50,
    height: 50,
  },
  item: {
    height: 80,
    borderRadius: 10,
    borderColor: '#bbb',
    borderWidth: 1,
    marginVertical: 8,
    padding: 15,
    flexDirection: 'row',
  },
  rightBox: {
    flex: 1,
    marginLeft: 20,
  },
  title: {
    fontSize: 16,
  },
  inputBox: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
  },
});
