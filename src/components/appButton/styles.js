import { ScaledSheet } from 'react-native-size-matters';
// import { colors } from '../../utils'

export const styles = ScaledSheet.create({
    loginButton: {
        height: '120@ms',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: '20@ms'
    },
    button: {
        height: '45@ms',
        borderRadius: '7@ms',
        width: '70%',
        backgroundColor: '#92B6D4',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
      },
    buttonText: {
        fontSize: '16@ms',
        marginLeft: '15@ms',
        color: 'white',
        fontWeight: 'bold'
    }
});
