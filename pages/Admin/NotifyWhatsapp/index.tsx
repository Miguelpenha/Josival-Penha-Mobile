import ContainerDefault from '../../../components/ContainerDefault'
import HeaderBack from '../../../components/HeaderBack'
import { Container } from './style'
import Button from '../../../components/Button'
import Icon from '../../../components/Icon'
import { useNavigation } from '@react-navigation/native'

function NotifyWhatsapp() {
  const navigation = useNavigation()

  return (
    <ContainerDefault scroll>
      <HeaderBack>Notificar</HeaderBack>
      <Container>
        <Button index={1} title="Boleto" onPress={() => navigation.navigate('SelectStudent', {
          next: 'AdminNotifyWhatsappSend'
        })}>
          <Icon icon="star" typeIcon="MaterialIcons"/>
        </Button>
      </Container>
    </ContainerDefault>
  )
}

export default NotifyWhatsapp