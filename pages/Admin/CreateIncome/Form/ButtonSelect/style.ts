import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { TouchableOpacity } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled(Animated.createAnimatedComponent(TouchableOpacity))`
    width: 100%;
    padding: 4%;
    align-self: center;
    border-radius: 20px;
    font-size: ${RFPercentage(2.2)}px;
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.backgroundColor};
`

export const Text = styled.Text`
    font-size: ${RFPercentage(2.3)}px;
    color: ${props => props.theme.primary};
`