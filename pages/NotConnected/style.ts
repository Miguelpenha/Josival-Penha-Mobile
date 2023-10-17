import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { MaterialIcons } from '@expo/vector-icons'

export const Title = styled(Animated.Text)`
    margin-top: 15%;
    font-weight: bold;
    margin-bottom: 8%;
    align-self: center;
    font-size: ${RFPercentage(4.5)}px;
    color: ${props => props.theme.primary};
`

export const IconNoWifi = styled(MaterialIcons)`
    margin-top: 4%;
    align-self: center;
    color: ${props => props.theme.primary};
`