import { useState } from 'react'
import { useTheme } from 'styled-components'
import Container from './Container'
import HeaderBack from '../../../components/HeaderBack'
import Animated, { FadeInUp } from 'react-native-reanimated'
import { InputSearch } from './style'
import IncomesList from './IncomesList'

function Incomes() {
  const [search, setSearch] = useState('')
  const theme = useTheme()
  
  return (
    <Container>
      <HeaderBack>Receitas</HeaderBack>
      <Animated.View entering={FadeInUp.delay(100).duration(400)}>
        <InputSearch
          value={search}
          autoCapitalize="words"
          onChangeText={setSearch}
          placeholder="Pesquisar..."
          cursorColor={theme.primary}
          selectionColor={theme.primary}
          placeholderTextColor={theme.primary}
        />
      </Animated.View>
      <IncomesList search={search}/>
    </Container>
  )
}

export default Incomes