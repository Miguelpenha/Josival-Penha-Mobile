import useAuth from '../../contexts/authContext'
import { useNavigation } from '@react-navigation/native'
import SimpleToast from 'react-native-simple-toast'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'

function Admin() {
  const { admin: { logout } } = useAuth()
  const navigation = useNavigation()

  async function onPressLogout() {
    await logout()

    navigation.navigate('Sign', { type: 'admin' })

    SimpleToast.show('Logout feito!', SimpleToast.SHORT)
  }

  return (
    <ContainerPd>
      <HeaderBack onPress={onPressLogout}>Admin</HeaderBack>
    </ContainerPd>
  )
}

export default Admin