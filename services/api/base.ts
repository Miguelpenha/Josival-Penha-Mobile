import axios from 'axios'

const base = axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_URL,
    headers: {
        authorization: `key ${process.env.EXPO_PUBLIC_API_KEY}`
    }
})

export default base