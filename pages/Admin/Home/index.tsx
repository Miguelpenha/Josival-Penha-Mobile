import useLogout from './useLogout'
import { useNavigation } from '@react-navigation/native'
import ContainerPd from '../../../components/ContainerPd'
import HeaderBack from '../../../components/HeaderBack'
import Button from '../../../components/Button'
import Icon from '../../../components/Icon'

function Home() {
  const logout = useLogout()
  const navigation = useNavigation()

  return (
    <ContainerPd>
      <HeaderBack onPress={logout}>Admin</HeaderBack>
      <Button index={1} title="Planilhas" onPress={() => navigation.navigate('AdminSpreadsheets')}>
        <Icon icon="google-spreadsheet" typeIcon="MaterialCommunityIcons"/>
      </Button>
    </ContainerPd>
  )
}

export default Home