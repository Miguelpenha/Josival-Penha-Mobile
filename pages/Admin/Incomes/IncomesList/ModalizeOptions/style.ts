import styled from 'styled-components/native'
import Button from '../../../../../components/Button'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled.View`
    justify-content: space-evenly;
    height: ${RFPercentage(34)}px;
    margin-top: ${RFPercentage(8)}px;
    margin-bottom: ${RFPercentage(8)}px;
`

export const ButtonCancel = styled(Button)`
    background-color: red;
`