import useLogout from './useLogout'
import ContainerDefault from '../../components/ContainerDefault'
import HeaderBack from '../../components/HeaderBack'

function Home() {
  const logout = useLogout()

  return (
    <ContainerDefault>
      <HeaderBack onPress={logout}>Professora</HeaderBack>
    </ContainerDefault>
  )
}

export default Home