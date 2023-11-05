import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { TouchableOpacity } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled(Animated.createAnimatedComponent(TouchableOpacity))`
    padding: 3.5%;
    margin: 3% 5%;
    border-radius: 10px;
    background-color: ${props => props.theme.backgroundColorSecondary};
`

export const PayDate = styled.Text`
    font-size: ${RFPercentage(2)}px;
    color: ${props => props.theme.primary};
`

export const Value = styled.Text`
    margin-top: 5%;
    font-weight: bold;
    font-size: ${RFPercentage(2.5)}px;
    color: ${props => props.theme.primary};
`

export const Student = styled.Text`
    margin-top: 1%;
    font-size: ${RFPercentage(2.5)}px;
    color: ${props => props.theme.primary};
`