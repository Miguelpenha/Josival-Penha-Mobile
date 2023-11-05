import { useRoute } from '@react-navigation/native'
import api from '../../../services/api'
import IIncome from '../../../types/income'
import ContainerDefault from '../../../components/ContainerDefault'
import HeaderBack from '../../../components/HeaderBack'
import { Container } from './style'
import Field from './Field'
import Loading from '../../../components/Loading'

interface IParams {
  incomeID: string
}

function Income() {
  const { incomeID } = useRoute().params as IParams
  const { data: income } = api.get<IIncome>(`/incomes/${incomeID}?student=true`)

  return <>
    <ContainerDefault scroll>
      <HeaderBack>Receita</HeaderBack>
      <Container>
        {income ? <>
          <Field index={1} label="Aluno" value={income.student.name}/>
          <Field index={2} label="Valor" value={income.value}/>
          <Field index={3} label="Data da cobrança" value={income.billingDate}/>
          <Field index={4} label="Data do pagamento" value={income.payDate}/>
          <Field index={5} label="Categoria" value={income.category}/>
          <Field index={6} label="Método de pagamento" value={income.payMethod}/>
          <Field index={7} label="Data de criação" value={income.created.date}/>
        </> : <Loading/>}
      </Container>
    </ContainerDefault>
  </>
}

export default Income