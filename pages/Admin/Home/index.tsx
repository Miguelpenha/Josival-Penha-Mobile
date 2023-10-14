import { useNavigation } from '@react-navigation/native'
import useModalize from '../../../components/useModalize'
import ContainerDefault from '../../../components/ContainerDefault'
import HeaderBack from '../../../components/HeaderBack'
import Button from '../../../components/Button'
import Icon from '../../../components/Icon'
import { ButtonSpreadsheet } from './style'
import { Modalize } from 'react-native-modalize'
import ModalizeLogout from '../../../components/ModalizeLogout'

function Home() {
  const navigation = useNavigation()
  const { modalize: modalizeLogout, props: propsModalizeLogout } = useModalize()

  return <>
    <ContainerDefault scroll>
      <HeaderBack settings icon="logout" onPress={modalizeLogout.open}>Admin (beta 7)</HeaderBack>
      <Button index={1} title="Alunos" onPress={() => navigation.navigate('SelectStudent', {
        next: 'AdminStudent'
      })}>
        <Icon icon="school" typeIcon="MaterialIcons"/>
      </Button>
      <ButtonSpreadsheet index={2} title="Planilhas" onPress={() => navigation.navigate('AdminSpreadsheets')}>
        <Icon icon="google-spreadsheet" typeIcon="MaterialCommunityIcons"/>
      </ButtonSpreadsheet>
      <Button index={3} title="Documentos" onPress={() => navigation.navigate('AdminDocuments')}>
        <Icon icon="description" typeIcon="MaterialIcons"/>
      </Button>
      <Button index={4} title="Notificar" onPress={() => navigation.navigate('AdminNotify')}>
        <Icon icon="notifications" typeIcon="MaterialIcons"/>
      </Button>
    </ContainerDefault>
    <Modalize avoidKeyboardLikeIOS={true} {...propsModalizeLogout}>
      <ModalizeLogout type="admin" modalize={modalizeLogout.ref}/>
    </Modalize>
  </>
}

export default Home