import { useRoute, useNavigation } from '@react-navigation/native'
import api from '../../../../services/api'
import IStudent from '../../../../types/student'
import { useState } from 'react'
import { useTheme } from 'styled-components'
import generateDocument from './generateDocument'
import toast from 'react-native-toast-message'
import { Container, Field, Label } from './style'
import { FadeInDown } from 'react-native-reanimated'
import Input from '../../../../components/Input'
import ButtonSubmit from '../../../../components/ButtonSubmit'

interface IParams {
    studentID: string
}

function Form() {
    const params = useRoute().params as IParams
    const { data: student } = api.get<IStudent>(`/students/${params.studentID}`)
    const navigation = useNavigation()
    const monthDefault = new Date().toLocaleString('pt-br', { month: 'long' })
    const [month, setMonth] = useState(monthDefault.charAt(0).toUpperCase() + monthDefault.slice(1))
    const theme = useTheme()

    async function handleSubmit() {
        if (student) {
            await generateDocument(student._id, month, `Declaração financeira do aluno(a) ${student.name}`)

            navigation.navigate('AdminHome')

            toast.show({
                type: 'success',
                text1: 'Declaração gerada com sucesso!'
            })
        }
    }

    return (
        <Container entering={FadeInDown.delay(200).duration(400)}>
            <Field entering={FadeInDown.delay(300).duration(400)}>
                <Label>Adimplente até o Mês</Label>
                <Input
                    placeholder="Mês..."
                    value={String(month)}
                    cursorColor={theme.primary}
                    onSubmitEditing={handleSubmit}
                    selectionColor={theme.primary}
                    placeholderTextColor={theme.primary}
                    onChangeText={month => setMonth(month)}
                />
            </Field>
            <ButtonSubmit loading title="Gerar" onPress={handleSubmit}/>
        </Container>
    )
}

export default Form