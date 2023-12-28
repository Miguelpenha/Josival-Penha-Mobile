import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { TouchableOpacity } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled(Animated.createAnimatedComponent(TouchableOpacity))`
    border-radius: 10px;
    padding: ${RFPercentage(2)}px;
    margin: ${RFPercentage(1)}px ${RFPercentage(3)}px;
    background-color: ${props => props.theme.backgroundColorSecondary};
`

export const Name = styled.Text`
    font-size: ${RFPercentage(2.5)}px;
    color: ${props => props.theme.primary};
`