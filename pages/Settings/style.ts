import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { TouchableOpacity } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import Button from '../../components/Button'

export const Container = styled.View`
    margin-top: 5%;
`

export const ContainerData = styled(Animated.createAnimatedComponent(TouchableOpacity))`
    width: 90%;
    padding: 5%;
    margin-top: 5%;
    align-self: center;
    border-radius: 10px;
    background-color: ${props => props.theme.primary};
`

export const Label = styled(Animated.Text)`
    font-weight: bold;
    margin-bottom: 1%;
    text-align: center;
    font-size: ${RFPercentage(3)}px;
    color: ${props => props.theme.backgroundColorSecondary};
`

export const Data = styled(Animated.Text)`
    text-align: center;
    font-size: ${RFPercentage(3)}px;
    color: ${props => props.theme.secondaryColor};
`

export const ButtonLogout = styled(Button)`
    margin-top: 15%;
    background-color: red;
`