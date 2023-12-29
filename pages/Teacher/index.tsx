import useModalize from '../../components/useModalize'
import { useNavigation } from '@react-navigation/native'
import ContainerDefault from '../../components/ContainerDefault'
import HeaderBack from '../../components/HeaderBack'
import { Modalize } from 'react-native-modalize'
import ModalizeLogout from '../../components/ModalizeLogout'

function Teacher() {
  const { modalize: modalizeLogout, props: propsModalizeLogout } = useModalize()
  const navigation = useNavigation()

  return <>
    <ContainerDefault scroll>
      <HeaderBack
        icon="logout"
        iconSecondary="settings"
        onPress={modalizeLogout.open}
        onPressSecondary={() => navigation.navigate('Settings')}
      >
        Professora
      </HeaderBack>
    </ContainerDefault>
    <Modalize avoidKeyboardLikeIOS={true} {...propsModalizeLogout}>
      <ModalizeLogout type="teacher" modalize={modalizeLogout.ref}/>
    </Modalize>
  </>
}

export default Teacher