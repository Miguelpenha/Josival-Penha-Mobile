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
import Switch from '../../../../components/Switch'
import ButtonSubmit from '../../../../components/ButtonSubmit'

interface IParams {
    studentID: string
}

function Form() {
    const params = useRoute().params as IParams
    const { data: student } = api.get<IStudent>(`/students/${params.studentID}`)
    const navigation = useNavigation()
    const [frequency, setFrequency] = useState(98)
    const [isScholarship, setIsScholarship] = useState(false)
    const theme = useTheme()

    async function handleSubmit() {
        if (student) {
            await generateDocument(student._id, frequency, isScholarship, `Declaração de frequência do aluno(a) ${student.name}`)

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
            <Field entering={FadeInDown.delay(400).duration(400)}>
                <Switch label="Bolsista" value={isScholarship} setValue={setIsScholarship}/>
            </Field>
            <ButtonSubmit loading title="Gerar" onPress={handleSubmit}/>
        </Container>
    )
}

export default Form