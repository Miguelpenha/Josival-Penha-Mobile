import useLogout from './useLogout'
import { useNavigation } from '@react-navigation/native'
import ContainerDefault from '../../../components/ContainerDefault'
import HeaderBack from '../../../components/HeaderBack'
import Button from '../../../components/Button'
import Icon from '../../../components/Icon'

function Home() {
  const logout = useLogout()
  const navigation = useNavigation()

  return (
    <ContainerDefault scroll>
      <HeaderBack onPress={logout}>Admin</HeaderBack>
      <Button index={1} title="Planilhas" onPress={() => navigation.navigate('AdminSpreadsheets')}>
        <Icon icon="google-spreadsheet" typeIcon="MaterialCommunityIcons"/>
      </Button>
      <Button index={2} title="Documentos" onPress={() => navigation.navigate('AdminDocuments')}>
        <Icon icon="description" typeIcon="MaterialIcons"/>
      </Button>
    </ContainerDefault>
  )
}

export default Home