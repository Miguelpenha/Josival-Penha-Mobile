import { Dispatch, SetStateAction } from 'react'
import api from '../../../services/api/base'

async function load(setLoading: Dispatch<SetStateAction<boolean>>) {
    const { data } = await api.get('/teachers?count=true')

    if (data) {
        setLoading(true)
    } else {
        setLoading(false)
    }
}

export default load