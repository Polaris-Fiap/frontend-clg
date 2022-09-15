import React, { useCallback } from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import AuthProvider from './src/contexts'

import { Routes } from './src/routes'

import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto'
import * as SplashScreen from 'expo-splash-screen'
import { theme } from './src/styles/theme'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }} onLayout={onLayoutRootView}>
      <StatusBar backgroundColor={theme.colors.cultured} />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </SafeAreaView>
  )
}
