import { useState } from 'react'
import Container from './Container'
import HeaderBack from '../../../components/HeaderBack'
import Header from './Header'
import IncomesList from './IncomesList'

function Incomes() {
  const [search, setSearch] = useState('')
  
  return (
    <Container>
      <HeaderBack>Receitas</HeaderBack>
      <Header search={search} setSearch={setSearch}/>
      <IncomesList search={search}/>
    </Container>
  )
}

export default Incomes