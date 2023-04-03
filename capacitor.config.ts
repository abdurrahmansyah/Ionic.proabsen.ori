import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ridhtech.proabsen.ori',
  appName: 'Pro Absen',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    GoogleAuth: {
      scopes: ['profile', 'email'],
      serverClientId: '1022013831847-368em19j1td1k4ql10sbdasofvb9qaqs.apps.googleusercontent.com',
      forceCodeForRefreshToken: true,
    },
  }
};

export default config;
