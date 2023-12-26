import { KeyedMutator } from 'swr'
import { Dispatch, SetStateAction, FC, useState, useEffect, memo } from 'react'
import { useTheme } from 'styled-components'
import useHandleSendMessage from './useHandleSendMessage'
import { Container, Field, Label } from './style'
import { FadeInDown } from 'react-native-reanimated'
import Input from '../../../../components/Input'
import ButtonSubmit from '../../../../components/ButtonSubmit'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { Keyboard } from 'react-native'

interface IProps {
  text: string
  title: string
  linkButton: string
  titleButton: string
  mutate: KeyedMutator<string>
  setText: Dispatch<SetStateAction<string>>
  setTitle: Dispatch<SetStateAction<string>>
  setLinkButton: Dispatch<SetStateAction<string>>
  setTitleButton: Dispatch<SetStateAction<string>>
}

const Form: FC<IProps> = ({ title, setTitle, text, setText, titleButton, setTitleButton, linkButton, setLinkButton, mutate }) => {
    const [email, setEmail] = useState('')
    const theme = useTheme()
    const handleSendMessage = useHandleSendMessage(email, title, text, { text: titleButton, link: linkButton })

    useEffect(() => {
      mutate('/notify/email/preview')
    }, [title, text, titleButton, linkButton])

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                autoCapitalize="none"
                cursorColor={theme.primary}
                onChangeText={setLinkButton}
                selectionColor={theme.primary}
                placeholderTextColor={theme.primary}
              />
          </Field>
          <ButtonSubmit loading title="Enviar" onPress={handleSendMessage}/>
      </Container>
    </TouchableWithoutFeedback>
    )
}

export default memo(Form)