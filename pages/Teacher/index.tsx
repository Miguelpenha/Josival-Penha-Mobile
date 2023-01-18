import useLogout from './useLogout'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'

function Teacher() {
  const logout = useLogout()

  return (
    <ContainerPd>
      <HeaderBack onPress={logout}>Teacher</HeaderBack>
    </ContainerPd>
  )
}

export default Teacher