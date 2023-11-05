import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import Input from '../../../components/Input'

const { containerInputSearch } = StyleSheet.create({
    containerInputSearch: {
        width: '90%',
        marginTop: '5%'
    }
})

export const InputSearch = styled(Input).attrs({
    styleContainer: containerInputSearch
})`
    padding: 3%;
    background-color: ${props => props.theme.backgroundColorSecondary};
`