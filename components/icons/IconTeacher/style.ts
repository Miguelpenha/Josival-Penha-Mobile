import styled from 'styled-components/native'
import { FontAwesome5 } from '@expo/vector-icons'

export const Icon = styled(FontAwesome5)`
    margin-right: 8%;
    color: ${props => props.theme.secondaryColor};
`