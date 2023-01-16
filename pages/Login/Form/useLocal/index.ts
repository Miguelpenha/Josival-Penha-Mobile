import useAuth from '../../../../contexts/authContext'
import verify from './verify'

function useLocal(login: string, password: string) {
    const { loginLocal } = useAuth()

    return {
        loginLocal: async () => await verify(loginLocal, login, password)
    }
}

export default useLocal