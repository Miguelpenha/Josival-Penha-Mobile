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
      <HeaderBack icon="logout" onPress={logout}>Admin</HeaderBack>
      <Button index={1} title="Alunos" onPress={() => navigation.navigate('SelectStudent', {
        next: 'AdminStudent'
      })}>
        <Icon icon="school" typeIcon="MaterialIcons"/>
      </Button>
      <Button index={2} title="Planilhas" onPress={() => navigation.navigate('AdminSpreadsheets')}>
        <Icon icon="google-spreadsheet" typeIcon="MaterialCommunityIcons"/>
      </Button>
      <Button index={3} title="Documentos" onPress={() => navigation.navigate('AdminDocuments')}>
        <Icon icon="description" typeIcon="MaterialIcons"/>
      </Button>
      <Button index={4} title="Notificar" onPress={() => navigation.navigate('AdminNotify')}>
        <Icon icon="notifications" typeIcon="MaterialIcons"/>
      </Button>
    </ContainerDefault>
  )
}

export default Home