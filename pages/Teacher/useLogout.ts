import useAuth from '../../contexts/authContext'
import { useNavigation } from '@react-navigation/native'
import SimpleToast from 'react-native-simple-toast'

function useLogout() {
    const { teacher: { logout } } = useAuth()
    const navigation = useNavigation()

    async function logoutOnPress() {
        await logout()

        navigation.navigate('Sign', { type: 'teacher' })

        SimpleToast.show('Logout feito!', SimpleToast.SHORT)
    }

    return logoutOnPress
}

export default useLogout