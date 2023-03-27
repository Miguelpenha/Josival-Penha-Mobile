import Constants from 'expo-constants'
import * as FileSystem from 'expo-file-system'
import * as Sharing from 'expo-sharing'

async function generateDocument(student: string, frequency: number, isScholarship: boolean, name: String) {
  const URLDocument = `${Constants.expoConfig?.extra?.API_URL}/students/documents/declaration/${student}?frequencyPercentage=${frequency}&scholarshipStudent=${isScholarship}`
  const pathDocument = `${FileSystem.documentDirectory}${name}.pdf`

  const { uri } = await FileSystem.downloadAsync(URLDocument, pathDocument, {
    headers: {
      authorization: `key ${Constants.expoConfig?.extra?.API_KEY}`
    }
  })

  await Sharing.shareAsync(uri, {
    dialogTitle: `${name}.pdf`,
    mimeType: 'application/pdf'
  })
}

export default generateDocument