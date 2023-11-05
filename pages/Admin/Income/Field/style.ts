import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled(Animated.View)`
    margin-bottom: 5%;
`

export const Label = styled.Text`
    font-weight: bold;
    margin-bottom: 1.5%;
    font-size: ${RFPercentage(3.2)}px;
    color: ${props => props.theme.primary};
`

export const ContainerValue = styled.TouchableOpacity`
    align-self: flex-start;
`

export const Value = styled.Text`
    font-size: ${RFPercentage(2.5)}px;
    color: ${props => props.theme.color};
`