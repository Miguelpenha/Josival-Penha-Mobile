import { useState } from 'react'
import { useTheme } from 'styled-components'
import Container from './Container'
import HeaderBack from '../../components/HeaderBack'
import { FadeIn } from 'react-native-reanimated'
import { ContainerInputSearch, InputSearch } from './style'
import Students from './Students'

function SelectStudent() {
  const [search, setSearch] = useState('')
  const theme = useTheme()
  
  return (
    <Container>
      <HeaderBack>Selecione um aluno</HeaderBack>
      <ContainerInputSearch entering={FadeIn.duration(400)}>
        <InputSearch
          value={search}
          autoCapitalize="words"
          onChangeText={setSearch}
          placeholder="Pesquisar..."
          cursorColor={theme.primary}
          selectionColor={theme.primary}
          placeholderTextColor={theme.primary}
        />
      </ContainerInputSearch>
      <Students search={search}/>
    </Container>
  )
}

export default SelectStudent