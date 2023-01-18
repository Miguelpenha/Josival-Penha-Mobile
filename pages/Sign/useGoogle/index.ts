import * as WebBrowser from 'expo-web-browser'
import { ITypeLogin } from '../../../types'
import useAuthRequest from './useAuthRequest'
import useAuth from '../../../contexts/authContext'
import useLogin from './useLogin'
import { useEffect } from 'react'
import verify from './verify'

WebBrowser.maybeCompleteAuthSession()

function useGoogle(type: ITypeLogin) {
    const { response, promptAsync } = useAuthRequest()
    const { admin: { loginGoogle: loginGoogleAdmin }, teacher: { loginGoogle: loginGoogleTeacher } } = useAuth()
    const { login } = useLogin(promptAsync)

    useEffect(() => {
        verify(response, type === 'admin' ? loginGoogleAdmin : loginGoogleTeacher).then()
    }, [response])

    return { loginGoogle: login }
}

export default useGoogle