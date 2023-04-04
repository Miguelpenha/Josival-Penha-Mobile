import { Dispatch, SetStateAction } from 'react'
import logout from './logout'

function useLogout(setAdminIndex: Dispatch<SetStateAction<number | null>>, setTeacherID: Dispatch<SetStateAction<string | null>>) {
    return {
        logoutAdmin: () => logout(setAdminIndex, 'adminIndex'),
        logoutTeacher: () => logout(setTeacherID, 'teacherID')
    }
}

export default useLogout