import { useNavigation } from '@react-navigation/native'
import ContainerDefault from '../../../components/ContainerDefault'
import HeaderBack from '../../../components/HeaderBack'
import { Container } from './style'
import Button from '../../../components/Button'
import Icon from '../../../components/Icon'

function Documents() {
  const navigation = useNavigation()

  return (
    <ContainerDefault scroll>
      <HeaderBack>Documentos</HeaderBack>
      <Container>
        <Button index={1} title="Declarações" onPress={() => navigation.navigate('AdminDocumentsDeclarations')}>
          <Icon icon="article" typeIcon="MaterialIcons"/>
        </Button>
      </Container>
    </ContainerDefault>
  )
}

export default Documents