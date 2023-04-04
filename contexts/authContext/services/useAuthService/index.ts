import { Dispatch, SetStateAction } from 'react'
import useLogout from './useLogout'
import useLogin from './useLogin'

function useAuthService(setAdminIndex: Dispatch<SetStateAction<number | null>>, setTeacherID: Dispatch<SetStateAction<string | null>>) {
    const { logoutAdmin, logoutTeacher } = useLogout(setAdminIndex, setTeacherID)
    const { loginAdmin, loginTeacher } = useLogin(setAdminIndex, setTeacherID)

    return {
        admin: {
            logout: logoutAdmin,
            loginGoogle: (accessToken: string) => loginAdmin({ accessToken }, 'google'),
            loginLocal: (login: string, password: string) => loginAdmin({ login, password }, 'local')
        },
        teacher: {
            logout: logoutTeacher,
            loginGoogle: (accessToken: string) => loginTeacher({ accessToken }, 'google'),
            loginLocal: (login: string, password: string) => loginTeacher({ login, password }, 'local')
        }
    }
}

export default useAuthService