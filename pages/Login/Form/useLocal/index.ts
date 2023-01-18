import { ITypeLogin } from '../../../../types'
import useAuth from '../../../../contexts/authContext'
import verify from './verify'

function useLocal(type: ITypeLogin, login: string, password: string) {
    const { admin: { loginLocal: loginLocalAdmin }, teacher: { loginLocal: loginLocalTeacher } } = useAuth()

    return {
        loginLocal: async () => (
            await verify(
                type === 'admin' ? loginLocalAdmin : loginLocalTeacher,
                login,
                password
            )
        )
    }
}

export default useLocal