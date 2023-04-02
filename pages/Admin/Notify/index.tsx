import { useNavigation } from '@react-navigation/native'
import ContainerDefault from '../../../components/ContainerDefault'
import HeaderBack from '../../../components/HeaderBack'
import { Container } from './style'
import Button from '../../../components/Button'
import Icon from '../../../components/Icon'

function Notify() {
  const navigation = useNavigation()

  return (
    <ContainerDefault scroll>
      <HeaderBack>Notificar por</HeaderBack>
      <Container>
        <Button index={1} title="Whatsapp" onPress={() => navigation.navigate('AdminNotifyWhatsapp')}>
          <Icon icon="whatsapp" typeIcon="MaterialCommunityIcons"/>
        </Button>
        <Button index={2} title="E-mail" onPress={() => navigation.navigate('AdminNotifyEmail')}>
          <Icon icon="email" typeIcon="MaterialIcons"/>
        </Button>
      </Container>
    </ContainerDefault>
  )
}

export default Notify