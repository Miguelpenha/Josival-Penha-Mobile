import { useRoute, useNavigation } from '@react-navigation/native'
import base from '../../../services/api/base'
import ContainerDefault from '../../../components/ContainerDefault'
import HeaderBack from '../../../components/HeaderBack'
import { Container } from './style'
import Button from '../../../components/Button'
import toast from 'react-native-toast-message'

interface IParams {
  studentID: string
}

const units = [1, 2, 3, 4]

function NotifyWhatsappReportCard() {
  const { studentID } = useRoute().params as IParams
  const navigation = useNavigation()

  async function handleSubmit(unit: number) {
    await base.get(`/notify/report-card/${studentID}?unit=${unit}`)

    navigation.navigate('AdminHome')

    toast.show({
      type: 'success',
      text1: 'Notificação enviada com sucesso!'
    })
  }

  return (
    <ContainerDefault scroll>
      <HeaderBack>Selecione uma unidade</HeaderBack>
      <Container>
        {units.map(unit => (
          <Button
            loading
            key={unit}
            index={unit}
            title={`${unit}° unidade`}
            onPress={() => handleSubmit(unit)}
          />
        ))}
      </Container>
    </ContainerDefault>
  )
}

export default NotifyWhatsappReportCard