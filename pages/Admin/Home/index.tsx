import useLogout from './useLogout'
import { useNavigation } from '@react-navigation/native'
import ContainerPd from '../../../components/ContainerPd'
import HeaderBack from '../../../components/HeaderBack'
import Button from '../../../components/Button'

function Home() {
  const logout = useLogout()
  const navigation = useNavigation()

  return (
    <ContainerPd>
      <HeaderBack onPress={logout}>Admin</HeaderBack>
      <Button index={1} icon="google-spreadsheet" typeIcon="MaterialCommunityIcons" onPress={() => navigation.navigate('AdminSpreadsheets')}>
        Planilhas
      </Button>
    </ContainerPd>
  )
}

export default Home