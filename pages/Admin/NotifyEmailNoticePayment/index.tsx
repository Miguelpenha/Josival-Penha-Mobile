import { useEffect, useState } from 'react'
import { useTheme } from 'styled-components'
import useHandleSendMessage from './useHandleSendMessage'
import api from '../../../services/api'
import ContainerDefault from '../../../components/ContainerDefault'
import HeaderBack from '../../../components/HeaderBack'
import { Form, Field, Label, Preview } from './style'
import { FadeInDown } from 'react-native-reanimated'
import Input from '../../../components/Input'
import ButtonSubmit from '../../../components/ButtonSubmit'
import RenderHtml from 'react-native-render-html'
import { Dimensions } from 'react-native'

function NotifyEmailNoticePayment() {
  const [email, setEmail] = useState('')
  const [title, setTitle] = useState('Problemas com os últimos pagamentos 😓')
  const [text, setText] = useState(`Olá, vimos que você deve problemas nós seus últimos pagamentos.
Para quitar esses pagamentos, entre em contato conosco pelo botão abaixo 😉`)
  const [titleButton, setTitleButton] = useState('Fale conosco')
  const [linkButton, setLinkButton] = useState('https://api.whatsapp.com/send?phone=558194997501')
  const theme = useTheme()
  const handleSendMessage = useHandleSendMessage(email, title, text, { text: titleButton, link: linkButton })
  const { data, mutate } = api.post<string, object>('/notify/email/preview', { title, text, action: { text: titleButton, link: linkButton }})

  useEffect(() => {
    mutate()
  }, [title, text, titleButton, linkButton])

  return (
    <ContainerDefault scroll>
      <HeaderBack>Enviar aviso de pagamento</HeaderBack>
      <Form entering={FadeInDown.delay(200).duration(400)}>
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
          <Field entering={FadeInDown.delay(500).duration(400)}>
              <Label>Texto do aviso</Label>
              <Input
                multiline
                value={text}
                numberOfLines={4}
                placeholder="Texto..."
                onChangeText={setText}
                textAlignVertical="top"
                cursorColor={theme.primary}
                selectionColor={theme.primary}
                placeholderTextColor={theme.primary}
              />
          </Field>
          <Field entering={FadeInDown.delay(600).duration(400)}>
              <Label>Título do botão</Label>
              <Input
                value={titleButton}
                placeholder="Título..."
                cursorColor={theme.primary}
                onChangeText={setTitleButton}
                selectionColor={theme.primary}
                placeholderTextColor={theme.primary}
              />
          </Field>
          <Field entering={FadeInDown.delay(700).duration(400)}>
              <Label>Link do botão</Label>
              <Input
                inputMode="url"
                value={linkButton}
                keyboardType="url"
                autoComplete="url"
                placeholder="Link..."
                cursorColor={theme.primary}
                onChangeText={setLinkButton}
                selectionColor={theme.primary}
                placeholderTextColor={theme.primary}
              />
          </Field>
          <ButtonSubmit loading title="Enviar" onPress={handleSendMessage}/>
      </Form>
      {data && (
        <Preview>
          <RenderHtml
            source={{ html: data }}
            contentWidth={Dimensions.get('window').width}
            renderersProps={{ img: { enableExperimentalPercentWidth: true } }}
          />
        </Preview>
      )}
    </ContainerDefault>
  )
}

export default NotifyEmailNoticePayment