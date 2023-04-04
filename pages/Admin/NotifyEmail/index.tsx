import { useNavigation } from '@react-navigation/native'
import ContainerDefault from '../../../components/ContainerDefault'
import HeaderBack from '../../../components/HeaderBack'
import { Container } from './style'
import Button from '../../../components/Button'
import Icon from '../../../components/Icon'

function NotifyEmail() {
  const navigation = useNavigation()

  return (
    <ContainerDefault scroll>
      <HeaderBack>Notificar</HeaderBack>
      <Container>
        
      </Container>
    </ContainerDefault>
  )
}

export default NotifyEmail