import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { MaterialIcons } from '@expo/vector-icons'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled(Animated.View)`
    padding-top: 12%;
    flex-direction: row;
`

export const ContainerIcon = styled.TouchableOpacity`
    margin-left: 2%;
    align-self: center;
`

export const Icon = styled(MaterialIcons)`
    left: 20%;
    margin-right: 5%;
    color: ${props => props.theme.secondaryColor};
`

export const Title = styled.Text`
    font-size: ${RFPercentage(3.2)}px;
    color: ${props => props.theme.secondaryColor};
`