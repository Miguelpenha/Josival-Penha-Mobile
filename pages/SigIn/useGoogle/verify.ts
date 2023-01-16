import { AuthSessionResult } from 'expo-auth-session'
import SimpleToast from 'react-native-simple-toast'

async function verify(response: AuthSessionResult, loginGoogle: (accessToken: string) => Promise<{ authenticated: boolean }>) {
    if (response?.type === 'success') {
        const { accessToken } = response.authentication
        const { authenticated } = await loginGoogle(accessToken)

        if (authenticated) {
            SimpleToast.show('Login feito com sucesso!', SimpleToast.SHORT)
        } else {
            SimpleToast.show('Conta inválida', SimpleToast.SHORT)
        }
    }
}

export default verify