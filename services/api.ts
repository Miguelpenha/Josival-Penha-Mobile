import axios from 'axios'
import Constants from 'expo-constants'

const api = axios.create({
    baseURL: Constants.expoConfig?.extra?.API_URL,
    headers: {
        authorization: `key ${Constants.expoConfig?.extra?.API_KEY}`
    }
})

export default api