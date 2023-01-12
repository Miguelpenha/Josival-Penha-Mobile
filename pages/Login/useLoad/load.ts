import { Dispatch, SetStateAction } from 'react'
import axios from 'axios'

async function load(setLoading: Dispatch<SetStateAction<boolean>>) {
    const { data } = await axios.get(`${process.env.API_URL}/public/Padrão.jpg`)

    if (data) {
        setLoading(true)
    } else {
        setLoading(false)
    }
}

export default load