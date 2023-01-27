import { IAuthContext } from '../../../../contexts/authContext/type'
import Toast from 'react-native-toast-message'

async function verify(loginLocal: IAuthContext['teacher']['loginLocal'] | IAuthContext['admin']['loginLocal'], login: string, password: string) {
    if (login && password) {
        if (login.endsWith('@josivalpenha.com')) {
            const { authenticated } = await loginLocal(login, password)

            if (authenticated) {
                Toast.show({
                    type: 'success',
                    text1: 'Login feito com sucesso'
                })
            } else {
                Toast.show({
                    type: 'error',
                    text1: 'Login ou senha incorretos'
                })
            }
        } else {
            Toast.show({
                type: 'error',
                text1: 'Somente emails da organização são permitidos'
            })
        }
    } else {
        Toast.show({
            type: 'error',
            text1: 'Login ou senha não preenchidos'
        })
    }
}

export default verify