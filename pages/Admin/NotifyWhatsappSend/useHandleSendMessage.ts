import { useNavigation } from '@react-navigation/native'
import base from '../../../services/api/base'
import * as Clipboard from 'expo-clipboard'
import Toast from 'react-native-toast-message'

function useHandleSendMessage(telephoneRaw: string) {
  const navigation = useNavigation()

  async function handleSendMessage() {
    const telephone = telephoneRaw.replace(/-/g, ' ').replace(/\(/g, '').replace(/\)/g, '').replace(/\s+/g, '').replace(/\+/g, '')

    const { data } = await base.post<{ link: string }>(`/notify/whatsapp/${telephone.includes('55') ? telephone : `55${telephone}`}`, {
      month: '10'
    })

    if (data.link) {
      await Clipboard.setStringAsync(data.link)

      Toast.show({
        type: 'success',
        text1: 'Link copiado para a sua área de transferência!'
      })

      navigation.reset({
        routes: [{ name: 'AdminHome' }]
      })
    } else {
      Toast.show({
        type: 'error',
        text1: 'Houve um error ao gerar o link'
      })
    }
  }

  return handleSendMessage
}

export default useHandleSendMessage