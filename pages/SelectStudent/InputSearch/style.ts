import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { TextInput } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Input = styled(Animated.createAnimatedComponent(TextInput))`
    width: 95%;
    padding: 4%;
    margin-top: 5%;
    align-self: center;
    font-size: ${RFPercentage(2.2)}px;
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.backgroundColorSecondary};
`