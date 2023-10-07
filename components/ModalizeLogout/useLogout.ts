import { ITypeLogin } from '../../types'
import useAuth from '../../contexts/authContext'
import { useNavigation } from '@react-navigation/native'
import Toast from 'react-native-toast-message'

function useLogout(type: ITypeLogin) {
    const { admin: { logout: logoutAdmin }, teacher: { logout: logoutTeacher } } = useAuth()
    const navigation = useNavigation()

    async function logoutOnPress() {
        if (type == 'admin') {
            await logoutAdmin()
        } else {
            await logoutTeacher()
        }

        navigation.navigate('Home')

        Toast.show({
            type: 'error',
            text1: 'Logout feito'
        })
    }

    return logoutOnPress
}

export default useLogout