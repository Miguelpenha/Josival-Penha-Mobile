import useAuth from '../../contexts/authContext'
import { useNavigation } from '@react-navigation/native'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import SimpleToast from 'react-native-simple-toast'

function Class() {
    const { logout } = useAuth()
    const navigation = useNavigation()

    async function onPressLogout() {
        await logout()

        navigation.navigate('SigIn')

        SimpleToast.show('Logout feito!', SimpleToast.SHORT)
    }

    return (
        <ContainerPd>
            <HeaderBack onPress={onPressLogout}>Turmas</HeaderBack>
        </ContainerPd>
    )
}

export default Class