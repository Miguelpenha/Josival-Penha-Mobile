export declare global {
    namespace NodeJS {
      interface ProcessEnv {
        API_URL: string
        API_KEY: string
        PATH_ENV_FILE: string
        NODE_ENV: 'development' | 'production'
      }
    }
}