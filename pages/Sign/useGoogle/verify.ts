import { AuthSessionResult } from 'expo-auth-session'
import { IAuthContext } from '../../../contexts/authContext/type'
import Toast from 'react-native-toast-message'

async function verify(response: AuthSessionResult, loginGoogle: IAuthContext['teacher']['loginGoogle'] | IAuthContext['admin']['loginGoogle']) {
    if (response?.type === 'success') {
        const { accessToken } = response.authentication
        const { authenticated } = await loginGoogle(accessToken)

        console.log(accessToken)

        if (authenticated) {
            Toast.show({
                type: 'success',
                text1: 'Login feito com sucesso'
            })
        } else {
            Toast.show({
                type: 'error',
                text1: 'Conta inválida'
            })
        }
    }
}

export default verify