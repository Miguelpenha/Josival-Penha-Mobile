import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { MaterialIcons } from '@expo/vector-icons'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled(Animated.View)`
    padding-top: 13%;
    flex-direction: row;
`

export const ContainerIcon = styled.TouchableOpacity`
    margin-left: 4%;
    margin-right: 2%;
    align-self: center;
`

interface IIcon {
    color: string
}

export const Icon = styled(MaterialIcons)<IIcon>`
    color: ${props => props.theme[props.color] || props.color};
`

interface ITitle {
    color: string
}

export const Title = styled.Text<ITitle>`
    font-size: ${RFPercentage(3.2)}px;
    color: ${props => props.theme[props.color] || props.color};
`

export const ContainerIconSecondary = styled.TouchableOpacity`
    left: 88%;
    position: absolute;
    align-self: flex-end;
`

interface IIconSecondary {
    color: string
}

export const IconSecondary = styled(MaterialIcons)<IIconSecondary>`
    color: ${props => props.theme[props.color] || props.color}
`