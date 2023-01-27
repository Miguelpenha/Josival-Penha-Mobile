import styled from 'styled-components/native'
import { Svg } from 'react-native-svg'

export const Icon = styled(Svg)`
    width: 32px;
    height: 32px;
    margin-right: 7%;
    fill: ${props => props.theme.primary};
`