const path = require('path')

module.exports = api => {
  api.cache(true)
  console.log(process.env.PATH_ENV_FILE)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      ['inline-dotenv', {
        systemVar: 'overwrite',
        path: process.env.PATH_ENV_FILE ? process.env.PATH_ENV_FILE : path.resolve(__dirname, '.env')
      }]
    ]
  }
}