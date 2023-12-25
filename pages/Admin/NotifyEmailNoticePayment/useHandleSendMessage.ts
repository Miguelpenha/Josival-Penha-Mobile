import { useNavigation } from '@react-navigation/native'
import base from '../../../services/api/base'
import Toast from 'react-native-toast-message'

function useHandleSendMessage(email: string, title: string, text: string, action: { text: string, link: string }) {
  const navigation = useNavigation()

  async function handleSendMessage() {
    const { data } = await base.post<{ send: boolean }>(`/notify/email/send/${email}`, {
      text,
      title,
      action
    })

    if (data.send) {
      Toast.show({
        type: 'success',
        text1: 'Aviso enviado com sucesso!'
      })

      navigation.reset({
        routes: [{ name: 'AdminHome' }]
      })
    } else {
      Toast.show({
        type: 'error',
        text1: 'Houve um error ao enviar o aviso'
      })
    }
  }

  return handleSendMessage
}

export default useHandleSendMessage