import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../utils';
import {Dimensions} from 'react-native';

export const styles = ScaledSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
    padding: '10@ms',
  },
  textX: {color: '#FFF', fontSize: 30},
  xButton: {
    position: 'absolute',
    top: 30,
    right: 10,
    width: 30,
    height: 30,
    zIndex: 33,
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
    width: 100,
    height: 100,
  },
  item: {
    height: 120,
    marginVertical: 8,
    padding: 10,
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
  imageItem: {
    flex: 1,
  },
  imageItemImage: {
    width: '100%',
    height: Dimensions.get('screen').width / 3 - 10,
  },
});
