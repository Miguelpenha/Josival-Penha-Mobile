import styled, { css } from 'styled-components/native'
import { Svg } from 'react-native-svg'
import { MaterialIcons } from '@expo/vector-icons'

const styleIcon = css`
    margin-right: 7%;
`

export const Icon = styled(Svg)`
    ${styleIcon}

    fill: ${props => props.theme.primary};
`

export const IconMaterial = styled(MaterialIcons)`
    ${styleIcon}

    color: ${props => props.theme.primary};
`