import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled(Animated.ScrollView)`
    padding: 2%;
    padding-top: 5%;
    background-color: ${props => props.theme.primary};
`

export const Field = styled(Animated.View)`
    width: 75%;
    margin-bottom: 4%;
    align-self: center;
`

export const Label = styled.Text`
    margin-bottom: 4%;
    font-weight: bold;
    font-size: ${RFPercentage(2.8)}px;
    color: ${props => props.theme.secondaryColor};
`