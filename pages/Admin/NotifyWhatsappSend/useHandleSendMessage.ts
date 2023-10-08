import { useNavigation } from '@react-navigation/native'
import base from '../../../services/api/base'
import Toast from 'react-native-toast-message'

function useHandleSendMessage(telephoneRaw: string) {
  const navigation = useNavigation()

  async function handleSendMessage() {
    const telephone = telephoneRaw.replace(/-/g, ' ').replace(/\(/g, '').replace(/\)/g, '').replace(/\s+/g, '').replace(/\+/g, '')

    const { data } = await base.post<{ send: boolean }>(`/notify/whatsapp/whatsapp:${telephone}`, {
      month: '10'
    })

    if (data.send) {
      Toast.show({
        type: 'success',
        text1: 'Boleto enviado com sucesso!'
      })

      navigation.reset({
        routes: [{ name: 'AdminHome' }]
      })
    } else {
      Toast.show({
        type: 'error',
        text1: 'Houve um error ao enviar o boleto'
      })
    }
  }

  return handleSendMessage
}

export default useHandleSendMessage