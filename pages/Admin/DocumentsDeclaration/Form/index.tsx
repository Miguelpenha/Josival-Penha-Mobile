import { useState, useEffect } from 'react'
import IStudent from '../../../../types/student'
import { useRoute, useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components'
import api from '../../../../services/api'
import generateDocument from './generateDocument'
import toast from 'react-native-toast-message'
import { Container, Field, Label } from './style'
import { FadeInDown } from 'react-native-reanimated'
import Input from './Input'
import ButtonSubmit from '../../../../components/ButtonSubmit'

interface IParams {
    studentID: string
}

function Form() {
    const [student, setStudent] = useState<IStudent>()
    const params = useRoute().params as IParams
    const navigation = useNavigation()
    const [frequency, setFrequency] = useState(98)
    const theme = useTheme()

    useEffect(() => {
        async function getStudent() {
            const { data } = await api.get(`/students/${params.studentID}`)

            setStudent(data)
        }

        getStudent().then()
    }, [])

    async function handleSubmit() {
        if (student) {
            await generateDocument(student._id, frequency, true, `Declaração de frequência do aluno(a) ${student.name}`)

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