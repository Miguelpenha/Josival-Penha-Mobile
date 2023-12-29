import 'dotenv/config'
import request from 'supertest'

const api = request(process.env.EXPO_PUBLIC_API_URL)

test('Testing API', async () => {
    await api.get('/students')
    .set('authorization', `key ${process.env.EXPO_PUBLIC_API_KEY}`)
    .expect(300)
})