import useAuth from '../../../../contexts/authContext'
import { useNavigation } from '@react-navigation/native'
import Toast from 'react-native-toast-message'

function useLogout() {
    const { admin: { logout } } = useAuth()
    const navigation = useNavigation()

    async function logoutOnPress() {
        await logout()

        navigation.navigate('Sign', { type: 'admin' })

        Toast.show({
            type: 'error',
            text1: 'Logout feito'
        })
    }

    return logoutOnPress
}

export default useLogout