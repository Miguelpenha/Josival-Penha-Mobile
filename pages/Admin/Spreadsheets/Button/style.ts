import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { TouchableOpacity } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled(Animated.createAnimatedComponent(TouchableOpacity))`
    width: 65%;
    padding: 5.5%;
    margin-top: 15%;
    padding-left: 4%;
    align-self: center;
    border-radius: 15px;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    background-color: ${props => props.theme.backgroundColorSecondary};
`

export const Text = styled.Text`
    margin: auto;
    font-weight: bold;
    text-align: center;
    font-size: ${RFPercentage(3)}px;
    color: ${props => props.theme.primary};
`