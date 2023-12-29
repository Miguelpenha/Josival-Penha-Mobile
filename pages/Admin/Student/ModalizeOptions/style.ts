import styled from 'styled-components/native'
import Button from '../../../../components/Button'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled.View`
    margin-top: ${RFPercentage(8)}px;
`

export const ButtonCancel = styled(Button)`
    background-color: red;
`