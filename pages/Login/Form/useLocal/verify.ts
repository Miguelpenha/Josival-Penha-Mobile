import { IAuthContext } from '../../../../contexts/authContext/type'
import SimpleToast from 'react-native-simple-toast'

async function verify(loginLocal: IAuthContext['teacher']['loginLocal'] | IAuthContext['admin']['loginLocal'], login: string, password: string) {
    if (login && password) {
        const { authenticated } = await loginLocal(login, password)

        if (authenticated) {
            SimpleToast.show('Login feito com sucesso!', SimpleToast.SHORT)
        } else {
            SimpleToast.show('Login ou senha inválidos', SimpleToast.SHORT)
        }
    } else {
        SimpleToast.show('Login ou senha inválidos', SimpleToast.SHORT)
    }
}

export default verify