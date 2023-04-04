import useModalize from '../../components/useModalize'
import ContainerDefault from '../../components/ContainerDefault'
import HeaderBack from '../../components/HeaderBack'
import { Modalize } from 'react-native-modalize'
import ModalizeLogout from '../../components/ModalizeLogout'

function Teacher() {
  const { modalize: modalizeLogout, props: propsModalizeLogout } = useModalize()

  return <>
    <ContainerDefault scroll>
      <HeaderBack settings icon="logout" onPress={modalizeLogout.open}>Professora</HeaderBack>
    </ContainerDefault>
    <Modalize {...propsModalizeLogout}>
      <ModalizeLogout type="teacher" modalize={modalizeLogout.ref}/>
    </Modalize>
  </>
}

export default Teacher