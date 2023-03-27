import { useNavigation } from '@react-navigation/native'
import { useState, useEffect } from 'react'
import { useTheme } from 'styled-components'
import toast from 'react-native-toast-message'
import { Container, Field, Label } from './style'
import { FadeInDown } from 'react-native-reanimated'
import Input from './Input'
import ButtonSubmit from '../../../../components/ButtonSubmit'
import generateDocument from './generateDocument'
import api from '../../../../services/api'
import IStudent from '../../../../types/student'

function Form() {
    const [students, setStudents] = useState<IStudent[]>()
    const navigation = useNavigation()
    const [frequency, setFrequency] = useState(98)
    const theme = useTheme()

    useEffect(() => {
        async function getStudents() {
            const { data } = await api.get('/students')

            setStudents(data)
        }

        getStudents().then()
    }, [])

    async function handleSubmit() {
        if (students) {
            await generateDocument(students[0]._id, frequency, true, `Declaração de frequência do aluno(a) ${students[0].name}.pdf`)

            navigation.goBack()

            toast.show({
                type: 'success',
                text1: 'Declaração gerada com sucesso!'
            })
        }
    }

    return (
        <Container entering={FadeInDown.delay(200).duration(400)}>
            <Field entering={FadeInDown.delay(300).duration(400)}>
                <Label>Porcentagem de frequência</Label>
                <Input
                    keyboardType="numeric"
                    value={String(frequency)}
                    placeholder="Frequência..."
                    cursorColor={theme.primary}
                    onSubmitEditing={handleSubmit}
                    selectionColor={theme.primary}
                    placeholderTextColor={theme.primary}
                    onChangeText={frequencyRaw => {
                        const frequency = Number(frequencyRaw)

                        if (frequency >= 0 && frequency <= 100) {
                            setFrequency(frequency)
                        }
                    }}
                />
            </Field>
            <ButtonSubmit loading title="Gerar" onPress={handleSubmit}/>
        </Container>
    )
}

export default Form