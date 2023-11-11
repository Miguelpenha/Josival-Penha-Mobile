import useModalize from '../../components/useModalize'
import useAdmin from '../../components/useAdmin'
import useTeacher from '../../components/useTeacher'
import useAnimation from './useAnimation'
import useUpdateApp from '../../utils/useUpdateApp'
import useType from '../../components/useType'
import * as Clipboard from 'expo-clipboard'
import toast from 'react-native-toast-message'
import ContainerDefault from '../../components/ContainerDefault'
import HeaderBack from '../../components/HeaderBack'
import { Container, ContainerData, Label, Data, Button, ButtonLogout } from './style'
import { FadeInDown } from 'react-native-reanimated'
import Icon from '../../components/Icon'
import { Modalize } from 'react-native-modalize'
import ModalizeLogout from '../../components/ModalizeLogout'
import Loading from '../../components/Loading'

function Settings() {
  const { modalize: modalizeLogout, props: propsModalizeLogout } = useModalize()
  const admin = useAdmin()
  const teacher = useTeacher()
  const animation = useAnimation(async () => await handleCopy(admin || teacher))
  const updateApp = useUpdateApp()
  const type = useType()
  
  async function handleCopy(value: string | false) {
    if (value) {
      await Clipboard.setStringAsync(value)

      toast.show({
        type: 'info',
        text1: 'Dado copiado'
      })
    }
  }

  async function handleUpdate() {
    const update = await updateApp()

    if (!update) {
      toast.show({
        type: 'info',
        text1: 'Não há atualizações disponíveis'
      })
    }
  }

  return <>
    <ContainerDefault scroll>
      <HeaderBack>Configurações</HeaderBack>
      <Container>
        {(admin || teacher) ? <>
            <Label entering={FadeInDown.duration(500)}>Logado como </Label>
            <ContainerData activeOpacity={0.5} {...animation}>
              <Data>{admin || teacher}</Data>
            </ContainerData>
            <Button index={1} loading title="Atualizações" onPress={handleUpdate}>
              <Icon icon="sync"/>
            </Button>
            <ButtonLogout index={2} title="Logout" onPress={modalizeLogout.open}>
              <Icon icon="logout"/>
            </ButtonLogout>
        </> : <Loading/>}
      </Container>
    </ContainerDefault>
    <Modalize avoidKeyboardLikeIOS={true} {...propsModalizeLogout}>
      <ModalizeLogout type={type} modalize={modalizeLogout.ref}/>
    </Modalize>
  </>
}

export default Settings