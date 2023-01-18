import useLogout from './useLogout'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'

function Home() {
  const logout = useLogout()

  return (
    <ContainerPd>
      <HeaderBack onPress={logout}>Professora</HeaderBack>
    </ContainerPd>
  )
}

export default Home