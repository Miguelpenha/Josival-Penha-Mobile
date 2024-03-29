import * as FileSystem from 'expo-file-system'
import * as Sharing from 'expo-sharing'

async function generateSpreadsheet(type: string, name: String) {
  const URLDocument = `${process.env.EXPO_PUBLIC_API_URL}/export/${type}`
  const pathDocument = `${FileSystem.documentDirectory}${name}.xlsx`

  const { uri } = await FileSystem.downloadAsync(URLDocument, pathDocument, {
    headers: {
      authorization: `key ${process.env.EXPO_PUBLIC_API_KEY}`
    }
  })

  await Sharing.shareAsync(uri, {
    dialogTitle: `${name}.xlsx`,
    mimeType: 'application/vnd.ms-excel application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  })
}

export default generateSpreadsheet