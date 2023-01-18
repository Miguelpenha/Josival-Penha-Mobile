import useLogout from './useLogout'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import Button from './Button'
import generateSpreadsheet from './generateSpreadsheet'
import { Icon } from './style'
import { Path } from 'react-native-svg'

function Admin() {
  const logout = useLogout()

  return (
    <ContainerPd>
      <HeaderBack onPress={logout}>Admin</HeaderBack>
      <Button title="Planilha de alunos" index={1} onPress={generateSpreadsheet}>
        <Icon width="32" height="32" viewBox="0 0 24 24">
          <Path d="M19,11V9H11V5H9V9H5V11H9V19H11V11H19M19,3C19.5,3 20,3.2 20.39,3.61C20.8,4 21,4.5 21,5V19C21,19.5 20.8,20 20.39,20.39C20,20.8 19.5,21 19,21H5C4.5,21 4,20.8 3.61,20.39C3.2,20 3,19.5 3,19V5C3,4.5 3.2,4 3.61,3.61C4,3.2 4.5,3 5,3H19Z"/>
        </Icon>
      </Button>
    </ContainerPd>
  )
}

export default Admin