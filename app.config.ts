import dotenv from 'dotenv'
import path from 'path'
import { ConfigContext, ExpoConfig } from 'expo/config'

dotenv.config({
  path: process.env.PATH_ENV_FILE ? process.env.PATH_ENV_FILE : path.resolve(__dirname, '.env')
})

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  scheme: 'report-card',
  originalFullName: '@miguelpenha/report-card',
  currentFullName: '@miguelpenha/report-card',
  name: 'Report Card',
  slug: 'report-card',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'automatic',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#200004'
  },
  updates: {
    fallbackToCacheTimeout: 0,
    url: 'https://u.expo.dev/f69102c5-2514-4954-8550-4be770430d6a'
  },
  assetBundlePatterns: [
    '**/*'
  ],
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#200004'
    },
    package: 'com.josivalpenha.report.card'
  },
  ios: {
    supportsTablet: true
  },
  web: {
    favicon: './assets/favicon.png'
  },
  extra: {
    ...process.env,
    eas: {
      projectId: 'f69102c5-2514-4954-8550-4be770430d6a'
    }
  },
  runtimeVersion: {
    policy: 'sdkVersion'
  }
})