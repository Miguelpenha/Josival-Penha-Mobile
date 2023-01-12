import useLoad from './useLoad'
import Container from './Container'
import { Title } from './style'
import { FadeInDown } from 'react-native-reanimated'
import Form from './Form'
import Loading from '../../components/Loading'

function Login() {
  const loading = useLoad()

  if (loading) {
    return (
      <Container>
        <Title entering={FadeInDown}>Login</Title>
        <Form/>
      </Container>
    )
  } else {
    return <Loading/>
  }
}

export default Login