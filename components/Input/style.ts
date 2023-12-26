import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'
import Animated from 'react-native-reanimated'
import { TextInput } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled.View`
    align-self: center;
    flex-direction: row;
`

export const ContainerIcon = styled.TouchableOpacity`
    align-self: center;
`

export const Icon = styled(MaterialIcons)`
    margin-left: 4%;
    color: ${props => props.theme.secondaryColor};
`

interface IInputRaw {
    icon: boolean
}

export const InputRaw = styled(Animated.createAnimatedComponent(TextInput))<IInputRaw>`
    padding: 4%;
    font-size: ${RFPercentage(2.5)}px;
    color: ${props => props.theme.color};
    width: ${props => props.icon ? 83 : 100}%;
    background-color: ${props => props.theme.backgroundColor};
`