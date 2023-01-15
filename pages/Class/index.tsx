import useAuth from '../../contexts/authContext'
import { useNavigation } from '@react-navigation/native'
import SimpleToast from 'react-native-simple-toast'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'

function Class() {
    const { logout } = useAuth()
    const navigation = useNavigation()

    async function onPress() {
        await logout()

        navigation.navigate('Login')

        SimpleToast.show('Logout feito!', SimpleToast.SHORT)
    }

    return (
        <ContainerPd>
            <HeaderBack onPress={onPress}>Turmas</HeaderBack>
        </ContainerPd>
    )
}

export default Class