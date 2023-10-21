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

function NotifyEmailNotice() {
  const [email, setEmail] = useState('')
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const theme = useTheme()
  const handleSendMessage = useHandleSendMessage(email, title, text)

  return (
    <ContainerDefault scroll>
      <HeaderBack>Enviar aviso</HeaderBack>
      <Container entering={FadeInDown.delay(200).duration(400)}>
          <Field entering={FadeInDown.delay(300).duration(400)}>
              <Label>E-mail do aluno</Label>
              <Input
                value={email}
                autoComplete="email"
                autoCapitalize="none"
                onChangeText={setEmail}
                placeholder="E-mail..."
                cursorColor={theme.primary}
                selectionColor={theme.primary}
                placeholderTextColor={theme.primary}
              />
          </Field>
          <Field entering={FadeInDown.delay(400).duration(400)}>
              <Label>Título do aviso</Label>
              <Input
                  value={title}
                  placeholder="Título..."
                  onChangeText={setTitle}
                  cursorColor={theme.primary}
                  selectionColor={theme.primary}
                  placeholderTextColor={theme.primary}
              />
          </Field>
          <Field entering={FadeInDown.delay(400).duration(400)}>
              <Label>Texto do aviso</Label>
              <Input
                  multiline
                  value={text}
                  numberOfLines={3}
                  placeholder="Texto..."
                  onChangeText={setText}
                  textAlignVertical="top"
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

export default NotifyEmailNotice