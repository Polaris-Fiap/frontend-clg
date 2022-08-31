import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import AuthProvider from './src/contexts'

import { Routes } from './src/routes'

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <StatusBar />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </SafeAreaView>
  )
}
