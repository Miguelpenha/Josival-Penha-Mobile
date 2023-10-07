import base from '../../../services/api/base'
import ContainerDefault from '../../../components/ContainerDefault'
import HeaderBack from '../../../components/HeaderBack'
import { Container } from './style'
import Button from '../../../components/Button'
import Icon from '../../../components/Icon'
import Toast from 'react-native-toast-message'

function NotifyWhatsapp() {
  async function handleSendMessage() {
    const { data } = await base.post<{ send: boolean }>('/notify/whatsapp/whatsapp:558183705775', {
      month: '10'
    })

    if (data.send) {
      Toast.show({
        type: 'success',
        text1: 'Boleto enviado com sucesso!'
      })
    }
  }

  return (
    <ContainerDefault scroll>
      <HeaderBack>Notificar</HeaderBack>
      <Container>
        <Button index={1} title="Boleto" onPress={handleSendMessage}>
          <Icon icon="star" typeIcon="MaterialIcons"/>
        </Button>
      </Container>
    </ContainerDefault>
  )
}

export default NotifyWhatsapp