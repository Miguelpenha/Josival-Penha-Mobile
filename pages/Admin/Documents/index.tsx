import { useNavigation } from '@react-navigation/native'
import ContainerPd from '../../../components/ContainerPd'
import HeaderBack from '../../../components/HeaderBack'
import { Container } from './style'
import Button from '../../../components/Button'
import Icon from '../../../components/Icon'

function Documents() {
  const navigation = useNavigation()

  return (
    <ContainerPd scroll>
      <HeaderBack>Documentos</HeaderBack>
      <Container>
        <Button index={1} title="Declaração" onPress={() => navigation.navigate('AdminDocumentsDeclaration')}>
          <Icon icon="article" typeIcon="MaterialIcons"/>
        </Button>
      </Container>
    </ContainerPd>
  )
}

export default Documents