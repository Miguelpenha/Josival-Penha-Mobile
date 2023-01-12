import useAuth from '../../../contexts/authContext'
import SimpleToast from 'react-native-simple-toast'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { useTheme } from 'styled-components'
import { Container, Field, Label } from './style'
import { FadeInDown } from 'react-native-reanimated'
import Input from './Input'
import ButtonSubmit from './ButtonSubmit'

function Form() {
    const { login: loginFunction } = useAuth()
    const navigation = useNavigation()
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const theme = useTheme()

    async function onPress() {
        const { authenticated } = await loginFunction(login, password)

        if (authenticated) {
            SimpleToast.show('Login feito com sucesso!', SimpleToast.SHORT)
            navigation.navigate('Class')
        } else {
            SimpleToast.show('Login ou senha inválidos', SimpleToast.SHORT)
        }
    }

    return (
        <Container entering={FadeInDown.delay(200).duration(400)}>
            <Field entering={FadeInDown.delay(300).duration(400)}>
                <Label>Login</Label>
                <Input
                    value={login}
                    placeholder="Login..."
                    onChangeText={setLogin}
                    selectionColor={theme.primary}
                    placeholderTextColor={theme.primary}
                />
            </Field>
            <Field entering={FadeInDown.delay(400).duration(400)}>
                <Label>Senha</Label>
                <Input
                    value={password}
                    autoCapitalize="none"
                    placeholder="Senha..."
                    secureTextEntry={true}
                    autoComplete="password"
                    onChangeText={setPassword}
                    selectionColor={theme.primary}
                    placeholderTextColor={theme.primary}
                />
            </Field>
            <ButtonSubmit onPress={onPress}/>
        </Container>
    )
}

export default Form