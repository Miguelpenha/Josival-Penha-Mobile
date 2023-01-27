import useAuth from '../../contexts/authContext'
import { useNavigation } from '@react-navigation/native'
import Toast from 'react-native-toast-message'

function useLogout() {
    const { teacher: { logout } } = useAuth()
    const navigation = useNavigation()

    async function logoutOnPress() {
        await logout()

        navigation.navigate('Sign', { type: 'teacher' })

        Toast.show({
            type: 'error',
            text1: 'Logout feito'
        })
    }

    return logoutOnPress
}

export default useLogout