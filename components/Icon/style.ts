import styled, { css } from 'styled-components/native'
import { MaterialIcons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'

const styleIcon = css`
    color: ${props => props.theme.secondaryColor};
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