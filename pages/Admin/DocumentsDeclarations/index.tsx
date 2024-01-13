import { useNavigation } from '@react-navigation/native'
import ContainerDefault from '../../../components/ContainerDefault'
import HeaderBack from '../../../components/HeaderBack'
import Button from '../../../components/Button'
import Icon from '../../../components/Icon'

function DocumentsDeclarations() {
  const navigation = useNavigation()

  return (
    <ContainerDefault>
      <HeaderBack>Declarações</HeaderBack>
      <Button index={1} title="Frequência" onPress={() => navigation.navigate('SelectStudent', {
        next: 'AdminDocumentsDeclarationFrequency'
      })}>
        <Icon icon="article" typeIcon="MaterialIcons"/>
      </Button>
      <Button index={2} title="Financeira" onPress={() => navigation.navigate('SelectStudent', {
        next: 'AdminDocumentsDeclarationFinancial'
      })}>
        <Icon icon="article" typeIcon="MaterialIcons"/>
      </Button>
      <Button index={3} title="Provisória de transferência" onPress={() => navigation.navigate('SelectStudent', {
        next: 'AdminDocumentsDeclarationProvisionalTransfer'
      })}>
        <Icon icon="article" typeIcon="MaterialIcons"/>
      </Button>
    </ContainerDefault>
  )
}

export default DocumentsDeclarations