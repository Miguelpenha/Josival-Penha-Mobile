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
    const [nextClass, setNextClass] = useState('')
    const [progression, setProgression] = useState(true)
    const theme = useTheme()

    async function handleSubmit() {
        if (student && nextClass) {5
            await generateDocument(student._id, nextClass, progression, `Declaração provisória de transferência do aluno(a) ${student.name}`)

            navigation.navigate('AdminHome')

            toast.show({
                type: 'success',
                text1: 'Declaração gerada com sucesso!'
            })
        } else {
            toast.show({
                type: 'error',
                text1: 'Há campos vazios'
            })
        }
    }

    return (
        <Container entering={FadeInDown.delay(200).duration(400)}>
            <Field entering={FadeInDown.delay(300).duration(400)}>
                <Label>Nome da futura turma do aluno</Label>
                <Input
                    value={nextClass}
                    cursorColor={theme.primary}
                    onChangeText={setNextClass}
                    onSubmitEditing={handleSubmit}
                    selectionColor={theme.primary}
                    placeholderTextColor={theme.primary}
                    placeholder="Turma da outra escola......"
                />
            </Field>
            <Field entering={FadeInDown.delay(400).duration(400)}>
                <Switch label="Progressão Plena" value={progression} setValue={setProgression}/>
            </Field>
            <ButtonSubmit loading title="Gerar" onPress={handleSubmit}/>
        </Container>
    )
}

export default Form