import { useRoute } from '@react-navigation/native'
import api from '../../../services/api'
import IStudent from '../../../types/student'
import ContainerDefault from '../../../components/ContainerDefault'
import HeaderBack from '../../../components/HeaderBack'
import { Container } from './style'
import Field from './Field'
import Loading from '../../../components/Loading'

interface IParams {
  studentID: string
}

function Student() {
  const { studentID } = useRoute().params as IParams
  const { data: student } = api.get<IStudent>(`/students/${studentID}?class=true&address=true`)

  return (
    <ContainerDefault scroll>
      <HeaderBack>Aluno</HeaderBack>
      <Container>
        {student ? <>
          <Field label="Nome" index={1} value={student.name}/>
          <Field label="CPF" index={2} value={student.cpf}/>
          <Field label="Data de nascimento" index={3} value={student.birth}/>
          <Field label="E-mail" index={4} value={student.email}/>
          <Field label="Gênero" index={5} value={student.gender}/>
          <Field label="Telefone" index={6} value={student.telephone}/>
          <Field label="Situação" index={7} value={student.situation}/>
          <Field label="Primeiro responsável" index={8} value={student.responsible1}/>
          <Field label="Segundo responsável" index={9} value={student.responsible2}/>
          <Field label="Turma" index={10} value={student.class && student.class.name}/>
          <Field label="CEP" index={11} value={student.address && student.address.cep}/>
          <Field label="Cidade" index={12} value={student.address && student.address.city}/>
          <Field label="Bairro" index={13} value={student.address && student.address.neighborhood}/>
          <Field label="Rua" index={14} value={student.address && student.address.street}/>
          <Field label="Número da casa" index={15} value={student.address && String(student.address.number)}/>
          <Field label="Complemento da casa" index={16} value={student.address && student.address.complement}/>
        </> : <Loading/>}
      </Container>
    </ContainerDefault>
  )
}

export default Student