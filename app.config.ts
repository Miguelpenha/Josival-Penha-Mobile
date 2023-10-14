import { ConfigContext, ExpoConfig } from 'expo/config'

export default ({ config }: ConfigContext) => ({
  ...config,
  scheme: 'josival-penha',
  originalFullName: '@miguelpenha/Josival-Penha',
  currentFullName: '@miguelpenha/Josival-Penha',
  name: 'Josival Penha',
  slug: 'Josival-Penha',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'automatic',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#FFFFFF'
  },
  updates: {
    url: 'https://u.expo.dev/35b50bcb-8638-4abc-91d4-0c02c467e99f'
  },
  assetBundlePatterns: [
    '**/*'
  ],
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#FFFFFF'
    },
    package: 'com.josivalpenha.josival.penha'
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
      projectId: '35b50bcb-8638-4abc-91d4-0c02c467e99f'
    }
  },
  runtimeVersion: {
    policy: 'sdkVersion'
  },
  plugins: [
    [
      'expo-updates',
      {
        username: 'miguelpenha'
      }
    ]
  ]
} as ExpoConfig)