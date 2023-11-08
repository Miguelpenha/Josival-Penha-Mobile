import { useRoute } from '@react-navigation/native'
import Container from './Container'
import HeaderBack from '../../../components/HeaderBack'
import Form from './Form'

interface IParams {
  studentID: string
}

function CreateIncome() {
  const { studentID } = useRoute().params as IParams

  return (
    <Container>
      <HeaderBack>Cadastrar receita</HeaderBack>
      <Form student={studentID}/>
    </Container>
  )
}

export default CreateIncome