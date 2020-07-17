import { ScaledSheet } from 'react-native-size-matters';
import { colors } from '../../utils'

export const styles = ScaledSheet.create({
  appHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '44@ms',
    width: '100%',
    backgroundColor: colors.blue
  },
  title: {
    fontSize: '16@ms',
    fontWeight: 'bold',
    color: 'white'
  },
  icon: {
    height: '18@ms',
    width: '18@ms',
  },
  leftButton: {
    paddingLeft: '20@ms',
  },
  rightView: {
    flexDirection: 'row',
    justifyContent: 'flex-end', 
  },
  leftButton: {
    height: '35@ms', 
    width: '35@ms',
    justifyContent: 'center',
    marginLeft: '10@ms'
  },
  rightButton: {
    height: '35@ms', 
    width: '35@ms',
    marginRight: '10@ms',
    justifyContent: 'center'
  },
  rightButton2: {
    height: '35@ms', 
    width: '35@ms',
    justifyContent: 'center'
  }
});
