import Constants from 'expo-constants'
import * as FileSystem from 'expo-file-system'
import * as Sharing from 'expo-sharing'

async function generateSpreadsheet() {
    const URLDocument = `${Constants.expoConfig?.extra?.API_URL}/students/export`
    const pathDocument = `${FileSystem.documentDirectory}Planilha de alunos.xlsx`

    const { uri } = await FileSystem.downloadAsync(URLDocument, pathDocument, {
      headers: {
        authorization: `key ${Constants.expoConfig?.extra?.API_KEY}`
      }
    })
  
    await Sharing.shareAsync(uri, {
      dialogTitle: 'Planilha de alunos.xlsx',
      mimeType: 'application/vnd.ms-excel application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    })
}

export default generateSpreadsheet