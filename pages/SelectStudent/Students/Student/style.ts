import styled from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled.TouchableOpacity`
    margin: 2%;
    padding: 3%;
    border-radius: 10px;
    background-color: ${props => props.theme.backgroundColorSecondary};
`

export const Name = styled.Text`
    font-size: ${RFPercentage(2.5)}px;
    color: ${props => props.theme.primary};
`