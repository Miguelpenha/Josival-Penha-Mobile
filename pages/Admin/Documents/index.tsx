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
        <Button index={1} title="Declaração de frequência" onPress={() => navigation.navigate('SelectStudent', {
          next: 'AdminDocumentsDeclaration'
        })}>
          <Icon icon="article" typeIcon="MaterialIcons"/>
        </Button>
        <Button index={2} title="Declaração financeira" onPress={() => navigation.navigate('SelectStudent', {
          next: 'AdminDocumentsDeclarationFinancial'
        })}>
          <Icon icon="article" typeIcon="MaterialIcons"/>
        </Button>
      </Container>
    </ContainerDefault>
  )
}

export default Documents