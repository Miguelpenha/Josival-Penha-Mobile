import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { TextInput } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const InputRaw = styled(Animated.createAnimatedComponent(TextInput))`
    padding: 4%;
    font-size: ${RFPercentage(2.2)}px;
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.backgroundColor};
`