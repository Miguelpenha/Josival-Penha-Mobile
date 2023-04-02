import { FC } from 'react'
import { Container, Label, ContainerValue, Value } from './style'
import { FadeInDown } from 'react-native-reanimated'
import * as Clipboard from 'expo-clipboard'
import toast from 'react-native-toast-message'

interface IProps {
    label: string
    value: string
    index: number
}
  
const Field: FC<IProps> = ({ index, label, value }) => {
    async function onPress() {
        await Clipboard.setStringAsync(value || 'Não informado')

        toast.show({
            type: 'info',
            text1: 'Dado copiado'
        })
    }

    return (
        <Container entering={FadeInDown.duration(400).delay(100*index)}>
            <Label>{label}</Label>
            <ContainerValue onPress={onPress}>
                <Value>{value || 'Não informado'}</Value>
            </ContainerValue>
        </Container>
    )
}

export default Field