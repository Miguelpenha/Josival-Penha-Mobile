import styled, { css } from 'styled-components/native'
import { MaterialIcons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'

const styleIcon = css`
    margin-right: 8%;
    color: ${props => props.theme.primary};
`

export const IconMaterialIcons = styled(MaterialIcons)`
    ${styleIcon}
`

export const IconAntDesign = styled(AntDesign)`
    ${styleIcon}
`

export const IconMaterialCommunityIcons = styled(MaterialCommunityIcons)`
    ${styleIcon}
`