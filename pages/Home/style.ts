import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { Svg } from 'react-native-svg'

export const Title = styled(Animated.Text)`
    margin-top: 18%;
    font-weight: bold;
    align-self: center;
    font-size: ${RFPercentage(4.5)}px;
    color: ${props => props.theme.primary};
`

export const Icon = styled(Svg)`
    margin-right: 7%;
    fill: ${props => props.theme.primary}
`