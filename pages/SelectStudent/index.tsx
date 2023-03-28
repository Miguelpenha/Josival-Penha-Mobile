import { useState } from 'react'
import { useTheme } from 'styled-components'
import HeaderBack from '../../components/HeaderBack'
import Container from './Container'
import InputSearch from './InputSearch'
import Students from './Students'

function SelectStudent() {
  const [search, setSearch] = useState('')
  const theme = useTheme()
  
  return (
    <Container>
      <HeaderBack>Selecione um aluno</HeaderBack>
      <InputSearch
        value={search}
        autoCapitalize="words"
        onChangeText={setSearch}
        placeholder="Pesquisar..."
        cursorColor={theme.primary}
        selectionColor={theme.primary}
        placeholderTextColor={theme.primary}
      />
      <Students search={search}/>
    </Container>
  )
}

export default SelectStudent