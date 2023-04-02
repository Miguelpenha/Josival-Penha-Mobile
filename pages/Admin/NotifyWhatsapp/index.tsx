import { useNavigation } from '@react-navigation/native'
import ContainerDefault from '../../../components/ContainerDefault'
import HeaderBack from '../../../components/HeaderBack'
import { Container } from './style'
import Button from '../../../components/Button'
import Icon from '../../../components/Icon'

function NotifyWhatsapp() {
  const navigation = useNavigation()

  return (
    <ContainerDefault scroll>
      <HeaderBack>Notificar</HeaderBack>
      <Container>
        <Button index={1} title="Boletim" onPress={() => navigation.navigate('SelectStudent', {
          next: 'AdminNotifyWhatsappReportCard'
        })}>
          <Icon icon="star" typeIcon="MaterialIcons"/>
        </Button>
      </Container>
    </ContainerDefault>
  )
}

export default NotifyWhatsapp