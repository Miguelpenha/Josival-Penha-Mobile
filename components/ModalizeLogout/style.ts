import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { RFPercentage } from 'react-native-responsive-fontsize'
import Button from '../Button'

export const Title = styled(Animated.Text)`
    margin-top: 8%;
    font-weight: bold;
    margin-bottom: 8%;
    align-self: center;
    font-size: ${RFPercentage(4)}px;
    color: ${props => props.theme.primary};
`

export const ButtonCancel = styled(Button)`
    background-color: red;
`