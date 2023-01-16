export declare global {
    namespace NodeJS {
      interface ProcessEnv {
        API_URL: string
        API_KEY: string
        PATH_ENV_FILE: string
        GOOGLE_WEB_CLIENT_ID: string
        GOOGLE_EXPO_CLIENT_ID: string
        GOOGLE_ANDROID_CLIENT_ID: string
        NODE_ENV: 'development' | 'production'
      }
    }
}