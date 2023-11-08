import { FC, Dispatch, SetStateAction } from 'react'
import { useTheme } from 'styled-components'
import useAnimationButtonCreate from './useAnimationButtonCreate'
import { useNavigation } from '@react-navigation/native'
import { Container, InputSearch, ButtonCreate } from './style'
import { FadeInUp } from 'react-native-reanimated'
import Icon from '../../../../components/Icon'

interface IProps {
    search: string
    setSearch: Dispatch<SetStateAction<string>>
}

const Header: FC<IProps> = ({ search, setSearch }) => {
    const theme = useTheme()
    const animationButtonCreate = useAnimationButtonCreate(handlePress)
    const navigation = useNavigation()

    function handlePress() {
        navigation.navigate('SelectStudent', {
            next: 'AdminCreateIncome'
        })
    }

    return (
        <Container entering={FadeInUp.delay(100).duration(400)}>
            <InputSearch
                value={search}
                autoCapitalize="words"
                onChangeText={setSearch}
                placeholder="Pesquisar..."
                cursorColor={theme.primary}
                selectionColor={theme.primary}
                placeholderTextColor={theme.primary}
            />
            <ButtonCreate {...animationButtonCreate}>
                <Icon icon="add"/>
            </ButtonCreate>
        </Container>
    )
}

export default Header