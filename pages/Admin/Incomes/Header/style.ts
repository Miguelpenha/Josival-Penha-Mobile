import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { StyleSheet } from 'react-native'
import Input from '../../../../components/Input'
import { TouchableOpacity } from 'react-native'

export const Container = styled(Animated.View)`
    width: 90%;
    margin-top: 5%;
    padding-bottom: 2%;
    align-self: center;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const { containerInputSearch } = StyleSheet.create({
    containerInputSearch: {
        width: '85%'
    }
})

export const InputSearch = styled(Input).attrs({
    styleContainer: containerInputSearch
})`
    padding: 3%;
    background-color: ${props => props.theme.backgroundColorSecondary};
`

export const ButtonCreate = styled(Animated.createAnimatedComponent(TouchableOpacity))`
    padding: 1%;
    border-radius: 50px;
    background-color: ${props => props.theme.primary};
`