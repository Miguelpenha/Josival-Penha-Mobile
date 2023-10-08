import { ITypeLogin } from '../../../types'
import { useState } from 'react'
import { useTheme } from 'styled-components'
import { useRoute } from '@react-navigation/native'
import useLocal from './useLocal'
import { Container, Field, Label } from './style'
import { FadeInDown } from 'react-native-reanimated'
import Input from '../../../components/Input'
import ButtonSubmit from '../../../components/ButtonSubmit'

interface IParams {
    type: ITypeLogin
}

function Form() {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const theme = useTheme()
    const { type } = useRoute().params as IParams
    const { loginLocal } = useLocal(type, login, password)

    return (
        <Container entering={FadeInDown.delay(200).duration(400)}>
            <Field entering={FadeInDown.delay(300).duration(400)}>
                <Label>Login</Label>
                <Input
                    value={login}
                    autoComplete="email"
                    autoCapitalize="none"
                    placeholder="Login..."
                    onChangeText={setLogin}
                    cursorColor={theme.primary}
                    keyboardType="email-address"
                    onSubmitEditing={loginLocal}
                    selectionColor={theme.primary}
                    placeholderTextColor={theme.primary}
                />
            </Field>
            <Field entering={FadeInDown.delay(400).duration(400)}>
                <Label>Senha</Label>
                <Input
                    icon
                    value={password}
                    placeholder="Senha..."
                    autoComplete="password"
                    onChangeText={setPassword}
                    cursorColor={theme.primary}
                    onSubmitEditing={loginLocal}
                    selectionColor={theme.primary}
                    placeholderTextColor={theme.primary}
                />
            </Field>
            <ButtonSubmit loading title="Confirmar" onPress={loginLocal}/>
        </Container>
    )
}

export default Form