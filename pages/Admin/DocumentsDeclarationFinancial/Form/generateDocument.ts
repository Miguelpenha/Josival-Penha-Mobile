
import * as FileSystem from 'expo-file-system'
import * as Sharing from 'expo-sharing'

async function generateDocument(student: string, month: string, name: String) {
  const URLDocument = `${process.env.EXPO_PUBLIC_API_URL}/students/documents/financial/${student}?month=${month}`
  const pathDocument = `${FileSystem.documentDirectory}${name}.pdf`

  const { uri } = await FileSystem.downloadAsync(URLDocument, pathDocument, {
    headers: {
      authorization: `key ${process.env.EXPO_PUBLIC_API_KEY}`
    }
  })

  await Sharing.shareAsync(uri, {
    dialogTitle: `${name}.pdf`,
    mimeType: 'application/pdf'
  })
}

export default generateDocument