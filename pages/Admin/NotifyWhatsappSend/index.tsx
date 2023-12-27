import { useRoute } from '@react-navigation/native'
import api from '../../../services/api'
import IStudent from '../../../types/student'
import { useState, useEffect } from 'react'
import { useTheme } from 'styled-components'
import ContainerDefault from '../../../components/ContainerDefault'
import HeaderBack from '../../../components/HeaderBack'
import { Container, Field, Label } from './style'
import { FadeInDown } from 'react-native-reanimated'
import Input from '../../../components/Input'
import ButtonSubmit from '../../../components/ButtonSubmit'
import useHandleSendMessage from './useHandleSendMessage'

interface IParams {
  studentID: string
}

function NotifyWhatsappSend() {
  const { studentID } = useRoute().params as IParams
  const { data: student } = api.get<IStudent>(`/students/${studentID}`)
  const [telephone, setTelephone] = useState('')
  const [month, setMonth] = useState(new Date().toLocaleDateString('pt-br').split('/')[1])
  const theme = useTheme()
  const handleSendMessage = useHandleSendMessage(telephone)

  useEffect(() => {
    if (student) {
      setTelephone(student.telephone)
    }
  }, [student])

  return (
    <ContainerDefault scroll>
      <HeaderBack>Enviar boleto</HeaderBack>
      <Container entering={FadeInDown.delay(200).duration(400)}>
          <Field entering={FadeInDown.delay(300).duration(400)}>
              <Label>Telefone</Label>
              <Input
                  value={telephone}
                  autoComplete="tel"
                  placeholder="Telefone..."
                  onChangeText={setTelephone}
                  cursorColor={theme.primary}
                  selectionColor={theme.primary}
                  placeholderTextColor={theme.primary}
              />
          </Field>
          <Field entering={FadeInDown.delay(400).duration(400)}>
              <Label>Mês do boleto</Label>
              <Input
                  value={month}
                  placeholder="Mês..."
                  onChangeText={setMonth}
                  cursorColor={theme.primary}
                  selectionColor={theme.primary}
                  placeholderTextColor={theme.primary}
              />
          </Field>
          <ButtonSubmit loading title="Enviar" onPress={handleSendMessage}/>
      </Container>
    </ContainerDefault>
  )
}

export default NotifyWhatsappSend