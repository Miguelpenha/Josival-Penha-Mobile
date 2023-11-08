import { FC, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components'
import apiBase from '../../../../services/api/base'
import toast from 'react-native-toast-message'
import { Container, Field, Label } from './style'
import { FadeInDown } from 'react-native-reanimated'
import Input from '../../../../components/Input'
import ButtonSubmit from '../../../../components/ButtonSubmit'

interface IProps {
    student: string
}

const Form: FC<IProps> = ({ student }) => {
    const navigation = useNavigation()
    const [value, setValue] = useState('')
    const [billingDate, setBillingDate] = useState('')
    const [payDate, setPayDate] = useState('')
    const [payMethod, setPayMethod] = useState('')
    const [category, setCategory] = useState('')
    const theme = useTheme()

    async function handleSubmit() {
        if (student) {
            const { created } = (await apiBase.post<{ created: boolean }>('/incomes', {
                value,
                payDate,
                student,
                category,
                payMethod,
                billingDate
            })).data

            if (created) {
                navigation.navigate('AdminHome')

                toast.show({
                    type: 'success',
                    text1: 'Receita cadastrada com sucesso!'
                })
            } else {
                toast.show({
                    type: 'error',
                    text1: 'Houve um erro ao cadastrar a receita'
                })
            }
        }
    }

    return (
        <Container entering={FadeInDown.delay(200).duration(400)}>
            <Field entering={FadeInDown.delay(300).duration(400)}>
                <Label>Valor</Label>
                <Input
                    value={value}
                    placeholder="Valor..."
                    cursorColor={theme.primary}
                    selectionColor={theme.primary}
                    placeholderTextColor={theme.primary}
                    onChangeText={value => setValue(value)}
                />
            </Field>
            <Field entering={FadeInDown.delay(400).duration(400)}>
                <Label>Data da cobrança</Label>
                <Input
                    value={billingDate}
                    cursorColor={theme.primary}
                    selectionColor={theme.primary}
                    placeholder="Data da cobrança..."
                    placeholderTextColor={theme.primary}
                    onChangeText={billingDate => setBillingDate(billingDate)}
                />
            </Field>
            <Field entering={FadeInDown.delay(500).duration(400)}>
                <Label>Data do pagamento</Label>
                <Input
                    value={payDate}
                    cursorColor={theme.primary}
                    selectionColor={theme.primary}
                    placeholder="Data do pagamento..."
                    placeholderTextColor={theme.primary}
                    onChangeText={payDate => setPayDate(payDate)}
                />
            </Field>
            <Field entering={FadeInDown.delay(600).duration(400)}>
                <Label>Método</Label>
                <Input
                    value={payMethod}
                    cursorColor={theme.primary}
                    selectionColor={theme.primary}
                    placeholder="Método do pagamento..."
                    placeholderTextColor={theme.primary}
                    onChangeText={payMethod => setPayMethod(payMethod)}
                />
            </Field>
            <Field entering={FadeInDown.delay(700).duration(400)}>
                <Label>Categoria</Label>
                <Input
                    value={category}
                    cursorColor={theme.primary}
                    selectionColor={theme.primary}
                    placeholderTextColor={theme.primary}
                    placeholder="Categoria da receita..."
                    onChangeText={category => setCategory(category)}
                />
            </Field>
            <ButtonSubmit disabled={!value || !billingDate || !payDate || !payMethod || !category} loading title="Cadastrar" onPress={handleSubmit}/>
        </Container>
    )
}

export default Form