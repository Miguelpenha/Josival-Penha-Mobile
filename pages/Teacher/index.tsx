import useAuth from '../../contexts/authContext'
import { useNavigation } from '@react-navigation/native'
import SimpleToast from 'react-native-simple-toast'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'

function Teacher() {
  const { teacher: { logout } } = useAuth()
  const navigation = useNavigation()

  async function onPressLogout() {
    await logout()

    navigation.navigate('Sign', { type: 'teacher' })

    SimpleToast.show('Logout feito!', SimpleToast.SHORT)
  }

  return (
    <ContainerPd>
      <HeaderBack onPress={onPressLogout}>Professora</HeaderBack>
    </ContainerPd>
  )
}

export default Teacher