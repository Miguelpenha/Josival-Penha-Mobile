import * as WebBrowser from 'expo-web-browser'
import useAuthRequest from './useAuthRequest'
import useAuth from '../../../contexts/authContext'
import useLogin from './useLogin'
import { useEffect } from 'react'
import verify from './verify'

WebBrowser.maybeCompleteAuthSession()

function useGoogle() {
    const { response, promptAsync } = useAuthRequest()
    const { loginGoogle } = useAuth()
    const { login } = useLogin(promptAsync)

    useEffect(() => {
        verify(response, loginGoogle).then()
    }, [response])

    return { loginGoogle: login }
}

export default useGoogle